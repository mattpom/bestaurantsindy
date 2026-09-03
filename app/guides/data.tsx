export type GuidePick={name:string;label:string;why:string;order:string;price:string;href:string};
export type DiningGuide={id:string;name:string;eyebrow:string;intro:string;note?:string;picks:GuidePick[]};

export const diningGuides:DiningGuide[]=[
  {id:"take-the-visitors",name:"Take the Visitors",eyebrow:"SHOW OFF INDIANAPOLIS",intro:"Places with enough Indianapolis identity to make the meal feel connected to the city—not just convenient.",picks:[
    {name:"St. Elmo Steak House",label:"THE INSTITUTION",why:"Indianapolis history, old-school service, and a shrimp cocktail visitors will remember.",order:"Start with the shrimp cocktail.",price:"$$$$",href:"https://www.stelmos.com/"},
    {name:"Bluebeard",label:"MODERN INDY",why:"A nationally recognized kitchen in a converted Fletcher Place warehouse with Amelia’s bread baked next door.",order:"Let the changing menu make the decision.",price:"$$$",href:"https://bluebeardindy.com/"},
    {name:"The Eagle",label:"EASY CROWD-PLEASER",why:"A lively Mass Ave room that turns fried chicken and Southern sides into an easy group dinner.",order:"Fried chicken and several sides for the table.",price:"$$",href:"https://www.eaglerestaurant.com/"},
    {name:"Shapiro’s Delicatessen",label:"OLD INDIANAPOLIS",why:"A cafeteria-style Indianapolis landmark serving towering deli sandwiches since 1905.",order:"Corned beef or pastrami, then inspect the dessert case.",price:"$$",href:"https://shapiros.com/"},
    {name:"Iaria’s",label:"FAMILY HISTORY",why:"A long-running, family-owned Italian restaurant that feels specific to Indianapolis.",order:"Red-sauce classics and garlic bread.",price:"$$",href:"https://www.iarias.com/"}
  ]},
  {id:"date-night",name:"Date Night",eyebrow:"ATMOSPHERE THAT EARNS IT",intro:"Restaurants where the room contributes to the evening and the food is still the reason to go.",picks:[
    {name:"Delicia",label:"SEAN LOVES THIS ONE",why:"One of College Avenue’s most distinctive rooms, with New Latin cooking and cocktails that make dinner feel like an occasion.",order:"Share several plates and do not skip the cocktail list.",price:"$$$",href:"https://www.deliciaindy.com/"},
    {name:"Ambrosia",label:"POLISHED ITALIAN",why:"Warm, established, and intimate enough for conversation without becoming stiff.",order:"Pasta, wine, and enough time to enjoy both.",price:"$$$",href:"https://www.ambrosiaindy.com/"},
    {name:"BODHI",label:"ENERGETIC",why:"Thai cooking, a serious bar program, and a striking Mass Ave setting for a less predictable date.",order:"Pick plates to share and build around the cocktails.",price:"$$$",href:"https://www.bodhi-indy.com/"},
    {name:"Livery",label:"ROOFTOP OPTION",why:"A converted stable, Latin-inspired dishes, and a setting that works especially well when the weather cooperates.",order:"Shareable plates and rooftop drinks.",price:"$$$",href:"https://www.livery-restaurant.com/"},
    {name:"Geraldine’s Supper Club",label:"DRESS-UP NIGHT",why:"Steaks, seafood, classic cocktails, and supper-club atmosphere for a full evening rather than a quick meal.",order:"Treat it like the main event.",price:"$$$$",href:"https://www.geraldinesindy.com/"}
  ]},
  {id:"lunch-under-20",name:"Lunch Under $20",eyebrow:"ONE REAL LUNCH · NO FINE PRINT",intro:"A satisfying entrée or substantial lunch for $20 or less before tax, tip, and drinks.",note:"Prices checked September 2026. Menus change; use the restaurant link to verify before going.",picks:[
    {name:"Yats",label:"MASS AVE",why:"An Indianapolis-born Cajun and Creole staple with hearty rotating dishes over rice, spiced bread, and prices comfortably below the limit.",order:"Half-and-half — two daily dishes in one order, currently under $20.",price:"$",href:"https://www.yatscajuncreole.com/"},
    {name:"The Eagle",label:"MASS AVE",why:"The fried chicken sandwich, grilled cheese, braised pork sandwich, and several chicken portions remain below the limit.",order:"Fried chicken sandwich — listed at $13.",price:"$",href:"https://www.eaglerestaurant.com/"},
    {name:"The Garden Table",label:"BROAD RIPPLE",why:"Substantial daytime plates that feel like lunch rather than a snack disguised by a low price.",order:"B Ripp burrito — listed at $16.",price:"$",href:"https://www.thegardentable.com/"},
    {name:"Broad Ripple Brewpub",label:"BROAD RIPPLE",why:"Pub food, vegetarian options, and several full meals comfortably below $20.",order:"Vegan tenderloin — listed at $13.25.",price:"$",href:"https://www.broadripplebrewpub.com/"},
    {name:"Broad Ripple Tavern",label:"BROAD RIPPLE",why:"Straightforward sandwiches and baskets at prices that still leave room beneath the cap.",order:"Pork tenderloin — listed at $12.",price:"$",href:"https://www.broadrippletavern.com/"}
  ]},
  {id:"worth-the-drive",name:"Worth the Drive",eyebrow:"CROSS TOWN FOR A REASON",intro:"The meal has to justify the mileage. These are destinations, not places added merely to make the list longer.",picks:[
    {name:"Caplinger’s Fresh Catch",label:"SHADELAND",why:"Indianapolis’ strongest casual-seafood counter pairs made-to-order fried and grilled fish with a full fresh-fish market at its flagship location.",order:"The Caplinger Special fish sandwich or the Caplinger Dinner.",price:"$$",href:"https://caplingersfreshcatch.com/"},
    {name:"Late Harvest Kitchen",label:"NORTHSIDE",why:"Seasonal Midwestern cooking and a warm dining room that reward making an actual reservation.",order:"Follow the seasonal menu.",price:"$$$",href:"https://www.lateharvestkitchen.com/"},
    {name:"Provision",label:"IRONWORKS",why:"An upscale northside destination suited to celebrations and nights when downtown is not the plan.",order:"Build the evening around a main course and rooftop drink.",price:"$$$$",href:"https://www.provision-restaurant.com/"},
    {name:"Mama’s Korean Restaurant",label:"LAWRENCE",why:"The dolsot bibimbap arrives sizzling, and the crisp rice at the bottom is worth waiting for.",order:"Dolsot bibimbap—let it sit before mixing.",price:"$$",href:"/reviews/mamas-dolsot-bibimbap"},
    {name:"Jimmies Dairy Bar",label:"PENDLETON",why:"A nostalgia-driven stop when a soft-serve cone is enough reason to point the car out of town.",order:"The Crunch Coat cone.",price:"$",href:"/field-notes/crunch-coat-cone"}
  ]}
];

export function GuidePickGrid({picks}:{picks:GuidePick[]}){return <div className="guidePickGrid">{picks.map((p,i)=><article className={i===0?"guidePick featuredGuidePick":"guidePick"} key={p.name}>
  <div className="pickTop"><span>{p.label}</span><b>{p.price}</b></div><h2>{p.name}</h2><p>{p.why}</p><strong>{p.order}</strong>
  <a href={p.href} target={p.href.startsWith("http")?"_blank":undefined} rel={p.href.startsWith("http")?"noreferrer":undefined}>{p.href.startsWith("http")?"Visit restaurant website ↗":"Read Sean’s take →"}</a>
</article>)}</div>}
