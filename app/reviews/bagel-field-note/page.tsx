import {FieldNote} from "../../../components/FieldNote";

export const metadata = {
  title: "The Day Lox Took a Back Seat | BestaurantsIndy",
  description: "Broad Ripple Bagel & Deli's Tonya Harding makes the case for a hot, stacked lunch sandwich on a steamed bagel.",
};

export default function Page() {
  return (
    <FieldNote
      title="The Day Lox Took a Back Seat"
      category="BROAD RIPPLE · FIELD NOTE"
      verdict="SEAN'S VERDICT: ORDER THE TONYA HARDING"
      image="/bagel-clean.png"
      noteTitle="The steam is the secret"
      note="Broad Ripple Bagel & Deli steams its sandwiches instead of simply toasting the bagel. That heat melts the Colby and Swiss into the turkey, ham, and bacon while keeping the bagel soft enough to hold the whole stack together."
    >
      <p className="leadArticle">
        Walk into Broad Ripple Bagel & Deli thinking about lox and cream cheese, and the Tonya Harding can knock that plan sideways. Turkey, ham, bacon, Colby, and Swiss arrive stacked on a plain bagel, then the whole thing is steamed until the cheese melts into the meat and the bagel turns warm and yielding.
      </p>

      <h2>A bagel shop built around sandwiches</h2>
      <p>
        Broad Ripple Bagel & Deli has been serving steamed bagel sandwiches since 2003. Its menu runs well beyond breakfast, with hot deli combinations built for lunch and serious appetites. The method matters. This is not a toasted bagel with cold deli meat balanced on top. Steam pulls the sandwich together: the cheese softens, the meats warm through, and the bagel compresses just enough to keep a substantial stack manageable.
      </p>

      <h2>Why the Tonya Harding works</h2>
      <p>
        The ingredient list reads like a club sandwich stripped of its vegetables and condiments: turkey, ham, bacon, Colby, and Swiss on plain. That restraint is the point. Turkey brings the bulk, ham adds salt, bacon supplies smoke and crunch, and the two cheeses melt into a rich layer that holds everything together. The plain bagel stays out of the way and lets the filling do the work.
      </p>
      <p>
        It is heavy, direct, and unapologetically deli. The name comes with the menu&apos;s own punch line—“It&apos;s a hit”—but the sandwich does not need the joke to earn the order.
      </p>

      <h2>The verdict</h2>
      <p>
        Lox remains a classic. On this visit, it took a back seat. Order the Tonya Harding when you want Broad Ripple Bagel & Deli at its most excessive and most specific: a hot, tightly packed lunch sandwich that solves hunger without pretending to be delicate.
      </p>
      <p>
        <strong>Broad Ripple Bagel & Deli</strong><br />
        850 Broad Ripple Avenue, Indianapolis
      </p>
    </FieldNote>
  );
}
