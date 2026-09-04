import {SiteFooter,SiteHeader} from "../../components/SiteChrome";
import ReviewsExplorer from "./ReviewsExplorer";
export const metadata={title:"Restaurant Reviews | BestaurantsIndy",description:"Browse direct, useful Indianapolis restaurant field notes and reviews."};
export default function Reviews(){return <main><SiteHeader/><section className="pageHero"><p className="eyebrow">REVIEWS & FIELD NOTES</p><h1>What Sean ordered—and whether you should.</h1><p>Browse the launch field notes below. Restaurant names, current prices and practical details are added only after they are verified. The food photographs show what reached the table—not an AI-enhanced or studio-staged substitute.</p></section><section className="contentPage"><ReviewsExplorer/></section><SiteFooter/></main>}
