import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import background from "@images/Home/background.jpg";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mwafq",
  description:
    "Mwafq - Your Trusted Partner for Pre-Employment Medical Examinations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
