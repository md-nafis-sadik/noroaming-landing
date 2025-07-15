import type { Metadata } from "next";
import { bonbon, interTight, scout, scoutCond, yesevaOne } from "@/lib/fonts";
import "@/styles/globals.css";
import "@/styles/app.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigation/Navbar";
import { cn } from "@/lib/utils";
import LenisWrapper from "@/components/wrapper/LenisWrapper";

export const metadata: Metadata = {
  title: "Noroaming",
  description: "Noroaming is your one-stop eSIM solution for seamless global connectivity.",
  icons: {
    icon: "/favicon.svg", // Path to your favicon in the public directory
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <html lang="en" data-arp suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          interTight.variable,
          bonbon.variable,
          yesevaOne.variable,
          scoutCond.variable,
          scout.variable,
          "bg-white min-h-screen text-neutral-700 relative"
        )}
      >
        <LenisWrapper>
          <Navbar />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
