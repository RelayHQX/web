import { RelayLogo } from "@/components/relay-logo";
import { LinkCard, type LinkItem } from "@/components/link-card";
import { Navbar } from "@/components/navbar";

import {
  Github01Icon,
  PolicyIcon,
  News01Icon,
  Agreement03Icon,
} from "@hugeicons/core-free-icons";

const links: LinkItem[] = [
  {
    title: "Blogs",
    href: "https://blogs.relaymail.online",
    icon: News01Icon,
    isExternal: true,
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
    icon: PolicyIcon,
  },
  {
    title: "Terms & Condition",
    href: "/terms",
    icon: Agreement03Icon,
  },
  {
    title: "GitHub",
    href: "https://github.com/relayhqx",
    icon: Github01Icon,
    isExternal: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-[#fafafc] text-neutral-900 dark:bg-black dark:text-white selection:bg-neutral-900/10 dark:selection:bg-white/20 selection:text-neutral-900 dark:selection:text-white transition-colors duration-200 relative">
      <Navbar isHome />

      <div className="flex items-center mb-2">
        <RelayLogo className="h-6 w-auto text-neutral-950 dark:text-white transition-colors" />
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">
          elay Mail
        </h1>
      </div>

      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8 font-normal">
        RelayHQ
      </p>

      <div className="w-full max-w-sm sm:max-w-2xl rounded-2xl bg-black/5 dark:bg-white/10 backdrop-blur-xl overflow-hidden shadow-lg dark:shadow-2xl transition-colors">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-black/5 dark:divide-white/10">
          {links.map((link) => (
            <LinkCard key={link.title} item={link} />
          ))}
        </div>
      </div>
    </main>
  );
}
