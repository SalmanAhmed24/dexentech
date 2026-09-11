/**
 * Renders structured data as a JSON-LD script tag.
 *
 * This is a server component, so the schema ships inside the initial HTML.
 * Crawlers that do not execute JavaScript — and most LLM fetchers do not —
 * still see it. That is the whole point of doing it here rather than in an
 * effect.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own typed helpers, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
