export type ReviewEntry = {
  title: string;
  category: string;
  verdict: string;
  image: string;
  href: string;
  summary: string;
  publishedAt: string;
};

export const reviewEntries: ReviewEntry[] = [
  {
    title: "Hooray for Ray",
    category: "Ramen Ray",
    verdict: "Order the Spicy Miso",
    image: "/ramen-clean.png",
    href: "/reviews/ramen-field-note",
    summary: "Spicy miso pork broth with chili heat, noodles, chashu, a marinated egg, and vegetables.",
    publishedAt: "2026-08-25T09:30:00-04:00",
  },
  {
    title: "No, You Can Be My Wingman",
    category: "Wings",
    verdict: "New #1",
    image: "/colonel-crying.webp",
    href: "/reviews/wingman",
    summary: "Korean fried chicken, Buffalo wings, and why soy garlic now holds the top spot.",
    publishedAt: "2026-08-25T01:20:00-04:00",
  },
  {
    title: "The Day Lox Took a Back Seat",
    category: "Broad Ripple",
    verdict: "Order the Tonya Harding",
    image: "/bagel-clean.png",
    href: "/reviews/bagel-field-note",
    summary: "At Broad Ripple Bagel & Deli, turkey, ham, bacon, Colby, and Swiss turn a steamed plain bagel into the Tonya Harding.",
    publishedAt: "2026-08-25T09:00:00-04:00",
  },
  {
    title: "Pork chop field note",
    category: "Dinner",
    verdict: "Worth the price",
    image: "/chop-clean.png",
    href: "/reviews/pork-chop-field-note",
    summary: "A thick seared chop with greens and a sharp sauce drizzle.",
    publishedAt: "2026-08-23T00:00:00-04:00",
  },
];
