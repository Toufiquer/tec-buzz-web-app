/*
|-----------------------------------------
| setting up page.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TecBuzz, 2 November, 2026
|-----------------------------------------
*/

import { Menu } from "@/components/menu/Menu";
import TopBanner from "@/components/topbanner/TopBanner";

export default function SiteHeader() {
  return (
    <>
      <TopBanner />
      <Menu />
    </>
  );
}
