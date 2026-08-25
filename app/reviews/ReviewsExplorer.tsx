"use client";
import {useMemo,useState} from "react";
import {reviewEntries as entries} from "./data";

export default function ReviewsExplorer(){
 const [query,setQuery]=useState(""); const [filter,setFilter]=useState("All");
 const visible=useMemo(()=>entries.filter(x=>(filter==="All"||x.category===filter)&&(`${x.title} ${x.category} ${x.summary}`.toLowerCase().includes(query.toLowerCase()))),[query,filter]);
 return <><div className="reviewTools"><label><span>Search reviews</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by dish or cuisine"/></label><div className="filters">{["All","Wings","Japanese","Breakfast","Dinner"].map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div></div>
 <div className="reviewGrid">{visible.map(x=><article key={x.title}>{x.image&&<img src={x.image} alt=""/>}<div><p className="kicker">{x.category} · {x.verdict}</p><h2>{x.title}</h2><p>{x.summary}</p><a href={x.href}>Read review →</a></div></article>)}</div>
 {!visible.length&&<p className="empty">No reviews match that search yet.</p>}</>
}
