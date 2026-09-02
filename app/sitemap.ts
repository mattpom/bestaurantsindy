import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bestaurantsindy.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/reviews`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/field-notes`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/neighborhoods`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/editorial-policy`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/affiliate-disclosure`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/reviews/mamas-dolsot-bibimbap`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews/i-got-goosed-and-liked-it`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews/pork-chop-field-note`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews/ramen-field-note`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews/bagel-field-note`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews/wingman`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/field-notes/crunch-coat-cone`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/out-of-sight-not-out-of-mind`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/out-of-sight-not-out-of-mind/princes-hot-chicken`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/say-it-dont-spray-it`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/say-it-dont-spray-it/indianapolis-seafood-problem`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
