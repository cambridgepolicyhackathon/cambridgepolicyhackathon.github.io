/**
 * Partner logos shown on the home page hero.
 * Add a `href` to make the logo clickable; leave empty string or omit for no link.
 */
export interface PartnerLogo {
  src: string;
  alt: string;
  /** Partner website URL. Leave empty or omit to show logo without link. */
  href?: string;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: "/UoC.png", alt: "University of Cambridge", href: "https://www.cam.ac.uk/" },
  { src: "/CJBS.png", alt: "CJBS", href: "https://www.jbs.cam.ac.uk/" },
  { src: "/CSaP.png", alt: "CSaP", href: "https://www.csap.cam.ac.uk/" },
  { src: "/EA-cam.png", alt: "EA Cambridge", href: "https://www.eacambridge.org/" },
  { src: "/SMA-logo-red.png", alt: "SMA", href: "https://www.moralambition.org/" },
  { src: "/CUSPE-logo.png", alt: "CUSPE", href: "https://cuspe.org.uk/" },
  { src: "/CambridgeZero.png", alt: "Cambridge Zero", href: "https://www.zero.cam.ac.uk/" },
  { src: "/CUBISS.png", alt: "CUBISS", href: "https://www.linkedin.com/company/cambridge-cubiss/" },
  { src: "/DPIN.png", alt: "DPIN", href: "" },
];

/**
 * Partner entries for the /partners page (name + description cards).
 * Edit descriptions here to update the Partners page.
 */
export interface Partner {
  name: string;
  description: string;
}

export const PARTNERS: Partner[] = [
  { name: "University of Cambridge", description: "Our host institution." },
  { name: "CJBS", description: "Cambridge Judge Business School." },
  { name: "CSaP", description: "Centre for Science and Policy." },
  { name: "EA Cambridge", description: "Effective Altruism Cambridge." },
  { name: "SMA", description: "The School for Moral Ambition." },
  { name: "CUSPE", description: "Cambridge University Science and Policy Exchange." },
  { name: "Cambridge Zero", description: "Cambridge Zero" },
  { name: "CUBISS", description: "Cambridge University Behavioural Insights Student Society." },
  { name: "DPIN", description: "Data for Public Impact Network." },
];
