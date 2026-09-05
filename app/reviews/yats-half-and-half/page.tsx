import {FieldNote} from "../../../components/FieldNote";

export const metadata = {
  title: "Half and Half Is the Whole Point | BestaurantsIndy",
  description: "At Yats, red beans and rice beside crawfish étouffée turns one inexpensive plate into the right introduction.",
  openGraph: {
    title: "Half and Half Is the Whole Point",
    description: "Red beans and rice, crawfish étouffée, and Yats’ essential spiced bread.",
    type: "article",
    url: "/reviews/yats-half-and-half",
    images: ["/yats-red-beans-crawfish-etouffee.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Half and Half Is the Whole Point",
    description: "The Yats order: red beans and rice with crawfish étouffée.",
    images: ["/yats-red-beans-crawfish-etouffee.jpg"],
  },
};

export default function Page() {
  return (
    <FieldNote
      title="Half and Half Is the Whole Point"
      category="YATS · REVIEW"
      verdict="SEAN’S VERDICT: ORDER HALF AND HALF"
      image="/yats-red-beans-crawfish-etouffee.jpg"
      noteTitle="Sean’s order"
      note="Red beans and rice beside crawfish étouffée, both served over rice with Yats’ spiced bread."
    >
      <p className="leadArticle">
        The smartest order at Yats is not choosing one thing. It is admitting that two sauces over rice belong on the same plate and ordering half and half.
      </p>

      <h2>Two sides of the same plate</h2>
      <p>
        On one side, red beans and rice: dark, thick, earthy, and built for comfort. On the other, crawfish étouffée: richer, creamier, and carrying the seafood sweetness and seasoning that make it feel like the louder half of the meal.
      </p>
      <p>
        The rice keeps both from becoming too heavy and gives you control over every bite. Eat each side separately at first. Then let the edges meet in the middle. That accidental mixture is part of the point.
      </p>

      <h2>Do not ignore the bread</h2>
      <p>
        The bread can look like an afterthought sitting at the top of the plate. It is not. Yats coats it with butter and seasoning, giving it enough spice and richness to stand beside the sauces. Use it to clear the plate.
      </p>

      <h2>Why Yats works</h2>
      <p>
        Yats does not ask Cajun and Creole food to dress up for dinner. You order at the counter, the menu changes, the food arrives quickly, and the plate looks like somebody cared more about feeding you than arranging a photograph.
      </p>
      <p>
        That lack of ceremony is part of its identity. This is filling, deeply seasoned food at a price that still makes an ordinary lunch possible.
      </p>

      <h2>The verdict</h2>
      <p>
        Get the red beans and rice. Get the crawfish étouffée. More importantly, get them together. Half and half is not indecision at Yats. It is the correct strategy.
      </p>
      <p>
        <strong>Yats — Broad Ripple</strong><br />
        5363 N. College Ave., Indianapolis
      </p>
      <p>
        <a href="https://www.yatscajuncreole.com/" target="_blank" rel="noreferrer">Restaurant website →</a>
      </p>
    </FieldNote>
  );
}
