/**
 * Partner logos shown on the home page hero and /partners.
 * Add a `href` to make the logo clickable; leave empty or omit for no link.
 * Use `alt` for the full written-out name with a short abbreviation in brackets, e.g.
 * "Centre for Science and Policy (CSaP)" — shown on the Partners page and used for image alt text.
 */
export interface PartnerLogo {
  src: string;
  alt: string;
  /** Partner website URL. Leave empty or omit to show logo without link. */
  href?: string;
}

/** Host institutions */
export const PARTNERS_EVENT_BY: PartnerLogo[] = [
  {
    src: "/DPIN.png",
    alt: "Data for Public Impact Network (DPIN)",
    href: "https://dpi.network/",
  },
];

/** Sponsors and organisations that make the event possible */
export const PARTNERS_MADE_POSSIBLE: PartnerLogo[] = [
  {
    src: "/CJBS.png",
    alt: "Cambridge Judge Business School (CJBS)",
    href: "https://www.jbs.cam.ac.uk/",
  },
  {
    src: "/CSaP.png",
    alt: "Centre for Science and Policy (CSaP)",
    href: "https://www.csap.cam.ac.uk/",
  },
  {
    src: "/Homes.png",
    alt: "Homes England",
    href: "https://www.gov.uk/government/organisations/homes-england",
  },
];

/** Student societies and community groups */
export const PARTNERS_COMMUNITY: PartnerLogo[] = [
  {
    src: "/SMA-logo-red.png",
    alt: "The School for Moral Ambition (SMA)",
    href: "https://www.moralambition.org/",
  },
  {
    src: "/EA-cam.png",
    alt: "Effective Altruism Cambridge (EA Cambridge)",
    href: "https://www.eacambridge.org/",
  },
  {
    src: "/CUSPE-logo.png",
    alt: "Cambridge University Science and Policy Exchange (CUSPE)",
    href: "https://cuspe.org.uk/",
  },
  {
    src: "/CUBISS.png",
    alt: "Cambridge University Behavioural Insights Student Society (CUBISS)",
    href: "https://www.linkedin.com/company/cambridge-cubiss/",
  },
  {
    src: "/CambridgeZero.png",
    alt: "Cambridge Zero (University of Cambridge)",
    href: "https://www.zero.cam.ac.uk/",
  },
  {
    src: "/CUTEC.png",
    alt: "Cambridge University Technology & Enterprise Club (CUTEC)",
    href: "https://www.cutec.io/",
  },
];

/** Flat list for the home page marquee (same order as partner page sections). */
export const PARTNER_LOGOS: PartnerLogo[] = [
  ...PARTNERS_MADE_POSSIBLE,
  ...PARTNERS_COMMUNITY,
  ...PARTNERS_EVENT_BY,
];

export const PARTNER_PAGE_SECTIONS: {
  title: string;
  partners: PartnerLogo[];
}[] = [
  { title: "Made possible by", partners: PARTNERS_MADE_POSSIBLE },
  { title: "Community Partners", partners: PARTNERS_COMMUNITY },
  { title: "An event by", partners: PARTNERS_EVENT_BY },
];
