import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";

const path = "/guides/thanksgiving-dinner-indianapolis-2026";
const title = "Best Places for Thanksgiving Dinner in Indianapolis, 2026";
const description = "Skip the cooking: compare Indianapolis Thanksgiving restaurants using Yelp, diner reviews and 2026 holiday menus, with verified prices and reservation links.";
export const metadata: Metadata = {
  title: `${title} | BestaurantsIndy`, description,
  alternates: { canonical: path },
  openGraph: { title, description, type: "article", url: path, publishedTime: "2026-10-30T16:00:00-04:00", modifiedTime: "2026-10-30T16:00:00-04:00", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};
const sources = {
  seasonsMenu: "https://www.seasons52.com/events/traditional-thanksgiving-dinner",
  seasonsLocation: "https://www.seasons52.com/locations/in/indianapolis/indianapolis-keystone/4516",
  seasonsYelp: "https://www.yelp.com/biz/seasons-52-indianapolis-2",
  seasonsReviews: "https://www.opentable.com/seasons-52-indianapolis",
  cooperMenu: "https://chwinery.com/thanksgiving-2026",
  cooperLocation: "https://chwinery.com/locations/indianapolis",
  cooperYelp: "https://www.yelp.com/biz/coopers-hawk-winery-and-restaurant-indianapolis-5",
  cooperReviews: "https://www.opentable.com/r/coopers-hawk-winery-and-restaurant-indianapolis-in-indianapolis",
  hollyMenu: "https://www.hollyhockhill.com/menus/",
  hollyPdf: "https://media-cdn.getbento.com/accounts/51d8e441d813fd839cd5f8013a820f51/media/Wyu7wCYeRMKghxeQXMLi_2026%20Thanksgiving%20Day%20Menu.pdf",
  hollyLocation: "https://www.hollyhockhill.com/",
  hollyYelp: "https://www.yelp.com/biz/hollyhock-hill-indianapolis-3",
  capital: "https://www.thecapitalgrille.com/",
  capitalYelp: "https://www.yelp.com/biz/the-capital-grille-indianapolis-4",
  capitalReviews: "https://www.opentable.com/the-capital-grille-indianapolis",
  fountainYelp: "https://www.yelp.com/biz/the-fountain-room-indianapolis",
  fountain: "https://www.thefountainroom.com/",
};
function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children} ↗</a>;
}
export default function ThanksgivingGuide() {
  const article = {
    "@context": "https://schema.org", "@type": "Article", headline: title, description,
    datePublished: "2026-10-30T16:00:00-04:00", dateModified: "2026-10-30T16:00:00-04:00",
    mainEntityOfPage: `https://bestaurantsindy.com${path}`,
    author: { "@type": "Organization", name: "BestaurantsIndy" },
    publisher: { "@type": "Organization", name: "BestaurantsIndy", url: "https://bestaurantsindy.com" },
    image: "https://bestaurantsindy.com/og.png",
  };
  return <main className="thanksgivingPage"><SiteHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article).replace(/</g, "\\u003c") }} />
    <section className="pageHero compactHero thanksgivingHero">
      <p className="eyebrow">THANKSGIVING · THURSDAY, NOVEMBER 26, 2026</p>
      <h1>Let somebody else<br /><em>handle the turkey.</em></h1>
      <p>Best places for Thanksgiving dinner in Indianapolis: a short list built from Yelp ratings, diner reviews and the holiday menus that are actually published.</p>
      <div className="thanksgivingByline">By BestaurantsIndy · Researched October 30, 2026 · Dine-in guide</div>
      <div className="thanksgivingHeroLinks"><a className="button red" href="#quick-picks">Compare the picks ↓</a><a className="under" href="#how-we-chose">How we chose</a></div>
    </section>
    <article className="thanksgivingArticle">
      <p className="thanksgivingLead">The best Thanksgiving dinner is the one where you get to sit down with everyone else. No oven schedule. No argument over who brought the wrong potatoes. No kitchen full of dishes waiting after dessert.</p>
      <p>For a traditional restaurant Thanksgiving in Indianapolis, <strong>Seasons 52 is our first call</strong>. <strong>Cooper’s Hawk is the strongest published-price option among our leading picks</strong>. Hollyhock Hill belongs on the list for family-style tradition, with an honest warning about its more mixed review record. Weber Grill adds a smoked-turkey option downtown, Eddie Merlot’s supplies a published steakhouse holiday menu, and Maggiano’s combines turkey with family-style Italian dishes. The Capital Grille remains a separate call-first option, not one of the six published-menu picks.</p>
      <aside className="thanksgivingNotice"><strong>What is confirmed—and what is not.</strong><p>Six restaurants below have published 2026 Thanksgiving dine-in menus or programs: Seasons 52, Cooper’s Hawk, Weber Grill, Eddie Merlot’s, Maggiano’s and Hollyhock Hill. The Capital Grille promotes November 26, 2026 reservations nationally, but we could not independently verify its Indianapolis holiday menu or price. None of these checks guarantees a table. This is a researched guide, not an account of Sean personally eating these holiday meals.</p></aside>
      <section id="quick-picks" aria-labelledby="quick-picks-title">
        <p className="eyebrow">THE SHORT ANSWER</p><h2 id="quick-picks-title">Six published-menu choices. One call-first alternative.</h2>
        <div className="thanksgivingTableWrap" role="region" aria-label="Thanksgiving restaurant comparison" tabIndex={0}>
          <table className="thanksgivingTable"><caption>Review snapshots and published holiday information checked October 30, 2026. Ratings are out of five.</caption><thead><tr><th scope="col">Restaurant / best fit</th><th scope="col">Yelp</th><th scope="col">OpenTable</th><th scope="col">Thanksgiving price / status</th></tr></thead><tbody>
            <tr><th scope="row"><a href="#seasons">Seasons 52</a><span>First call for a traditional dinner</span></th><td>4.3 · 803 reviews</td><td>4.8 · 7,534 reviews</td><td>2026 program published; dine-in price not verified</td></tr>
            <tr><th scope="row"><a href="#coopers">Cooper’s Hawk</a><span>Published-price value pick</span></th><td>4.1 · 983 reviews</td><td>4.7 · 9,005 reviews</td><td>$36.99 adults; $15.99 children 12 and under</td></tr>
            <tr><th scope="row"><a href="#weber">Weber Grill</a><span>Smoked turkey downtown</span></th><td>3.9 · about 1.2k reviews</td><td>4.5 · 5,708 reviews</td><td>$42.95 adults; $19.95 children under 12; three courses</td></tr>
            <tr><th scope="row"><a href="#eddie">Eddie Merlot’s</a><span>Steakhouse holiday with a published menu</span></th><td>4.0 · 417 reviews</td><td>4.5 · 4,713 reviews</td><td>$55 adults; $30 children, age policy to confirm; advertised 11 a.m.–8 p.m.</td></tr>
            <tr><th scope="row"><a href="#maggianos">Maggiano’s Little Italy</a><span>Turkey and Italian family-style dishes</span></th><td>3.5 · 589 reviews</td><td>4.7 · 4,490 reviews</td><td>2026 dine-in menu published; local per-person price not verified</td></tr>
            <tr><th scope="row"><a href="#hollyhock">Hollyhock Hill</a><span>Family-style local tradition</span></th><td>3.5 · 300 reviews</td><td>Not used in this comparison</td><td>$42.95 adults; $19.95 children 12 and under; 3% credit-card fee</td></tr>
            <tr><th scope="row"><a href="#capital">The Capital Grille</a><span>Downtown splurge to investigate</span></th><td>4.3 · 546 reviews</td><td>4.8 · 3,387 reviews</td><td>2026 booking promoted nationally; Indianapolis menu and price need confirmation</td></tr>
          </tbody></table>
        </div>
        <p className="thanksgivingSmall">These are overall restaurant ratings, not Thanksgiving-only scores. Platforms have different reviewers; we have not averaged their ratings together. Published meal prices are not a promise of an all-in bill: confirm drinks, tax, gratuity, fees and any extras directly.</p>
      </section>
      <section className="thanksgivingPick" id="seasons">
        <p className="eyebrow">01 · BEST STARTING POINT</p><h2>Seasons 52: the most balanced first call.</h2>
        <p className="thanksgivingLocation">8650 Keystone Crossing · Northside · <a href="tel:+13178465252">317-846-5252</a></p>
        <p>Seasons 52 makes the strongest case when you want turkey and the familiar sides in a restaurant setting. Its current holiday page includes roasted turkey, stuffing, mashed potatoes, vegetables, cranberry sauce and a pumpkin dessert, and says the full dinner menu is also available. That last detail matters when one person at the table has no interest in turkey.</p>
        <p><strong>What the reviews support:</strong> a large, favorable record on both Yelp and OpenTable. Recent October OpenTable reviews repeatedly praise attentive service and food; one specifically notes that the main dining room can be loud. Those are useful signals for a family gathering, not proof that holiday service will be identical.</p>
        <p><strong>The decision:</strong> start here if you want a traditional meal and a strong general service record. Ask for a quieter seating area if conversation matters, and request the actual Thanksgiving adult and children’s prices before committing. We are deliberately not substituting OpenTable’s usual price range for a verified holiday price.</p>
        <div className="thanksgivingLinks"><SourceLink href={sources.seasonsMenu}>Holiday menu</SourceLink><SourceLink href={sources.seasonsReviews}>Reviews & reservations</SourceLink><SourceLink href={sources.seasonsYelp}>Yelp</SourceLink><SourceLink href={sources.seasonsLocation}>Restaurant details</SourceLink></div>
      </section>
      <section className="thanksgivingPick" id="coopers">
        <p className="eyebrow">02 · BEST PUBLISHED-PRICE VALUE</p><h2>Cooper’s Hawk: the clearest value proposition.</h2>
        <p className="thanksgivingLocation">3815 E. 96th Street · Northside · <a href="tel:+13175749463">317-574-9463</a></p>
        <p>Cooper’s Hawk publishes a 2026 Thanksgiving dinner at <strong>$36.99 per adult and $15.99 for children 12 and under</strong>. Its announcement says the holiday menu is available all day alongside the regular restaurant menu. Turkey, stuffing, potatoes and gravy are among the advertised staples.</p>
        <p><strong>What the reviews support:</strong> Yelp’s 4.1 rating is backed by nearly a thousand reviews; OpenTable’s 4.7 comes from a much larger separate pool. Recent diners praise service, including a visit involving adults and young children. Another recent diner describes a loud room and food that was only fair for the price. Expect a popular, lively restaurant rather than guaranteed hushed holiday dining.</p>
        <p><strong>The decision:</strong> this is the first price to compare when you want a traditional dinner without turning the occasion into a steakhouse splurge. The regular-menu option helps with different preferences. You do not need to make the wine program the center of the meal; drinks are another line on the bill.</p>
        <div className="thanksgivingLinks"><SourceLink href={sources.cooperMenu}>2026 Thanksgiving offer</SourceLink><SourceLink href={sources.cooperLocation}>Location & reservations</SourceLink><SourceLink href={sources.cooperYelp}>Yelp</SourceLink><SourceLink href={sources.cooperReviews}>OpenTable reviews</SourceLink></div>
      </section>
      <section className="thanksgivingPick" id="weber">
        <p className="eyebrow">03 · SMOKED TURKEY DOWNTOWN</p><h2>Weber Grill: Thanksgiving with a little smoke.</h2>
        <p className="thanksgivingLocation">10 N. Illinois Street · Downtown · <a href="tel:+13176367600">317-636-7600</a></p>
        <p>Weber’s published 2026 menu includes an in-house three-course dinner at <strong>$42.95 for adults and $19.95 for children under 12</strong>. It starts with harvest salad or butternut squash soup, moves to smoked turkey with sausage stuffing and holiday accompaniments, and finishes with pumpkin Bundt cake. Do not confuse those individual dinner prices with the catering platters on the same menu.</p>
        <p><strong>What the reviews support:</strong> Yelp shows 3.9 from roughly 1,200 reviews, while OpenTable has 4.5 from 5,708. Recent OpenTable diners praise helpful service and group meals; another reports inconsistent steak doneness. It is a solid downtown option to compare, rather than our highest-scoring all-around choice.</p>
        <p><strong>The decision:</strong> a good fit when smoked turkey sounds more appealing than another oven-roasted version. The official Thanksgiving page actively offers reservations. Confirm the Indianapolis seating schedule; its normal Thursday hours are not the holiday hours.</p>
        <div className="thanksgivingLinks"><SourceLink href="https://webergrillrestaurant.com/thanksgiving/">2026 menu & holiday reservations</SourceLink><SourceLink href="https://webergrillrestaurant.com/indianapolis/">Indianapolis location</SourceLink><SourceLink href="https://www.yelp.com/biz/weber-grill-restaurant-indianapolis">Yelp</SourceLink><SourceLink href="https://www.opentable.com/weber-grill-indianapolis">OpenTable reviews</SourceLink></div>
      </section>
      <section className="thanksgivingPick" id="eddie">
        <p className="eyebrow">04 · PUBLISHED STEAKHOUSE HOLIDAY MENU</p><h2>Eddie Merlot’s: a dressed-up dinner with the details spelled out.</h2>
        <p className="thanksgivingLocation">3645 E. 96th Street · Northside · <a href="tel:+13178468303">317-846-8303</a></p>
        <p>Eddie Merlot’s advertises Thanksgiving service <strong>11 a.m.–8 p.m. on November 26, 2026</strong>, with a <strong>$55 adult and $30 children’s</strong> turkey dinner. Ask what age qualifies for the children’s price. The menu includes a starter choice, roasted turkey with stuffing and accompaniments, two sides and a dessert choice. The regular dinner menu is also available; regular lunch and happy hour menus are not.</p>
        <p><strong>What the reviews support:</strong> Yelp’s 4.0 from 417 reviews and OpenTable’s 4.5 from 4,713 provide a substantial, generally favorable record. Recent diners report good service and successful celebrations, but one criticizes portion size and value on seafood dishes. Paying more still deserves scrutiny.</p>
        <p><strong>The decision:</strong> our more useful steakhouse holiday recommendation when you want a published menu and price before making the call. It costs more than Cooper’s Hawk or Weber, but gives a turkey eater and someone ordering from the dinner menu a way to share the occasion.</p>
        <div className="thanksgivingLinks"><SourceLink href="https://www.eddiemerlots.com/promotions/thanksgiving/">2026 menu, hours & reservations</SourceLink><SourceLink href="https://www.yelp.com/biz/eddie-merlots-indianapolis-2">Yelp</SourceLink><SourceLink href="https://www.opentable.com/r/eddie-merlots-prime-aged-beef-and-seafood-indianapolis">Indianapolis reviews & reservations</SourceLink></div>
      </section>
      <section className="thanksgivingPick" id="maggianos">
        <p className="eyebrow">05 · TURKEY MEETS ITALIAN FAMILY STYLE</p><h2>Maggiano’s: for the table that also wants pasta.</h2>
        <p className="thanksgivingLocation">3550 E. 86th Street · Keystone area · <a href="tel:+13178140700">317-814-0700</a></p>
        <p>Maggiano’s specifically promotes a one-day Thanksgiving feast on November 26, 2026. Its linked dine-in menu combines salads, a choice of main dishes including roasted turkey, pasta selections, additional sides and desserts. That makes it a practical different-preferences option: the meal does not have to be turkey or Italian.</p>
        <p><strong>What the reviews support:</strong> a meaningful split. Yelp shows 3.5 from 589 reviews; OpenTable shows 4.7 from 4,490. Recent OpenTable diners describe generous family meals and successful gatherings, while another reports a long wait for service. We would choose it for the shared-table format and menu, not claim the platforms agree it is the city’s best.</p>
        <p><strong>The decision:</strong> ask the Indianapolis restaurant for the dine-in per-person price and group requirements. We verified the 2026 menu, but not a local dine-in price. The $210–$220 packages advertised on the holiday page are <strong>carryout bundles, not the restaurant dinner price</strong>.</p>
        <div className="thanksgivingLinks"><SourceLink href="https://www.maggianos.com/thanksgiving2026">2026 holiday page & dine-in menu</SourceLink><SourceLink href="https://www.yelp.com/biz/maggianos-little-italy-indianapolis-4">Yelp</SourceLink><SourceLink href="https://www.opentable.com/r/maggianos-indianapolis">Indianapolis reviews & reservations</SourceLink></div>
      </section>
      <section className="thanksgivingPick" id="hollyhock">
        <p className="eyebrow">06 · LOCAL TRADITION, WITH A CAVEAT</p><h2>Hollyhock Hill: family-style without your family cooking.</h2>
        <p className="thanksgivingLocation">8110 N. College Avenue · Nora · <a href="tel:+13172512294">317-251-2294</a></p>
        <p>Hollyhock Hill’s 2026 Thanksgiving PDF is refreshingly specific: family-style roasted turkey, a spread of traditional sides and pumpkin pie. The posted meal is <strong>$42.95 per person, or $19.95 for children 12 and under</strong>. The menu also discloses a <strong>3% convenience fee on credit-card payments</strong>.</p>
        <p>The appeal is the format: a shared-table holiday meal at an Indianapolis restaurant with a long local history. Its familiar fried-chicken identity should not cause confusion here—the published Thanksgiving entrée is turkey, with a choice of white meat, dark meat or a mix.</p>
        <p><strong>What the reviews support:</strong> a more divided picture. Yelp shows 3.5 from 300 reviews, clearly below our first two recommendations. Its family-style identity earns a place in this guide, but we would not call it the strongest review-backed choice. Choose it because that style of meal matters to your group, and read recent feedback before reserving.</p>
        <p><strong>The decision:</strong> a reasonable local-tradition alternative, especially for a group that values passing the sides around. Call for Thanksgiving seating times, availability and any additional charges. The ordinary weekly hours are not evidence of the holiday schedule.</p>
        <div className="thanksgivingLinks"><SourceLink href={sources.hollyPdf}>2026 Thanksgiving menu PDF</SourceLink><SourceLink href={sources.hollyLocation}>Restaurant & reservations</SourceLink><SourceLink href={sources.hollyYelp}>Yelp reviews</SourceLink></div>
      </section>
      <section className="thanksgivingPick" id="capital">
        <p className="eyebrow">ALSO CONSIDER · CONFIRM LOCAL HOLIDAY DETAILS</p><h2>The Capital Grille: strong reviews, local details still to confirm.</h2>
        <p className="thanksgivingLocation">40 W. Washington Street · Downtown · <a href="tel:+13174238790">317-423-8790</a></p>
        <p>The Capital Grille belongs in the conversation for a more formal downtown occasion. Its Indianapolis review record is strong: 4.3 on Yelp and 4.8 on OpenTable. Recent OpenTable diners describe attentive service and successful celebrations, although another notes noise from a neighboring group.</p>
        <p><strong>The important distinction:</strong> the chain’s current homepage advertises Thanksgiving reservations tied to November 26, 2026. We could not independently verify an Indianapolis-specific holiday menu or price. That makes this a <strong>call-first splurge option</strong>, not a confirmed-price turkey recommendation.</p>
        <p>Ask whether the downtown location is serving a traditional Thanksgiving plate, the regular menu or both; then ask what is included. Do not use a national promotion or an everyday steakhouse price category as a substitute for the local answer.</p>
        <div className="thanksgivingLinks"><SourceLink href={sources.capital}>Official site & holiday booking</SourceLink><SourceLink href={sources.capitalReviews}>Indianapolis reviews & reservations</SourceLink><SourceLink href={sources.capitalYelp}>Yelp</SourceLink></div>
      </section>
      <section id="how-we-chose">
        <p className="eyebrow">WHY THIS LIST IS SHORT</p><h2>Yelp starts the research. It does not finish it.</h2>
        <p>We used location-specific Yelp ratings and review counts, read accessible recent OpenTable diner reviews for the leading choices, and checked restaurant-published Thanksgiving information. We looked for a substantial review base, evidence about service and the room, and a holiday offering suited to the actual decision: eating dinner out on Thanksgiving. This is a selected guide, not a complete directory of every open restaurant. Six entries have published holiday menus or programs; the seventh is explicitly a call-first alternative.</p>
        <p>That is why the highest number does not automatically win. <SourceLink href={sources.fountainYelp}>The Fountain Room’s Yelp page</SourceLink> shows 4.4 from 531 reviews—an excellent reason to investigate it. But its <SourceLink href={sources.fountain}>official pages checked for this guide</SourceLink> did not establish a 2026 Thanksgiving dinner offering. We have not promoted it to a confirmed holiday pick just because it appears in search results.</p>
        <p>General reviews describe ordinary visits as well as celebrations. They cannot predict the November 26 kitchen or prove a holiday menu was tested. Our first-call and best-fit labels are BestaurantsIndy’s editorial judgments from that evidence, not awards issued by Yelp or OpenTable.</p>
      </section>
      <section className="thanksgivingBooking">
        <h2>Before you hand over the reservation.</h2>
        <ul><li><strong>Confirm the date and location:</strong> Thursday, November 26, 2026. Check the exact Indianapolis restaurant, not a different branch.</li><li><strong>Ask for the total:</strong> adult and children’s meals, drinks, tax, gratuity, service fees and deposit or cancellation terms.</li><li><strong>Confirm the format:</strong> plated dinner, family-style service or buffet. These are different experiences.</li><li><strong>Give the whole party size:</strong> include children, and ask about seating times or table limits.</li><li><strong>Explain dietary and access needs:</strong> ask about the holiday menu itself, suitable seating, step-free access and drop-off arrangements.</li></ul>
        <p>For the simplest decision, call Seasons 52 first. If the published price matters most, compare Cooper’s Hawk. If family-style tradition is the point, investigate Hollyhock Hill with its review caveat in mind. For smoked turkey downtown, compare Weber Grill. For a steakhouse holiday with a published menu, look at Eddie Merlot’s. Choose Maggiano’s for a turkey-and-pasta family gathering. The Capital Grille is an additional downtown option only after the restaurant confirms its local holiday details.</p>
      </section>
      <p className="thanksgivingSmall">Sources are linked beside each recommendation. All ratings, review counts, menu details and published prices were checked October 30, 2026 and may change. No paid placement, hosted meal or affiliate booking links are included in this guide.</p>
      <div className="destinationBack"><Link href="/guides">← More Indianapolis dining guides</Link></div>
    </article><SiteFooter />
  </main>;
}
