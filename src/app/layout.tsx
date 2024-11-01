import clsx from "clsx"
import { type Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const openSans = Open_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" })

const DESCRIPTION = "Hi! My name is Victor. I like gadgets, travel, eat, and drink icedtea :)"

export const metadata: Metadata = {
  title: "Victor Prince | MVP",
  description: DESCRIPTION,
  keywords: ["Victor Prince", "VictorPrince"],
  metadataBase: process.env.VERCEL_ENV === "production" ? new URL("https://jzxhuang.com") : undefined,
  // OG image generated using @vercel/og in open-graph.tsx (just to experiment)
  // See https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#image-files-jpg-png-gif
  openGraph: {
    title: "Victor Prince | MVP",
    description: DESCRIPTION,
  },
  manifest: "/site.webmanifest",
  // Google Search Console
  verification: {
    google: "oWN-7MScfVJWYHbPM5BGkrlsIX1d_y9HSFpIPP1myNI",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable} suppressHydrationWarning>
      <body className={clsx("bg-background font-sans text-foreground", openSans.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
