import {SiteFooter,SiteHeader} from "../../components/SiteChrome";

export const metadata = {
  title: "Photo Buffet | Real Indianapolis Food Photos | BestaurantsIndy",
  description: "A visual menu of real dishes from Indianapolis-area restaurants—photographed as they arrived, with no studio staging or AI polish.",
  openGraph: {
    title: "Photo Buffet | BestaurantsIndy",
    description: "Real restaurant food, photographed as it actually arrived.",
    type: "website",
    url: "/photo-buffet",
    images: ["/portillos-italian-beef.jpg"],
  },
};

const photos = [
  {restaurant:"Portillo’s",dish:"Italian beef — get it wet",image:"/portillos-italian-beef.jpg",href:"/say-it-dont-spray-it/portillos-follow-your-heart",location:"FISHERS · CHICAGO STREET FOOD"},
  {restaurant:"Yats",dish:"Red beans and rice with crawfish étouffée",image:"/yats-red-beans-crawfish-etouffee.jpg",href:"/reviews/yats-half-and-half",location:"BROAD RIPPLE · CAJUN & CREOLE"},
  {restaurant:"Mama’s Korean Restaurant",dish:"Dolsot bibimbap — let the rice sit",image:"/mamas-dolsot-bibimbap.jpg",href:"/reviews/mamas-dolsot-bibimbap",location:"INDIANAPOLIS · KOREAN"},
  {restaurant:"Goose the Market",dish:"The Goose sandwich",image:"/goose-sandwich.jpg",href:"/reviews/i-got-goosed-and-liked-it",location:"FALL CREEK PLACE · MARKET"},
  {restaurant:"Ramen Ray",dish:"Spicy Miso ramen",image:"/ramen-clean.png",href:"/reviews/ramen-field-note",location:"NORTHEAST SIDE · RAMEN"},
  {restaurant:"Broad Ripple Bagel & Deli",dish:"The Tonya Harding",image:"/bagel-clean.png",href:"/reviews/bagel-field-note",location:"BROAD RIPPLE · BAGEL"},
  {restaurant:"Fat Dan’s Deli",dish:"Hickory-smoked wings",image:"/fat-dans-wingies.jpeg",href:"/reviews/sean-likes-wingies",location:"SOBRO · WINGS"},
  {restaurant:"Jimmies Dairy Bar",dish:"The Crunch Coat cone",image:"/jimmies-crunch-coat.jpg",href:"/field-notes/crunch-coat-cone",location:"PENDLETON · ICE CREAM"},
  {restaurant:"Prince’s Hot Chicken",dish:"The Nashville original",image:"/princes-hot-chicken.jpeg",href:"/out-of-sight-not-out-of-mind/princes-hot-chicken",location:"NASHVILLE · HOT CHICKEN"},
];

export default function PhotoBuffet(){
  return <main className="photoBuffetPage">
    <SiteHeader/>
    <section className="pageHero photoBuffetHero">
      <p className="eyebrow">LOOK BEFORE YOU ORDER</p>
      <h1>Photo Buffet</h1>
      <p>Real food from Indianapolis-area restaurants—and a few meals worth remembering from farther away. Photographed as it actually arrived.</p>
    </section>
    <section className="section photoBuffetSection">
      <div className="photoBuffetNote">
        <strong>A photography note from Sean</strong>
        <p>I am not Ansel Adams. That is the point. These are meals, not staged productions. No studio lights, no fake steam, no moon-landing set, and no AI pretending your dinner will look different than what actually reached the table.</p>
      </div>
      <div className="photoBuffetGrid">
        {photos.map((photo,i)=><a className={i===0?"photoBuffetCard photoBuffetLead":"photoBuffetCard"} href={photo.href} key={photo.restaurant}>
          <img src={photo.image} alt={photo.dish+" at "+photo.restaurant}/>
          <div><span>{photo.location}</span><h2>{photo.restaurant}</h2><p>{photo.dish}</p><b>See Sean’s take →</b></div>
        </a>)}
      </div>
    </section>
    <SiteFooter/>
  </main>
}
