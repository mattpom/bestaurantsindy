import {SiteFooter,SiteHeader} from "../../../components/SiteChrome";

export const metadata = {
  title: "I Don’t Care That It’s a Chain. Sometimes You Have to Follow Your Heart | BestaurantsIndy",
  description: "Portillo’s Italian beef, Chicago-style hot dog, and chocolate cake shake prove that a chain can still be worth craving.",
  openGraph: {
    title: "I Don’t Care That It’s a Chain. Sometimes You Have to Follow Your Heart",
    description: "The correct Portillo’s order: Italian beef wet, a Chicago dog, and a chocolate cake shake.",
    type: "article",
    url: "/reviews/portillos-follow-your-heart",
    images: ["/portillos-italian-beef.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Don’t Care That It’s a Chain. Sometimes You Have to Follow Your Heart",
    description: "The correct Portillo’s order: Italian beef wet, a Chicago dog, and a chocolate cake shake.",
    images: ["/portillos-italian-beef.jpg"],
  },
};

export default function Page() {
  return (
    <main>
      <SiteHeader/>
      <article className="articlePage">
        <div className="articleHead">
          <p className="eyebrow">PORTILLO’S · REVIEW</p>
          <h1>I Don’t Care That It’s a Chain. Sometimes You Have to Follow Your Heart</h1>
          <p className="articleVerdict">SEAN’S VERDICT: GET THE BEEF WET</p>
        </div>
        <img className="articleImage" src="/portillos-italian-beef.jpg" alt="Portillo’s Italian beef sandwich ordered wet with peppers" />
        <div className="articleBody">
          <p className="leadArticle">
            Food people are supposed to be suspicious of chains. We are expected to seek out the hidden storefront, admire the handwritten menu, and act as if a restaurant becomes less delicious every time it opens another location. Sometimes that instinct protects us from a bad meal. Sometimes it just gets in the way of lunch.
          </p>
          <p>
            Portillo’s is a chain. I know. I do not care. There are days when the heart wants an Italian beef dripping through its wrapper, a Chicago dog carrying half a garden, and a milkshake with an actual slice of chocolate cake blended into it. On those days, following your heart means going to Portillo’s.
          </p>

          <h2>The Italian beef: get it wet</h2>
          <p>
            Start with the Italian beef. Thin slices of slow-roasted beef are piled into French bread and soaked with seasoned gravy. You can order it dry, with a little gravy, or dipped. Get it wet. A neat Italian beef misses the point.
          </p>
          <p>
            The bread should soften under the gravy while holding together just long enough to get the sandwich to your mouth. The beef is savory and peppery, the gravy reaches every corner, and sweet peppers or hot giardiniera can take it in either direction. Giardiniera adds heat, acid, and crunch; sweet peppers make the whole thing softer and rounder. Either works. The gravy is not optional.
          </p>
          <p>
            This is not a sandwich for the car unless you have stopped caring about the upholstery. Eat it over the wrapper, lean forward, and accept that dignity has left the table.
          </p>

          <h2>The Chicago dog knows exactly what it is</h2>
          <p>
            The Chicago-style hot dog is the counterargument to every overloaded hot dog that mistakes excess for personality. The all-beef dog comes on a steamed poppy-seed bun with yellow mustard, relish, chopped onions, tomato, a pickle spear, sport peppers, and celery salt.
          </p>
          <p>
            It sounds crowded, but the pieces have jobs. Mustard and relish bring acid and sweetness. Onion and sport peppers add bite. Tomato cools things down. The pickle supplies the crunch. Celery salt makes it taste unmistakably like Chicago. And no, it does not need ketchup.
          </p>
          <p>
            The Italian beef is the commitment. The Chicago dog is the side order you tell yourself you are getting “to try,” even though you already know you are eating the whole thing.
          </p>

          <h2>Then drink the cake</h2>
          <p>
            Portillo’s chocolate cake shake is not merely chocolate-cake flavored. A slice of its chocolate cake goes into the blender with the ice cream. That explains the dense texture, the deep chocolate flavor, and the occasional bit of cake moving through the straw.
          </p>
          <p>
            Is a milkshake made with cake excessive after an Italian beef and a hot dog? Obviously. That is not a criticism. You did not come here because your body requested moderation. You came because your heart had a very specific plan.
          </p>

          <h2>The chain question</h2>
          <p>
            A restaurant being independent does not automatically make it good, and becoming a chain does not automatically erase what made the food worth eating. Consistency can flatten a restaurant, but it can also preserve a combination people genuinely crave. Portillo’s has grown because the Italian beef, Chicago dog, and chocolate cake shake form a meal with a clear identity.
          </p>
          <p>
            Indianapolis does not need to pretend Portillo’s is local. It also does not need to pretend the food stops tasting good at the Illinois state line. The Fishers and Indianapolis locations give us a dependable version of Chicago comfort food without the three-hour drive north.
          </p>

          <h2>The verdict</h2>
          <p>
            Order the Italian beef wet. Add hot giardiniera if you want the full argument. Get a Chicago dog because restraint has already left the building. Finish with the chocolate cake shake and accept the nap that may follow.
          </p>
          <p>
            I don’t care that it’s a chain. Sometimes you have to follow your heart.
          </p>
          <p>
            <a href="https://www.portillos.com/" target="_blank" rel="noreferrer">Portillo’s website →</a>
          </p>
          <aside>
            <strong>Sean’s order</strong>
            <p>Italian beef dipped wet, a Chicago-style hot dog, and a chocolate cake shake.</p>
          </aside>
          <a className="button red" href="/reviews">Back to all reviews</a>
        </div>
      </article>
      <SiteFooter/>
    </main>
  );
}
