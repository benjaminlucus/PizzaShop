import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pizza Perfection",
  description: "An amazing pizza ordering web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon (SVG or ICO) */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        {/* Optional meta tags */}
        <meta name="theme-color" content="#ef4444" />
        <meta name="author" content="Pizza Perfection Team" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
