import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/reusable/Nav";
import Footer from "@/components/reusable/Footer";

export const metadata: Metadata = {
  title: "AESS - Advanced Engineering Solutions & Services",
  description:
    "Professional engineering solutions and services for innovative projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
