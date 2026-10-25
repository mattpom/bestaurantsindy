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
  {id:"lunch-under-20",name:"Lunch on a $20 Budget",eyebrow:"CHECK THE MENU · COUNT THE EXTRAS",intro:"A starting shortlist for a lunch budget of $20 before tax, tip, drinks and add-ons. Confirm your location’s menu and lunch hours before going.",note:"Updated October 25, 2026. Garden Table’s Broad Ripple ordering menu lists the B Ripp Burrito at $16; The Eagle’s general menu lists its fried chicken sandwich at $13.50 and warns prices vary by location. Current prices for Yats, Broad Ripple Brewpub and Broad Ripple Tavern could not be confirmed; those entries are ideas to check, not verified under-$20 offers.",picks:[
    {name:"Yats",label:"MASS AVE",why:"An Indianapolis-born Cajun and Creole staple with rotating dishes over rice. Check the selected location’s current menu and total before ordering.",order:"Half-and-half — ask for the current price and available dishes.",price:"$",href:"https://www.yatscajuncreole.com/"},
    {name:"The Eagle",label:"MASS AVE",why:"The current general menu lists several sandwiches below $20. Prices and menu items may vary by location; sides cost extra.",order:"Fried chicken sandwich — $13.50 on the general menu; confirm Indianapolis pricing.",price:"$",href:"https://www.eaglerestaurant.com/menu/"},
    {name:"The Garden Table",label:"BROAD RIPPLE",why:"Substantial daytime plates that feel like lunch rather than a snack disguised by a low price.",order:"B Ripp Burrito — $16 on the Broad Ripple ordering menu; queso is an extra $4.",price:"$",href:"https://order.toasttab.com/online/the-garden-table-broad-ripple"},
    {name:"Broad Ripple Brewpub",label:"BROAD RIPPLE",why:"A pub-food option to investigate when you want vegetarian choices. Check the current menu price before treating it as an under-$20 lunch.",order:"Vegan tenderloin — current price not independently confirmed.",price:"$",href:"https://www.broadripplebrewpub.com/"},
    {name:"Broad Ripple Tavern",label:"BROAD RIPPLE",why:"A sandwich option to check on the official menu. Confirm the current price, included sides and lunch service before going.",order:"Pork tenderloin — current price not independently confirmed.",price:"$",href:"https://www.broadrippletavern.com/menu/all-day/"}
  ]},
  {id:"worth-the-drive",name:"Worth the Drive",eyebrow:"INDIANAPOLIS AREA · CROSS TOWN FOR A REASON",intro:"Indianapolis and nearby metro destinations where the meal justifies the mileage. Out-of-state restaurants belong in Out of Sight, Not Out of Mind—not here.",picks:[
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
