import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import "@/scss/theme.scss";
import Providers from "@/utils/providers";

import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta_sans",
});
const playfair = Playfair_Display({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "SFGCO  | The future of green sustainability and investment.",
  description:
    " SFGCO (Saudi Future Green Company) is a prominent player in Saudi Arabia's growing green sustainability and investment sector. The company is dedicated to advancing environmental initiatives and driving sustainable development in the Kingdom. SFGCO focuses on renewable energy, waste management, and circular economy solutions, with an emphasis on using cutting-edge technologies to support the Kingdom's Vision 2030 objectives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` relative overflow-x-hidden  bg-white text-base antialiased dark:bg-dark-300 ${inter.variable} ${jakarta_sans.variable} ${playfair.variable}`}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitcher />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
