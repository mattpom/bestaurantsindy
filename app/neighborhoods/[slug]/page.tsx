import Link from "next/link";
import {notFound} from "next/navigation";
import {SiteFooter,SiteHeader} from "../../../components/SiteChrome";
import {neighborhoods,RestaurantGrid} from "../data";

export function generateStaticParams(){return neighborhoods.map(n=>({slug:n.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const n=neighborhoods.find(x=>x.id===slug);return {title:n?`${n.name} Restaurants | BestaurantsIndy`:"Neighborhood | BestaurantsIndy",description:n?.intro}}
export default async function NeighborhoodPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const n=neighborhoods.find(x=>x.id===slug);if(!n)notFound();return <main><SiteHeader/>
  <section className="pageHero compactHero"><p className="eyebrow">FEATURED ANCHOR · {n.anchor}</p><h1>{n.name}</h1><p>{n.intro}</p></section>
  <section className="contentPage singleDestination"><RestaurantGrid restaurants={n.restaurants}/>
    <div className="destinationBack"><Link href="/neighborhoods">← View all neighborhoods</Link></div>
  </section><SiteFooter/></main>}
