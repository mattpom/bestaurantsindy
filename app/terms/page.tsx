import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Terms of Use | BestaurantsIndy",
  description: "Terms governing use of BestaurantsIndy content and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfUse() {
  return <main><SiteHeader/><article className="policy contentPage"><p className="eyebrow">LEGAL</p><h1>Terms of Use</h1><p>Last updated: September 1, 2026</p><p>By using BestaurantsIndy, you agree to these terms. BestaurantsIndy is owned and operated by Mattpom Digital Ventures LLC.</p><h2>Editorial content</h2><p>Restaurant reviews, rankings, recommendations, and verdicts are opinions provided for general informational purposes. Menus, prices, hours, ownership, and availability change. Verify practical details with the restaurant before visiting.</p><h2>No guarantee</h2><p>We work to publish accurate information but do not guarantee that every detail will remain complete, current, or error-free.</p><h2>Intellectual property</h2><p>Unless otherwise stated, original text, graphics, branding, and site design belong to Mattpom Digital Ventures LLC and may not be reproduced or commercially republished without written permission.</p><h2>Third-party links</h2><p>The site may link to restaurants and other third parties. We do not control or accept responsibility for their content, products, availability, or policies.</p><h2>Limitation of liability</h2><p>To the maximum extent permitted by law, Mattpom Digital Ventures LLC is not liable for indirect, incidental, or consequential losses resulting from use of this site or reliance on its content.</p><h2>Changes</h2><p>We may update these terms. Continued use after an update constitutes acceptance of the revised terms.</p></article><SiteFooter/></main>;
}
