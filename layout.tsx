import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title:"BestaurantsIndy | Indianapolis Restaurants Worth Leaving the House For",
  description:"What to order, what it costs, and whether an Indianapolis restaurant is worth the drive. Hosted by Sean Matthews.",
  openGraph:{title:"BestaurantsIndy",description:"Indianapolis restaurants worth leaving the house for.",type:"website",images:["https://bestaurantsindy.mattpom01.chatgpt.site/og.png"]},
  twitter:{card:"summary_large_image",title:"BestaurantsIndy",description:"Indianapolis restaurants worth leaving the house for.",images:["https://bestaurantsindy.mattpom01.chatgpt.site/og.png"]},
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
