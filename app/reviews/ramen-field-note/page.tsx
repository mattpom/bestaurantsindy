import {FieldNote} from "../../../components/FieldNote";

export const metadata = {
  title: "Hooray for Ray | BestaurantsIndy",
  description: "Ramen Ray's Spicy Miso brings pork broth, miso, chili heat, chashu, egg, noodles, and vegetables together in one substantial bowl.",
};

export default function Page() {
  return (
    <FieldNote
      title="Hooray for Ray"
      category="RAMEN RAY · FIELD NOTE"
      verdict="SEAN'S VERDICT: ORDER THE SPICY MISO"
      image="/ramen-clean.png"
      noteTitle="The bowl pictured is Spicy Miso"
      note="Ramen Ray builds it on a miso-based pork broth sharpened with chili heat, then adds noodles, chashu pork, a marinated egg, and vegetables. It is currently listed among the restaurant's most-ordered dishes."
    >
      <p className="leadArticle">
        Indianapolis has plenty of places that sell ramen. Ramen Ray feels like a place built around it. The menu starts with pork-bone tonkotsu, moves through chicken paitan and vegan broths, and gives each style enough variations to reward a second visit before the first bowl is finished.
      </p>

      <h2>Start with the Spicy Miso</h2>
      <p>
        The bowl pictured here is Ramen Ray&apos;s Spicy Miso. Its foundation is a miso-based pork broth with chili heat, noodles, chashu pork, a marinated egg, and vegetables. Miso supplies the savory depth; chili keeps that richness from becoming flat. The result is the kind of ramen that looks substantial because it is substantial.
      </p>
      <p>
        The toppings are not there to make the photograph busy. Chashu gives the bowl its centerpiece, the egg adds another layer of richness, and the vegetables break up the broth and noodles. Everything has a job.
      </p>

      <h2>A menu with more than one answer</h2>
      <p>
        Spicy Miso is the obvious introduction, but Ramen Ray does not stop there. The current menu includes shoyu, shio, black garlic tonkotsu, pork tan tan miso, chicken paitan, curry ramen, and several vegan bowls. House-made chicken and vegan gyoza, along with small rice dishes, make it possible to build a meal without treating ramen as the only attraction.
      </p>

      <h2>The verdict</h2>
      <p>
        Hooray for Ray because the menu gives Indianapolis ramen drinkers real choices without losing sight of the reason they came. Order the Spicy Miso first. It is rich, hot, complete, and confident enough to serve as the restaurant&apos;s introduction.
      </p>
      <p>
        <strong>Ramen Ray</strong><br />
        5628 East 71st Street, Indianapolis
      </p>
    </FieldNote>
  );
}
