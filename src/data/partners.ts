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
  { src: "/DPIN.png", alt: "DPIN", href: ""},
];
