import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import Script from "next/script";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://reliablepay.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ReliablePay - Payroll & Payment Solutions for Australian Businesses",
    template: "%s | ReliablePay",
  },
  description: "Professional payroll processing, salary disbursement, superannuation processing, compliance reporting, and payroll outsourcing services for Australian businesses.",
  keywords: [
    "payroll processing Australia",
    "salary disbursement",
    "superannuation processing",
    "payroll compliance",
    "payroll outsourcing",
    "Australian payroll services",
    "Single Touch Payroll",
    "STP compliance",
    "payroll solutions NSW",
    "business payroll services",
  ],
  authors: [{ name: "Reliable Pay Solutions Pty Ltd" }],
  creator: "ReliablePay",
  publisher: "Reliable Pay Solutions Pty Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "ReliablePay",
    title: "ReliablePay - Payroll & Payment Solutions for Australian Businesses",
    description: "Professional payroll processing, salary disbursement, superannuation processing, compliance reporting, and payroll outsourcing services for Australian businesses.",
    images: [
      {
        url: "/RealiablePay.png",
        width: 1200,
        height: 630,
        alt: "ReliablePay - Australian Payroll Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReliablePay - Payroll & Payment Solutions for Australian Businesses",
    description: "Professional payroll processing, salary disbursement, superannuation processing, compliance reporting, and payroll outsourcing services for Australian businesses.",
    images: ["/RealiablePay.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reliable Pay Solutions Pty Ltd",
  alternateName: "ReliablePay",
  url: siteUrl,
  logo: `${siteUrl}/RealiablePay.png`,
  description: "Professional payroll processing, salary disbursement, superannuation processing, compliance reporting, and payroll outsourcing services for Australian businesses.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "New South Wales",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@reliablepay.com.au",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [],
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  serviceType: [
    "Payroll Processing",
    "Salary Disbursement",
    "Superannuation Processing",
    "Payroll Compliance",
    "Payroll Outsourcing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} ${outfit.variable} antialiased`}>
        <ProgressBar />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
