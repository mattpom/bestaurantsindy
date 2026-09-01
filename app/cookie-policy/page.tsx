import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Cookie Policy | BestaurantsIndy",
  description: "How BestaurantsIndy uses analytics and essential browser technologies.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicy() {
  return <main><SiteHeader/><article className="policy contentPage"><p className="eyebrow">LEGAL</p><h1>Cookie Policy</h1><p>Last updated: September 1, 2026</p><p>BestaurantsIndy uses cookies and similar browser technologies for site operation and aggregated traffic measurement.</p><h2>Analytics</h2><p>Google Analytics may use cookies to help us understand which pages visitors use, how they arrived, and how the site performs. The information is used in aggregated form.</p><h2>Managing cookies</h2><p>You can block or delete cookies through your browser settings. Restricting cookies may affect some website functions. You can also use Google&apos;s Analytics opt-out browser add-on.</p><h2>Updates</h2><p>This policy may change if the services used by the site change.</p></article><SiteFooter/></main>;
}
