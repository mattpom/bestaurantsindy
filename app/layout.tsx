import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase:new URL("https://bestaurantsindy.com"),
  title:"BestaurantsIndy | Indianapolis Restaurants Worth Leaving the House For",
  description:"What to order, what it costs, and whether an Indianapolis restaurant is worth the drive. Hosted by Sean Matthews.",
  alternates:{types:{"application/rss+xml":"/feed.xml"}},
  openGraph:{title:"BestaurantsIndy",description:"Indianapolis restaurants worth leaving the house for.",type:"website",images:["/og.png"]},
  twitter:{card:"summary_large_image",title:"BestaurantsIndy",description:"Indianapolis restaurants worth leaving the house for.",images:["/og.png"]},
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
