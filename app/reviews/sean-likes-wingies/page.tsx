import {FieldNote} from "../../../components/FieldNote";

export const metadata = {
  title: "Sean Likes Wingies | BestaurantsIndy",
  description:
    "Fat Dan’s hickory-smoked, flash-fried wings, hand-cut fries, and why its SoBro pub is one of Indianapolis’ best places to watch the Cubs.",
};

export default function Page() {
  return (
    <FieldNote
      title="Sean Likes Wingies"
      category="FAT DAN’S DELI · SOBRO REVIEW"
      verdict="SEAN’S VERDICT: SMOKE FIRST. FRY SECOND. GO CUBS."
      image="/fat-dans-wingies.jpeg"
      noteTitle="Sean’s order"
      note="Fat Dan’s OG Smoked Jumbo Wings, sauce on the side, with an order of the hand-cut fries. Add a Cubs game and stay awhile."
    >
      <p className="leadArticle">
        Tommy wanted a wingy. Sean wants the whole basket—especially when the
        wings arrive dark from the smoker, crisp from the fryer, and surrounded
        by enough hand-cut fries to turn a snack into the afternoon.
      </p>

      <h2>Smoke first, flash-fry second</h2>
      <p>
        Fat Dan’s does not rely on sauce to make the wings interesting. The
        jumbo wings spend hours over hickory smoke, picking up flavor all the
        way to the bone, before a flash fry tightens the skin and gives the
        outside its final crisp edge. Smoking alone can leave a wing soft.
        Frying alone cannot create this depth. The two-step method earns its
        keep.
      </p>
      <p>
        They arrive heavily seasoned and visibly charred, with sauces served
        alongside rather than hiding the work underneath. Dip when you want;
        the wing does not need rescuing.
      </p>

      <h2>The fries are not filler</h2>
      <p>
        The fries are hand cut, skin on, and irregular in the right way. Some
        are deeply browned, some stay softer in the center, and all of them are
        built for dragging through whatever sauce escapes the wings. They taste
        like potatoes, not a frozen side dish included to occupy half the
        basket.
      </p>

      <h2>A Chicago bar in Indianapolis</h2>
      <p>
        The SoBro location feels like a Chicago neighborhood pub that landed on
        College Avenue: Italian beef, Chicago dogs, smoked meat, cold beer, and
        Cubs loyalty that is not merely decorative. When the Cubs are playing,
        Fat Dan’s is one of the easiest answers in Indianapolis to the question,
        “Where can I watch the game with people who actually care?”
      </p>

      <h2>The verdict</h2>
      <p>
        Order the smoked wings, keep the sauce on the side, and do not treat the
        fries as optional. Fat Dan’s gives you smoke, crunch, salt, and a real
        sports-bar reason to stay past the final wing. Sean likes wingies. These
        are easy to like.
      </p>
      <p>
        <strong>Fat Dan’s Deli — SoBro</strong>
        <br />
        5410 N. College Ave., Indianapolis
      </p>
      <p>
        <a href="https://www.fatdansdeli.com/sobro" target="_blank" rel="noreferrer">
          Restaurant website →
        </a>
      </p>
    </FieldNote>
  );
}
