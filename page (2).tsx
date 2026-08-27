import { SiteHeader, SiteFooter } from "../../components/SiteChrome";

export const metadata={title:"Say It, Don't Spray It | BestaurantsIndy",description:"Sean Matthews on Indianapolis food culture, restaurant trends, prices, service, and the dining ideas this city is still missing."};

const opinions=[{title:"Indianapolis Has a Seafood Problem",label:"INDIANAPOLIS · SEAFOOD",href:"/say-it-dont-spray-it/indianapolis-needs-casual-seafood",summary:"Where is the casual alternative to Red Lobster? Indianapolis has seafood, but it is missing the dependable middle."}];

export default function Page(){return <main className="opinionPage"><SiteHeader/><section className="pageHero"><p className="eyebrow">SAY IT, DON&apos;T SPRAY IT</p><h1>Strong opinions. Minimal table cleanup.</h1><p>Sean on Indianapolis food culture, restaurant trends, pricing, service, and everything this city should be doing better.</p></section><section className="contentPage opinionGrid">{opinions.map(opinion=><a className="opinionCard" href={opinion.href} key={opinion.title}><div><span>{opinion.label}</span><h2>{opinion.title}</h2><p>{opinion.summary}</p></div><b>Read Sean&apos;s take →</b></a>)}</section><SiteFooter/></main>}
