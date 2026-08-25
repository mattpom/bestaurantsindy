import {SiteFooter,SiteHeader} from "./SiteChrome";

export function FieldNote({
  title,
  category,
  verdict,
  image,
  children,
  noteTitle = "Why the restaurant name is not shown yet",
  note = "BestaurantsIndy does not publish a restaurant name, current price, address, hours or visit date until Sean verifies the complete record. The photograph and field note are real; the missing facts are not being guessed.",
}: {
  title: string;
  category: string;
  verdict: string;
  image: string;
  children: React.ReactNode;
  noteTitle?: string;
  note?: string;
}) {
  return <main><SiteHeader/><article className="articlePage"><div className="articleHead"><p className="eyebrow">{category}</p><h1>{title}</h1><p className="articleVerdict">{verdict}</p></div><img className="articleImage" src={image} alt=""/><div className="articleBody">{children}<aside><strong>{noteTitle}</strong><p>{note}</p></aside><a className="button red" href="/reviews">Back to all reviews</a></div></article><SiteFooter/></main>
}
