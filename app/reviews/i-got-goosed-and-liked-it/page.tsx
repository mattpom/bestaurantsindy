import {FieldNote} from "../../../components/FieldNote";

export const metadata = {
  title: "I Got Goosed and Liked It | BestaurantsIndy",
  description: "The Goose at Goose the Market proves that prosciutto, fresh mozzarella, basil, black pepper, olive oil, and good bread are enough.",
  openGraph: {
    title: "I Got Goosed and Liked It",
    description: "A deceptively simple sandwich from one of Indianapolis’s best specialty markets.",
    type: "article",
    url: "/reviews/i-got-goosed-and-liked-it",
    images: ["/goose-sandwich.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Got Goosed and Liked It",
    description: "The Goose at Goose the Market is simple, balanced, and worth ordering.",
    images: ["/goose-sandwich.jpg"],
  },
};

export default function Page() {
  return (
    <FieldNote
      title="I Got Goosed and Liked It"
      category="GOOSE THE MARKET · REVIEW"
      verdict="SEAN'S VERDICT: ORDER THE GOOSE"
      image="/goose-sandwich.jpg"
      noteTitle="Sean’s order: The Goose"
      note="Prosciutto, fresh mozzarella, basil, cracked black pepper, and extra-virgin olive oil on a toasted Amelia’s baguette. Nothing unnecessary."
    >
      <p className="leadArticle">
        Indianapolis has plenty of sandwiches that try to win by piling on more meat, more cheese, more sauce, and more everything. The Goose at Goose the Market takes the opposite approach. It uses a short list of very good ingredients and gives every one of them room to matter.
      </p>

      <h2>Five ingredients and nowhere to hide</h2>
      <p>
        The Goose combines prosciutto, fresh mozzarella, basil, cracked black pepper, and extra-virgin olive oil on a toasted Amelia’s baguette. That is the entire play, and it works because the proportions make sense.
      </p>
      <p>
        The baguette develops a crisp shell without becoming the kind of jaw workout that ruins a good sandwich. It gives way to soft, milky mozzarella and thin ribbons of prosciutto. The meat brings salt and depth. The cheese cools and rounds it out. Basil lifts the richness, black pepper adds a little bite, and olive oil pulls everything together.
      </p>
      <p>
        There is nowhere for weak ingredients to hide in a sandwich this simple. Stale bread, rubbery cheese, or ordinary cured meat would sink the whole thing. Instead, every part tastes chosen on purpose. The Goose is rich without becoming heavy and salty without turning into a salt bomb. It feels less like a deli sandwich assembled in a hurry and more like an Italian lunch that happens to fit in your hands.
      </p>

      <h2>More than a sandwich counter</h2>
      <p>
        Calling Goose the Market a sandwich shop undersells it. The Delaware Street storefront is also a full-service butcher shop and specialty market. The cases hold cut-to-order meat and seafood, house-made sausages, smoked meats, charcuterie, and farmstead cheeses. The shelves add produce, artisan bread, pasta, preserves, sauces, pickles, crackers, wine, and craft beer. There are rotating sandwiches, soups, gelato, small plates, and an Italian-style cellar bar called Enoteca.
      </p>
      <p>
        It is the kind of place where you stop for lunch and leave with the makings of a very serious dinner. The market side also explains the sandwich. Goose treats cured meat, cheese, bread, and olive oil as ingredients worth paying attention to, not filler between two pieces of bread.
      </p>

      <h2>The verdict</h2>
      <p>
        The Goose is not enormous, messy, or built for social-media shock value. It is simply balanced and deeply satisfying. The crust crackles, the mozzarella is generous, the prosciutto has character, and the basil and pepper keep every bite awake.
      </p>
      <p>
        Would I order it again? Absolutely. I got Goosed—and liked it.
      </p>
      <p>
        <strong>Goose the Market</strong><br />
        2503 N. Delaware St., Indianapolis
      </p>
      <p>
        <a href="https://www.goosethemarket.com/" target="_blank" rel="noreferrer">Restaurant website →</a>
      </p>
    </FieldNote>
  );
}
