import { Poppins } from "next/font/google";
import Footer from "@/components/semantic/Footer";
import type { Metadata } from "next";
import "./globals.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kudos.az",
  description: "Kudos.az Eylenceli oyun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
