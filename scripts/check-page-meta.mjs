#!/usr/bin/env node
/**
 * Snippet copy on every indexable page in dist/. Google shows about 60
 * characters of a title and 155–160 of a description; past that it cuts
 * mid-word. Titles also keep one separator style and the brand suffix,
 * and no page uses a repository slug as its H1. `seoDescription` in @grove-dev/astro clips anything longer
 * than 160 characters with an ellipsis, so a clipped description here
 * means the source copy (usually a record's `seo.description`) is too
 * long and has to be rewritten, not that the check is too strict.
 *
 * Usage: `pnpm build && node scripts/check-page-meta.mjs`
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE_NAME = JSON.parse(readFileSync('data/generated/site-config.json', 'utf8')).name;
const TITLE_MAX = 65;
const DESCRIPTION_MIN = 70;
const DESCRIPTION_MAX = 160;

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

function* pages(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* pages(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

const errors = [];
let checked = 0;
for (const file of pages('dist')) {
  const html = readFileSync(file, 'utf8');
  const robots = html.match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? '';
  if (/noindex/i.test(robots)) continue;
  checked += 1;

  const page = file.slice('dist'.length).replace(/index\.html$/, '');
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');

  if (title.length > TITLE_MAX) errors.push(`${page}: title is ${title.length} chars (max ${TITLE_MAX}): ${title}`);
  // One separator style: ":" inside the title, " | " before the brand.
  if (/ [–—] /.test(title)) errors.push(`${page}: title uses a dash separator: ${title}`);
  // Collection titles spend the room on a qualifier ("…: Self-Hosted
  // Help Desks"); every other page carries the brand.
  if (!page.startsWith('/collections/') && !title.endsWith(` | ${SITE_NAME}`)) {
    errors.push(`${page}: title has no " | ${SITE_NAME}" suffix: ${title}`);
  }
  const h1 = decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '').replace(/<[^>]+>/g, '').trim();
  if (/^[a-z0-9]+([-_][a-z0-9]+)+$/.test(h1)) errors.push(`${page}: H1 is a repo slug: ${h1}`);
  if (description.endsWith('…')) errors.push(`${page}: description is clipped — shorten the source copy`);
  else if (description.length > DESCRIPTION_MAX) errors.push(`${page}: description is ${description.length} chars`);
  if (description.length < DESCRIPTION_MIN) errors.push(`${page}: description is ${description.length} chars (min ${DESCRIPTION_MIN})`);
  if (description.includes('`')) errors.push(`${page}: description contains a code span`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s) on ${checked} indexable pages.`);
  process.exit(1);
}
console.log(`Page meta OK on ${checked} indexable pages.`);
