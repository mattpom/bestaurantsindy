import Link from "next/link";

const cards = [
  ["Ramen Ray","Hooray for Ray","The Spicy Miso brings pork broth, chili heat, chashu, egg, noodles, and vegetables together in one serious bowl.","ORDER THE SPICY MISO","ramen"],
  ["Broad Ripple","The Day Lox Took a Back Seat","The Tonya Harding stacks turkey, ham, bacon, Colby, and Swiss on a hot steamed bagel.","ORDER THIS","bagel"],
];
const guides = [
  ["TAKE THE VISITORS","Where to take out-of-town guests without embarrassing Indianapolis."],
  ["DATE NIGHT","Enough atmosphere—and food good enough to justify it."],
  ["LUNCH UNDER $20","A proper meal without a financial planning session."],
  ["WORTH THE DRIVE","Places good enough to make crossing town feel reasonable."],
];

export default function Home() {
  return <main>
    <header>
      <a className="logo" href="#top">Bestaurants<span>Indy</span></a>
      <nav><a href="/reviews">Reviews</a><a href="/field-notes">Field Notes</a><a href="/guides">Guides</a><a href="/neighborhoods">Neighborhoods</a><a href="/about">About Sean</a></nav>
      <a className="ig" href="https://www.instagram.com/bestaurantsindy/" target="_blank" rel="noreferrer">@bestaurantsindy</a>
    </header>

    <section className="hero" id="top">
      <div className="heroCopy">
        <p className="eyebrow">INDIANAPOLIS, ORDERED</p>
        <h1>Restaurants worth <em>leaving the house</em> for.</h1>
        <p className="deck">What to order. What it costs. Whether it is worth driving across town. No vague praise. No directory of every place with a fryer.</p>
        <div className="actions"><a className="button red" href="#latest">Find your next meal</a><a className="under" href="#sean">Meet Sean ↘</a></div>
      </div>
      <div className="heroImg ramen" role="img" aria-label="Ramen Ray Spicy Miso ramen with chashu, egg, noodles, and vegetables">
        <div className="stamp"><small>SEAN SAYS</small><b>GO.</b></div>
        <div className="caption"><small>THE CURRENT OBSESSION</small><strong>Ramen Ray&apos;s Spicy Miso</strong></div>
      </div>
    </section>

    <div className="ticker"><span>WHAT TO ORDER</span><b>•</b><span>WHAT TO SKIP</span><b>•</b><span>WHAT IT COSTS</span><b>•</b><span>WORTH THE DRIVE?</span></div>

    <section className="section" id="latest">
      <div className="heading"><div><p className="eyebrow">LATEST INTELLIGENCE</p><h2>Eat better this week.</h2></div><p>Three opinions. Zero committee meetings.</p></div>
      <div className="cards">
        {cards.map(([kicker,title,copy,verdict,img])=><article key={title}>
          <div className={`cardImg ${img}`} role="img" aria-label={title}><span>{verdict}</span></div>
          <div className="cardCopy"><p className="kicker">{kicker}</p><h3>{title}</h3><p>{copy}</p><a href={img==="ramen"?"/reviews/ramen-field-note":img==="bagel"?"/reviews/bagel-field-note":"/reviews/pork-chop-field-note"}>Read Sean&apos;s take →</a></div>
        </article>)}
      </div>
      <p className="note">Launch stories are being prepared from Sean&apos;s original visits. Restaurant names, prices, and current details will appear only after verification.</p>
    </section>

    <section className="fieldNotesHome section">
      <div className="fieldNotesIntro"><p className="eyebrow">FIELD NOTES</p><h2>The small plates of Indianapolis-area food.</h2><p>Quick finds, local oddities, old favorites, and memorable bites—kept separate from full restaurant reviews.</p><a className="button red" href="/field-notes">Browse Field Notes</a></div>
      <a className="fieldNotesFeature" href="/field-notes/crunch-coat-cone"><img src="/jimmies-crunch-coat.png" alt="Crunch Coat cone at Jimmies Dairy Bar in Pendleton" /><div><span>PENDLETON · ICE CREAM</span><h3>The Nostalgic Crunch Coat Cone</h3><p>Vanilla soft serve buried under sweet golden crunch and rainbow sprinkles at Jimmies Dairy Bar.</p><b>Read the Field Note →</b></div></a>
    </section>

    <section className="guides section" id="guides">
      <div><p className="eyebrow gold">DECIDE FASTER</p><h2>Tell me the occasion.<br/>I&apos;ll tell you where to eat.</h2><p className="intro">Useful lists built around an actual decision—not forty restaurants thrown onto a page for search traffic.</p></div>
        <div className="guideList">{guides.map(([title,copy],i)=><a href="/guides" key={title}><span>0{i+1}</span><div><strong>{title}</strong><p>{copy}</p></div><b>↗</b></a>)}</div>
    </section>

    <section className="section" id="hoods">
      <p className="eyebrow">BROWSE BY NEIGHBORHOOD</p>
      <div className="heading"><h2>Start close. Drive farther if it earns it.</h2></div>
      <div className="hoods">{['Downtown','Mass Ave','Fountain Square','Broad Ripple','Northside','Beyond Indy'].map(name=><a href="/neighborhoods" key={name}><strong>{name}</strong><span>Browse neighborhood index →</span></a>)}</div>
    </section>

    <section className="sean" id="sean">
      <div className="portrait" role="img" aria-label="Painted portrait of Sean Matthews in an Indiana University cap and sunglasses"/>
      <div className="seanCopy"><p className="eyebrow">THE VOICE BEHIND THE VERDICT</p><h2>Meet Sean Matthews.</h2>
        <p className="lead">Local appetite. Strong opinions. No interest in pretending every meal changed his life.</p>
        <p>Sean grew up on the north side of Indianapolis, graduated from Indiana University in a subject he no longer discusses, and maintains that one of the best meals of his life came from a gas station in southern Indiana.</p>
        <p>He tells you what he ordered, what he would order again, and whether the trip and the bill were justified.</p>
        <div className="seanSignature"><span>LOCAL SINCE FOURTH GRADE</span><span>14 COUNTRIES</span><span>ONE TRIVIA-NIGHT BAN</span></div>
        <a className="button red" href="https://www.instagram.com/bestaurantsindy/" target="_blank" rel="noreferrer">Follow Sean on Instagram</a>
      </div>
    </section>

    <section className="dispatch section" id="dispatch"><p className="eyebrow">THE FIRST DISPATCHES</p><h2>BestaurantsIndy is just getting seated.</h2><p>The first full restaurant stories are coming next. Until then, follow the original recommendations and food photos on Instagram.</p><a className="button red" href="https://www.instagram.com/bestaurantsindy/" target="_blank" rel="noreferrer">Visit @bestaurantsindy</a></section>

    <footer><Link className="logo" href="/">Bestaurants<span>Indy</span></Link><p>Indianapolis restaurants worth leaving the house for.</p><div><a href="/reviews">Reviews</a><a href="/field-notes">Field Notes</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/editorial-policy">Editorial policy</a></div><small>© 2026 BestaurantsIndy. Opinions are Sean&apos;s. Sponsored or hosted meals will be labeled plainly.</small></footer>
  </main>
}
