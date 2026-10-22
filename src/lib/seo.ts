/**
 * Search-intent titles and descriptions for this site.
 *
 * `@grove-dev/astro` builds safe generic SEO copy ("Apps built with
 * Flutter on …", "… — Open-source Business app"). Nobody searches for
 * those phrases, so the pages this site owns compose their own copy
 * here and keep everything else (OG image, JSON-LD, canonical) from
 * the package model.
 *
 * Editorial copy wins over every template below: a record's
 * `seo.title`, or a taxonomy term's `seoTitle` / `heading` /
 * `description` in `data/taxonomy/*.yml`.
 */
import { recordSeoDescriptor, seoDescription, seoTitle } from '@grove-dev/astro/server';

/** Room left for the main part of a title before `seoTitle` drops the suffix. */
const TITLE_MAX = 65;

export const HOME_TITLE = 'Open Source Apps, Reviewed and Compared';

interface RecordTitleInput {
  name: string;
  summary?: string | undefined;
  seoTitle?: string | undefined;
  categoryLabel?: string | undefined;
  stackLabel?: string | undefined;
  singular: string;
}

function titleCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * `{name} Review: {use case} | {site}` for a reviewed record, `{name}:
 * {use case} | {site}` otherwise. The record's `seo.title` holds the part
 * before the suffix (≤ 48 chars, so the suffix always fits).
 *
 * Without one: a short first clause of the summary, then the category.
 */
export function recordTitle(input: RecordTitleInput, siteName: string): string {
  if (input.seoTitle?.trim()) return seoTitle(input.seoTitle.trim(), siteName);

  const generic = recordSeoDescriptor({ singular: input.singular });
  const clause = recordSeoDescriptor({ summary: input.summary, singular: input.singular });
  if (clause !== generic) return seoTitle(`${input.name}: ${clause}`, siteName);

  const category =
    input.categoryLabel && input.categoryLabel.toLowerCase() !== 'uncategorized'
      ? `${input.categoryLabel} `
      : '';
  const base = `${input.name}: Open Source ${category}${titleCase(input.singular)}`;
  return seoTitle(base.length <= TITLE_MAX ? base : input.name, siteName);
}

export interface TaxonomyTerm {
  id: string;
  name: string;
  count?: number;
  /** `<title>` override. */
  seoTitle?: string;
  /** H1 override. */
  heading?: string;
  /** Lede + meta description override. */
  description?: string;
}

export type TaxonomyKind = 'stacks' | 'categories' | 'licenses';

/** "React (web)" reads badly inside a sentence; "React" does not. */
function plainName(term: TaxonomyTerm): string {
  return term.name.replace(/\s*\(.*\)\s*$/, '');
}

export function taxonomyHeading(term: TaxonomyTerm, plural: string): string {
  return term.heading?.trim() || `Open Source ${plainName(term)} ${titleCase(plural)}`;
}

export function taxonomyTitle(term: TaxonomyTerm, plural: string, siteName: string): string {
  return seoTitle(term.seoTitle?.trim() || taxonomyHeading(term, plural), siteName);
}

/**
 * Lede + meta description. The fallback reuses the H1's noun phrase
 * ("Open Source Games" → "open-source games") so a category named in
 * the plural never reads "games apps".
 */
export function taxonomyDescription(kind: TaxonomyKind, term: TaxonomyTerm, plural: string): string {
  const name = plainName(term);
  const noun = taxonomyHeading(term, plural).replace(/^Open Source /i, '');
  const each = 'with the source code, licence, platforms and recent activity of each one';
  const fallback =
    kind === 'stacks'
      ? `Open-source ${plural} built with ${name}, ${each}.`
      : kind === 'licenses'
        ? term.id === 'noassertion'
          ? `Open-source ${plural} whose licence GitHub could not detect. Check each repository's LICENSE file before you reuse the code.`
          : `Open-source ${plural} released under the ${name.replace(/^The /, '')}, ${each}.`
        : `Open-source ${noun.toLowerCase()}, ${each}.`;
  return seoDescription(term.description, fallback);
}
