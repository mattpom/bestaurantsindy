import Link from "next/link";
import {notFound} from "next/navigation";
import {SiteFooter,SiteHeader} from "../../../components/SiteChrome";
import {diningGuides,GuidePickGrid} from "../data";

export function generateStaticParams(){return diningGuides.map(g=>({slug:g.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const g=diningGuides.find(x=>x.id===slug);return {title:g?`${g.name} in Indianapolis | BestaurantsIndy`:"Indianapolis Guide | BestaurantsIndy",description:g?.intro}}
export default async function GuidePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const g=diningGuides.find(x=>x.id===slug);if(!g)notFound();return <main><SiteHeader/>
  <section className="pageHero compactHero"><p className="eyebrow">{g.eyebrow}</p><h1>{g.name}</h1><p>{g.intro}</p>{g.note&&<small className="priceNote">{g.note}</small>}</section>
  <section className="contentPage singleDestination"><GuidePickGrid picks={g.picks}/><div className="destinationBack"><Link href="/guides">← View all occasion guides</Link></div></section>
  <SiteFooter/></main>}
