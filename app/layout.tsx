import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import WhatsappLive from "@/components/whatsapp/WhatappLive";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/footer";
import CallButton from "@/components/whatsapp/call-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vettrivelan Travels Coimbatore",
  description: "A travel agency in Coimbatore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased    min-h-screen`}
      >
        <Container className="">
 
          <Navbar />
           {children}
          <Toaster />
          <Footer/>
        </Container>
        <WhatsappLive />
        <CallButton/>
      </body>
    </html>
  );
}
