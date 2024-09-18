import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata = {
  title: "P-FI",
  description: "A Peer to Peer e-money Sharing App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased`}>
          <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
