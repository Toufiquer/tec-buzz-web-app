/*
|-----------------------------------------
| setting up page.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TecBuzz, 2 November, 2026
|-----------------------------------------
*/

import Footer from "@/components/footer/Footer";
import MobileNavigation from "@/components/MobileNavigation";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";

export default function SiteFooter() {
  return (
    <>
      <Footer />
      <WhatsAppButton />
      <MobileNavigation />
    </>
  );
}
