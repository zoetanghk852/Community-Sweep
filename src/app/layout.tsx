import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Noto_Sans_TC } from "next/font/google";
import { ActivityRegistrationsProvider } from "@/context/ActivityRegistrationsContext";
import { PointsProvider } from "@/context/PointsContext";
import "./globals.css";

const notoSansTc = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "社區換物carousell",
  description: "社區換物carousell — 鼓勵長者交換閒置物品、預約修繕",
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
    <html lang="zh-Hant-HK" className={`${notoSansTc.variable} h-full`} suppressHydrationWarning>
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
