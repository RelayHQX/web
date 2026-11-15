import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Terms & Conditions — Relay Mail",
  description: "Terms and conditions for Relay Mail.",
};

const Terms = () => {
  return (
    <main className="fixed inset-0 w-full h-full overflow-hidden bg-[#fafafc] dark:bg-black">
      {/* Floating navigation dock with Home back button and Theme toggle side-by-side */}
      <Navbar />

      {/* Full screen Notion iframe with sandbox to block top-window reload loops */}
      <iframe
        className="w-full h-full border-0 block"
        src="https://tame-slicer-4ca.notion.site/ebd/418ece28b75d80539548e01199241568"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-presentation"
        allowFullScreen
        loading="eager"
        title="Terms and Conditions"
      />
    </main>
  );
};

export default Terms;
