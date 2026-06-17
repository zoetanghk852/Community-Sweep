import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { ActivityRegistrationsProvider } from "@/context/ActivityRegistrationsContext";
import { PointsProvider } from "@/context/PointsContext";
import "./globals.css";

const notoSansTc = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerifTc = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "社區換物carousell",
  description: "社區換物carousell，鼓勵長者交換閒置物品、預約修繕",
  openGraph: {
    title: "社區換物carousell",
    description: "每月換物市集、線上換物與積分禮品，發掘舊物價值，重建街坊連結。",
    locale: "zh_HK",
    type: "website",
    images: [{ url: "/images/hero-community-barter.png", width: 1024, height: 572, alt: "社區換物市集插圖" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5b8a72",
};

/** Strip extension-injected attrs before React hydrates (e.g. data-atm-ext-installed). */
const stripExtensionAttrsScript = `(function(){var a=["data-atm-ext-installed","cz-shortcut-listen","data-gr-ext-installed","data-new-gr-c-s-check-loaded"];function s(e){if(!e)return;a.forEach(function(t){e.removeAttribute(t)})}function r(){s(document.documentElement);s(document.body)}r();document.addEventListener("DOMContentLoaded",r);if(typeof MutationObserver!=="undefined"){var o=new MutationObserver(r),b=function(){[document.documentElement,document.body].forEach(function(e){if(e)o.observe(e,{attributes:!0,attributeFilter:a})})};document.body?b():document.addEventListener("DOMContentLoaded",b)}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-HK" className={`${notoSansTc.variable} ${notoSerifTc.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <Script
          id="strip-extension-attrs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: stripExtensionAttrsScript }}
        />
        <PointsProvider>
          <ActivityRegistrationsProvider>{children}</ActivityRegistrationsProvider>
        </PointsProvider>
      </body>
    </html>
  );
}
