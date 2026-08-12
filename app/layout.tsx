import type { Metadata } from "next";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrintForge — Discover what's possible with 3D printing",
  description:
    "Join our community of creators and explore a vast library of user-submitted 3D printing models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
