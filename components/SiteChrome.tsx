import Link from "next/link";

export function SiteHeader(){
  return <header>
    <Link className="logo" href="/">Bestaurants<span>Indy</span></Link>
    <nav><a href="/reviews">Reviews</a><a href="/photo-buffet">Photo Buffet</a><a href="/field-notes">Field Notes</a><a href="/guides">Guides</a><a href="/neighborhoods">Neighborhoods</a><a href="/out-of-sight-not-out-of-mind">Out of Sight, Not Out of Mind</a><a href="/say-it-dont-spray-it">Say It, Don&apos;t Spray It</a><a href="/about">About Sean</a></nav>
    <details className="mobileMenu"><summary><span aria-hidden="true">☰</span> Menu</summary><div className="mobileMenuPanel"><a href="/reviews">Reviews</a><a href="/photo-buffet">Photo Buffet</a><a href="/field-notes">Field Notes</a><a href="/guides">Guides</a><a href="/neighborhoods">Neighborhoods</a><a href="/out-of-sight-not-out-of-mind">Out of Sight, Not Out of Mind</a><a href="/say-it-dont-spray-it">Say It, Don&apos;t Spray It</a><a href="/about">About Sean</a></div></details>
    <a className="ig" href="https://www.instagram.com/bestaurantsindy/" target="_blank" rel="noreferrer">@bestaurantsindy</a>
  </header>
}
export function SiteFooter(){
  return <><EmailSignup id="signup"/><footer><Link className="logo" href="/">Bestaurants<span>Indy</span></Link><p>Indianapolis restaurants worth leaving the house for.</p><div><a href="/reviews">Reviews</a><a href="/photo-buffet">Photo Buffet</a><a href="/field-notes">Field Notes</a><a href="/say-it-dont-spray-it">Say It, Don&apos;t Spray It</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/editorial-policy">Editorial policy</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/affiliate-disclosure">Affiliate disclosure</a><a href="/cookie-policy">Cookie policy</a></div><small>© 2026 BestaurantsIndy · Owned and operated by Mattpom Digital Ventures LLC. Opinions are Sean&apos;s. Sponsored or hosted meals are labeled plainly.</small></footer></>
}

const BREVO_FORM_ACTION = "https://179420ee.sibforms.com/serve/MUIFAEvlmPc67T6GaLZ5P-LLu78KnIBE1LZESjA17W6iLiIjQWQYjdAXZ6oZG0YY1FwxSIlUeKSsNzrvuGmfE5BODcm6uDQyDdLLUOuy1BvEuhQEy2iGq0GPUV7JKEBH_jtOeIY_WAXT5vVkrkd8KgLPSSwSt415USENkSSivC9sxZkkGPVClb_CE-DONJ8io-TpU2HfMouNe9Pa5w==";

export function EmailSignup({id="dispatch"}:{id?:string}){
  return <section className="dispatch section" id={id} aria-labelledby={`${id}-title`}>
    <p className="eyebrow">THE BESTAURANTSINDY DISPATCH</p>
    <h2 id={`${id}-title`}>Get Sean&apos;s next pick first.</h2>
    <p>New reviews, field notes, and guides by email: what to order, what it costs, and whether it is worth the drive. No spam. Unsubscribe any time.</p>
    <form className="signupForm" action={BREVO_FORM_ACTION} method="POST" target="_blank">
      <label className="srOnly" htmlFor={`${id}-email`}>Email address</label>
      <input id={`${id}-email`} type="email" name="EMAIL" placeholder="you@email.com" required autoComplete="email"/>
      <input type="text" name="email_address_check" defaultValue="" tabIndex={-1} autoComplete="off" aria-hidden="true" className="srOnly"/>
      <input type="hidden" name="locale" value="en"/>
      <button className="button red" type="submit">Subscribe</button>
    </form>
    <small className="signupNote">We&apos;ll email you a link to confirm. Email is handled by Brevo. See our <a href="/privacy">privacy policy</a>.</small>
  </section>
}
