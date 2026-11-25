import fs from "fs";
import path from "path";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Privacy Policy — Relay Mail",
  description: "Privacy Policy for Relay Mail.",
};

function getPrivacyContent() {
  const filePath = path.join(process.cwd(), "public", "privacy.html");
  const svgPath = path.join(
    process.cwd(),
    "public",
    "shield-check-stroke-rounded.svg"
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const svgContent = fs.existsSync(svgPath)
    ? fs.readFileSync(svgPath, "utf-8")
    : "";

  const articleMatch = fileContent.match(/<article[\s\S]*?<\/article>/);
  if (!articleMatch) return "";

  let content = articleMatch[0];

  // 1. Replace the header icon div containing img with the inline SVG to guarantee zero 404s
  if (svgContent) {
    content = content.replace(
      /<div class="page-header-icon[^>]*>[\s\S]*?<\/div>/,
      `<div class="page-header-icon">${svgContent}</div>`
    );
  }

  // 2. Normalize whitespace inside text: eliminate newlines and surrounding tabs/spaces
  content = content.replace(/\r?\n[\t ]*/g, " ");

  // 3. Remove excess whitespace between tags
  content = content.replace(/>\s+</g, "><");

  return content;
}

export default function Privacy() {
  const content = getPrivacyContent();

  return (
    <main className="min-h-screen w-full bg-black text-white selection:bg-white/20 selection:text-white">
      {/* Floating navigation with Home back button */}
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-24 pb-32 sm:px-8 sm:pt-28 sm:pb-36">
        <div
          className="notion-dark-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </main>
  );
}
