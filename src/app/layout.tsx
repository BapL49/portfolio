import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "../css/globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
      weight: ["300", "400", "500", "700"],
      variable: "--font-poppins",
      subsets: ["latin"],
});

const nunito = Nunito({
      variable: "--font-nunito",
      subsets: ["latin"],
});

export const metadata: Metadata = {
      title: "Luel Baptiste - Poortfolio | développeur web",
      description:
            "Découvrez le portfolio de Bapriste Luel, développeur web expert en Next.js et Node.js. Explorez des projets innovants, des solutions performantes et un savoir-faire technique pour répondre à tous vos besoins en développement web.",
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html
                  lang="fr"
                  suppressHydrationWarning
                  className={`${poppins.variable} ${nunito.variable}`}>
                  <head>
                        {(process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") && (
                              <Script src="https://unpkg.com/react-scan/dist/auto.global.js" />
                        )}
                  </head>
                  <body>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                  </body>
            </html>
      );
}
