import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy Policy | BestaurantsIndy",
  description: "How BestaurantsIndy and Mattpom Digital Ventures LLC collect, use, and protect visitor information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return <main><SiteHeader/><article className="policy contentPage"><p className="eyebrow">LEGAL</p><h1>Privacy Policy</h1><p>Last updated: September 1, 2026</p><p>BestaurantsIndy is owned and operated by Mattpom Digital Ventures LLC. This policy explains what information is collected when you use this website.</p><h2>Information we collect</h2><p>We use Google Analytics to collect aggregated information such as pages viewed, device type, approximate location, referral source, and time spent on the site. We do not use this information to identify individual visitors.</p><h2>Cookies</h2><p>Analytics and essential technologies may place cookies or similar identifiers in your browser. You can restrict or delete cookies through your browser settings.</p><h2>Information you provide</h2><p>If you contact us, we may receive the information you voluntarily provide. We use it only to respond, maintain the site, or fulfill the reason you contacted us. We do not sell personal information.</p><h2>Third-party services</h2><p>The site uses services including Google Analytics, Cloudflare, and Instagram links. Those services maintain their own privacy policies.</p><h2>Your choices</h2><p>You may use browser privacy controls or the Google Analytics opt-out browser add-on. You may request access to or deletion of information you directly provided by contacting us through the site.</p><h2>Changes</h2><p>We may update this policy as the site and applicable requirements change. The date above identifies the current version.</p></article><SiteFooter/></main>;
}
