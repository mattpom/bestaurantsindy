import Link from "next/link";
import {SiteFooter,SiteHeader} from "../../components/SiteChrome";
import {diningGuides} from "./data";

export const metadata={title:"Indianapolis Restaurant Guides | BestaurantsIndy",description:"Choose the occasion and go directly to a useful Indianapolis restaurant shortlist."};
export default function Guides(){return <main><SiteHeader/>
  <section className="pageHero compactHero"><p className="eyebrow">DECIDE FASTER</p><h1>What is the occasion?</h1><p>Choose the decision you are actually making. Each guide opens directly to a short, useful list.</p></section>
  <section className="contentPage"><div className="destinationGrid">{diningGuides.map((g,i)=><Link href={"/guides/"+g.id} key={g.id}><span>0{i+1} · {g.eyebrow}</span><h2>{g.name}</h2><p>{g.intro}</p><b>Open the guide →</b></Link>)}</div></section>
  <SiteFooter/></main>}
