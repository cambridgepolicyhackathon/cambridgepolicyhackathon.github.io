import { NavbarRoutes } from "@/layout/navbar";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const allRoutes: NavbarRoutes = [
  { title: "Home", href: "/" },
  { title: "Team", href: "/about" },
  { title: "Partners", href: "/partners" },
  { title: "FAQ", href: "/faq" },
];

export const routes: NavbarRoutes = siteMetadata.showPartners
  ? allRoutes
  : allRoutes.filter((r) => r.href !== "/partners");
