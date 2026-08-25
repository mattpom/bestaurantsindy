"use client";
import {useMemo,useState} from "react";

const entries=[
  {title:"Hooray for Ray",category:"Ramen Ray",verdict:"Order the Spicy Miso",image:"/ramen-clean.png",href:"/reviews/ramen-field-note",summary:"Spicy miso pork broth with chili heat, noodles, chashu, a marinated egg, and vegetables."},
  {title:"No, You Can Be My Wingman",category:"Wings",verdict:"New #1",image:"/colonel-crying.webp",href:"/reviews/wingman",summary:"Korean fried chicken, Buffalo wings, and why soy garlic now holds the top spot."},
  {title:"The Day Lox Took a Back Seat",category:"Broad Ripple",verdict:"Order the Tonya Harding",image:"/bagel-clean.png",href:"/reviews/bagel-field-note",summary:"At Broad Ripple Bagel & Deli, turkey, ham, bacon, Colby, and Swiss turn a steamed plain bagel into the Tonya Harding."},
  {title:"Pork chop field note",category:"Dinner",verdict:"Worth the price",image:"/chop-clean.png",href:"/reviews/pork-chop-field-note",summary:"A thick seared chop with greens and a sharp sauce drizzle."},
];

export default function ReviewsExplorer(){
 const [query,setQuery]=useState(""); const [filter,setFilter]=useState("All");
 const visible=useMemo(()=>entries.filter(x=>(filter==="All"||x.category===filter)&&(`${x.title} ${x.category} ${x.summary}`.toLowerCase().includes(query.toLowerCase()))),[query,filter]);
 return <><div className="reviewTools"><label><span>Search reviews</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by dish or cuisine"/></label><div className="filters">{["All","Ramen Ray","Wings","Broad Ripple","Dinner"].map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div></div>
 <div className="reviewGrid">{visible.map(x=><article key={x.title}><img src={x.image} alt=""/><div><p className="kicker">{x.category} · {x.verdict}</p><h2>{x.title}</h2><p>{x.summary}</p><a href={x.href}>Read review →</a></div></article>)}</div>
 {!visible.length&&<p className="empty">No reviews match that search yet.</p>}</>
}
