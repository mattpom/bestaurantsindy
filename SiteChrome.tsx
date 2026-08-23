export function SiteHeader(){
  return <header>
    <a className="logo" href="/">Bestaurants<span>Indy</span></a>
    <nav><a href="/reviews">Reviews</a><a href="/guides">Guides</a><a href="/neighborhoods">Neighborhoods</a><a href="/about">About Sean</a></nav>
    <a className="ig" href="https://www.instagram.com/bestaurantsindy/" target="_blank" rel="noreferrer">@bestaurantsindy</a>
  </header>
}
export function SiteFooter(){
  return <footer><a className="logo" href="/">Bestaurants<span>Indy</span></a><p>Indianapolis restaurants worth leaving the house for.</p><div><a href="/reviews">Reviews</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/editorial-policy">Editorial policy</a></div><small>© 2026 BestaurantsIndy. Opinions are Sean&apos;s. Sponsored or hosted meals are labeled plainly.</small></footer>
}
