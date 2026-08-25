import {reviewEntries} from "../reviews/data";

const SITE_URL = "https://bestaurantsindy.com";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const items = reviewEntries.map((entry) => {
    const link = `${SITE_URL}${entry.href}`;
    const image = `${SITE_URL}${entry.image}`;
    return `<item>
      <title>${escapeXml(entry.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(entry.summary)}</description>
      <category>${escapeXml(entry.category)}</category>
      <pubDate>${new Date(entry.publishedAt).toUTCString()}</pubDate>
      <enclosure url="${image}" type="${entry.image.endsWith(".webp") ? "image/webp" : "image/png"}" />
      <media:content url="${image}" medium="image" />
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>BestaurantsIndy Reviews</title>
    <link>${SITE_URL}/reviews</link>
    <description>Indianapolis restaurant reviews and field notes from Sean Matthews.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(reviewEntries[0].publishedAt).toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
