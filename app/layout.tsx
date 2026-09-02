import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase:new URL("https://bestaurantsindy.com"),
  title:"BestaurantsIndy | Indianapolis Restaurants Worth Leaving the House For",
  description:"What to order, what it costs, and whether an Indianapolis restaurant is worth the drive. Hosted by Sean Matthews.",
  alternates:{canonical:"/",types:{"application/rss+xml":"/feed.xml"}},
  openGraph:{title:"BestaurantsIndy",description:"Indianapolis restaurants worth leaving the house for.",type:"website",images:["/og.png"]},
  twitter:{card:"summary_large_image",title:"BestaurantsIndy",description:"Indianapolis restaurants worth leaving the house for.",images:["/og.png"]},
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
  verification:{google:"AvGwjtc34iZfjsnAHIjJh78Cm7e0ZOSHxH3QLZ6nTVo"},
  robots:{
    index:true,
    follow:true,
    googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}
  }
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PTXBXS7CH2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PTXBXS7CH2');`}
      </Script>
    </html>
  );
}
