import Link from "next/link";

export function SiteHeader(){
  return <header>
    <Link className="logo" href="/">Bestaurants<span>Indy</span></Link>
    <nav><a href="/reviews">Reviews</a><a href="/field-notes">Field Notes</a><a href="/out-of-sight-not-out-of-mind">Out of Sight, Not Out of Mind</a><a href="/guides">Guides</a><a href="/neighborhoods">Neighborhoods</a><a href="/about">About Sean</a></nav>
    <a className="ig" href="https://www.instagram.com/bestaurantsindy/" target="_blank" rel="noreferrer">@bestaurantsindy</a>
  </header>
}
export function SiteFooter(){
  return <footer><Link className="logo" href="/">Bestaurants<span>Indy</span></Link><p>Indianapolis restaurants worth leaving the house for.</p><div><a href="/reviews">Reviews</a><a href="/field-notes">Field Notes</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/editorial-policy">Editorial policy</a></div><small>© 2026 BestaurantsIndy. Opinions are Sean&apos;s. Sponsored or hosted meals are labeled plainly.</small></footer>
}
