import type { Metadata } from "next";
import { Poppins, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lave-Auto Chomedey - Professional Car Wash & Detailing",
  description: "Transform your car with our premium car wash and detailing services. Professional cleaning, ceramic coating, and interior detailing in Chomedey. Visit us today!",
  keywords: "car wash, car detailing, ceramic coating, interior cleaning, Chomedey, Laval, Quebec",
  authors: [{ name: "Lave-Auto Chomedey" }],
  openGraph: {
    title: "Lave-Auto Chomedey - Professional Car Wash & Detailing",
    description: "Transform your car with our premium car wash and detailing services.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        <AnimationProvider>
          <CustomCursor />
          <Navigation />
          <main className="min-h-screen">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
