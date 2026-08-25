import {reviewEntries} from "../reviews/data";

const SITE_URL = "https://bestaurantsindy.com";

type FeedEntry = {
  title: string;
  category: string;
  image: string;
  href: string;
  summary: string;
  publishedAt: string;
  guid?: string;
};

const sectionEntries: FeedEntry[] = [
  {
    title: "The Best Nashville Hot Chicken Is from Nashville",
    category: "Out of Sight, Not Out of Mind",
    image: "/princes-hot-chicken.jpeg",
    href: "/out-of-sight-not-out-of-mind/princes-hot-chicken",
    summary: "Prince’s Hot Chicken Shack did not chase the Nashville hot-chicken trend. It started it—and the original still explains why the dish became a landmark.",
    publishedAt: "2026-08-25T16:31:00-04:00",
    guid: "/out-of-sight-not-out-of-mind/princes-hot-chicken#instagram-backfill-2026-08-25",
  },
  {
    title: "The Nostalgic Crunch Coat Cone",
    category: "Field Notes",
    image: "/jimmies-crunch-coat.jpg",
    href: "/field-notes/crunch-coat-cone",
    summary: "Vanilla soft serve buried under sweet golden crunch and rainbow sprinkles at Jimmies Dairy Bar in Pendleton.",
    publishedAt: "2026-08-25T16:30:00-04:00",
    guid: "/field-notes/crunch-coat-cone#instagram-backfill-2026-08-25",
  },
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function imageType(path: string) {
  if (path.endsWith(".webp")) return "image/webp";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  return "image/png";
}

export async function GET() {
  const entries: FeedEntry[] = [...reviewEntries, ...sectionEntries]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const items = entries.map((entry) => {
    const link = `${SITE_URL}${entry.href}`;
    const image = `${SITE_URL}${entry.image}`;
    return `<item>
      <title>${escapeXml(entry.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${SITE_URL}${entry.guid ?? entry.href}</guid>
      <description>${escapeXml(entry.summary)}</description>
      <category>${escapeXml(entry.category)}</category>
      <pubDate>${new Date(entry.publishedAt).toUTCString()}</pubDate>
      <enclosure url="${image}" type="${imageType(entry.image)}" />
      <media:content url="${image}" medium="image" type="${imageType(entry.image)}" />
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>BestaurantsIndy</title>
    <link>${SITE_URL}</link>
    <description>Reviews, Field Notes, and memorable food beyond Indianapolis from Sean Matthews.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(entries[0].publishedAt).toUTCString()}</lastBuildDate>
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
