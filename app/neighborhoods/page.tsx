import Link from "next/link";
import {SiteFooter,SiteHeader} from "../../components/SiteChrome";
import {neighborhoods} from "./data";

export const metadata={title:"Indianapolis Neighborhood Dining | BestaurantsIndy",description:"Choose one Indianapolis neighborhood and go directly to its restaurant picks."};
export default function Neighborhoods(){return <main><SiteHeader/>
  <section className="pageHero compactHero"><p className="eyebrow">BROWSE BY NEIGHBORHOOD</p><h1>Pick one part of town.</h1><p>Each neighborhood has its own guide. Choose an area and see only the restaurants that belong there.</p></section>
  <section className="contentPage"><div className="destinationGrid">{neighborhoods.map(n=><Link href={"/neighborhoods/"+n.id} key={n.id}><span>FEATURED: {n.anchor}</span><h2>{n.name}</h2><p>{n.intro}</p><b>Open {n.name} guide →</b></Link>)}</div></section>
  <SiteFooter/></main>}
