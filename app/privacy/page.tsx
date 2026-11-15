import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Privacy Policy — Relay Mail",
  description: "Privacy policy for Relay Mail.",
};

const Privacy = () => {
  return (
    <main className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {/* Floating navigation with Home back button */}
      <Navbar />

      {/* Full screen Notion iframe with sandbox to block top-window reload loops */}
      <iframe
        className="w-full h-full border-0 block"
        src="https://tame-slicer-4ca.notion.site/ebd/418ece28b75d80f58927d8e3fddf0bc4"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-presentation"
        allowFullScreen
        loading="eager"
        title="Privacy Policy"
      />
    </main>
  );
};

export default Privacy;
