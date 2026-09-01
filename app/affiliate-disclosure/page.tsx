import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | BestaurantsIndy",
  description: "How BestaurantsIndy identifies affiliate links, hosted meals, gifts, and paid placements.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosure() {
  return <main><SiteHeader/><article className="policy contentPage"><p className="eyebrow">TRANSPARENCY</p><h1>Affiliate Disclosure</h1><p>BestaurantsIndy may earn a commission when a reader makes a purchase through a clearly identified affiliate link, at no additional cost to the reader.</p><h2>Editorial independence</h2><p>Compensation does not secretly purchase a positive review, ranking, or verdict. Recommendations reflect Sean&apos;s stated opinion and the evidence presented in the article.</p><h2>Hosted meals and gifts</h2><p>Complimentary meals, invitations, gifts, paid placements, and sponsorships are labeled plainly when they apply.</p><h2>Current status</h2><p>Not every article contains affiliate links. A disclosure is included near monetized content when applicable.</p></article><SiteFooter/></main>;
}
