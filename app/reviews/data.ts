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
    title: "Half and Half Is the Whole Point",
    category: "Yats",
    verdict: "Order Half and Half",
    image: "/yats-red-beans-crawfish-etouffee.jpg",
    href: "/reviews/yats-half-and-half",
    summary: "Red beans and rice beside crawfish étouffée, both served over rice with Yats’ spiced bread. Choosing two is the correct strategy.",
    publishedAt: "2026-09-05T20:00:00-04:00",
  },
  {
    title: "I Don’t Care That It’s a Chain. Sometimes You Have to Follow Your Heart",
    category: "Portillo’s",
    verdict: "Get the Beef Wet",
    image: "/portillos-italian-beef.jpg",
    href: "/reviews/portillos-follow-your-heart",
    summary: "Italian beef dipped wet, a fully dressed Chicago dog, and a chocolate cake shake. Sometimes the heart knows exactly what it wants.",
    publishedAt: "2026-09-04T14:00:00-04:00",
  },
  {
    title: "Sean Likes Wingies",
    category: "Wings",
    verdict: "Smoke First. Fry Second.",
    image: "/fat-dans-wingies.jpeg",
    href: "/reviews/sean-likes-wingies",
    summary: "Fat Dan’s hickory-smokes its jumbo wings, flash-fries them for a crisp finish, and serves them beside hand-cut fries in a SoBro pub made for watching the Cubs.",
    publishedAt: "2026-09-03T22:15:00-04:00",
  },
  {
    title: "The Best Part Is at the Bottom",
    category: "Mama’s Korean Restaurant",
    verdict: "Let It Sit",
    image: "/mamas-dolsot-bibimbap.jpg",
    href: "/reviews/mamas-dolsot-bibimbap",
    summary: "Mama’s dolsot bibimbap arrives sizzling with rice, vegetables, beef, and egg. Sean’s advice: wait before mixing so the rice against the stone turns deeply crisp.",
    publishedAt: "2026-08-26T06:00:00-04:00",
  },
  {
    title: "Hall of Sean: Spoke & Steele’s Pork Chop",
    category: "Dinner",
    verdict: "Hall of Sean",
    image: "/chop-clean.png",
    href: "/reviews/pork-chop-field-note",
    summary: "The exact pork chop pictured is no longer on the current menu, but it remains a memorable example of the confident, polished food Spoke & Steele can put on the table.",
    publishedAt: "2026-08-25T12:20:00-04:00",
  },
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
];
