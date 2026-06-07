import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "MLSoft Ltd — Software for salons and service businesses",
  description:
    "MLSoft Ltd builds practical SaaS products for UK salons and independent professionals, including Velleo.",
  metadataBase: new URL("https://mlsoft.ltd"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
