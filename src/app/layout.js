import { Kode_Mono } from "next/font/google";
import "./globals.css";

const font = Kode_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "SFC Kargo Takip",
  description: "Kargo takip et",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
