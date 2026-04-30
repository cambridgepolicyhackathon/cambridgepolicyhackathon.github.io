export interface ChallengeCase {
  id: string;
  partnerName: string;
  /** Path under `public/`, e.g. "/Homes.png". If omitted, a text placeholder is shown. */
  logoSrc?: string;
  title: string;
  description: string;
}

/**
 * Landing page “Challenge cases” cards.
 * Titles/descriptions are intentionally short; tweak freely as cases firm up.
 */
export const CHALLENGE_CASES: ChallengeCase[] = [
  {
    id: "homes-england",
    partnerName: "Homes England",
    logoSrc: "/Homes.png",
    title: "Designing a Housing Data Lab",
    description:
      "",
  },
  {
    id: "cisl",
    partnerName: "CISL",
    logoSrc: "/CISL.png",
    title: "Scaling up nature-aligned businesses",
    description:
      "",
  },
  {
    id: "dsit",
    partnerName: "UK DSIT",
    logoSrc: "/DSIT-GDS.png",
    title: "Making Data Match: Connecting Public Sector Data Holders with Data Users",
    description:
      "",
  },
  {
    id: "TBA",
    partnerName: "TBA",
    title: "Health Care Access & Geopolitics",
    description:
      ""
  },
  {
    id: "TBA",
    partnerName: "TBA",
    title: "Digital Fraud Detection & Prevention",
    description:
      "",
  },
];

