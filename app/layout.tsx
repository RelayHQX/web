import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relay Mail — Blazing Fast, Keyboard-Driven Email Client",
  description:
    "Relay is the minimal, ultra-fast email client engineered for focus, privacy, and modern workflows. Powered by RelayHQ.",
  icons: {
    icon: "/relay-hq.png",
  },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('relay-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || ((!stored || stored === 'system') && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#fafafc] text-neutral-900 dark:bg-black dark:text-white selection:bg-neutral-900/10 dark:selection:bg-white/20 selection:text-neutral-900 dark:selection:text-white transition-colors duration-200"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
