import Link from "next/link";
import {SiteFooter,SiteHeader} from "../../components/SiteChrome";
import {diningGuides} from "./data";

export const metadata={title:"Indianapolis Restaurant Guides | BestaurantsIndy",description:"Choose the occasion and go directly to a useful Indianapolis restaurant shortlist.",alternates:{canonical:"/guides"}};
export default function Guides(){return <main><SiteHeader/>
  <section className="pageHero compactHero"><p className="eyebrow">DECIDE FASTER</p><h1>What is the occasion?</h1><p>Choose the decision you are actually making. Each guide opens directly to a short, useful list.</p></section>
  <section className="contentPage"><div className="destinationGrid"><Link href="/guides/escape-trick-or-treaters-indianapolis"><span>HALLOWEEN · OCTOBER 31</span><h2>The Doorbell Dodge.</h2><p>Give the candy bowl the night off. Choose dinner, live music or a movie and build an actual evening out.</p><b>Pick your escape →</b></Link><Link href="/guides/thanksgiving-dinner-indianapolis-2026"><span>SEASONAL · NOVEMBER 26, 2026</span><h2>Thanksgiving dinner, without cooking.</h2><p>Yelp ratings, diner reviews and current holiday menus: where to start, what is published and what to confirm.</p><b>Read the Thanksgiving guide →</b></Link>{diningGuides.map((g,i)=><Link href={"/guides/"+g.id} key={g.id}><span>0{i+1} · {g.eyebrow}</span><h2>{g.name}</h2><p>{g.intro}</p><b>Open the guide →</b></Link>)}</div></section>
  <SiteFooter/></main>}
