export type TeamRole = "Co-organizer" | "Challenge Director" | "Advisor";

export interface TeamMember {
  name: string;
  affiliation: string;
  bio: string;
  image: string;
  linkedin: string;
  role: TeamRole;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // Co-Organizers
  {
    name: "Adam Herold",
    role: "Co-organizer",
    affiliation: "University of Cambridge",
    bio: "Adam is an MPhil candidate in Technology Policy at the Cambridge Judge Business School. In 2023, he graduated from Cornell University's College Scholar Program, through which he completed an interdisciplinary research study on undergraduate career decision-making. Afterwards, he worked as a senior business researcher at Gartner. On the side, he is a practicing artist and graphic designer and is keenly interested in social entrepreneurship.",
    image: "/team/adam.png",
    linkedin: "https://www.linkedin.com/in/adam-herold/",
  },
  {
    name: "Arif Baker",
    role: "Co-organizer",
    affiliation: "University of Cambridge",
    bio: "Arif Baker is an MPhil candidate in Technology Policy at Cambridge Judge Business School. He has professional experience across public and private sectors, spanning government technology policy and implementation, software development, and project management in the UK and Malaysia. He holds a Bachelor of Science in Computer Science, specialising in Artificial Intelligence, from the University of Nottingham.",
    image: "/team/arif.png",
    linkedin: "https://www.linkedin.com/in/arif-b-3a5329271/",
  },
  {
    name: "Xuelong Fu",
    role: "Co-organizer",
    affiliation: "University of Cambridge",
    bio: "Xuelong is an MPhil candidate in Technology Policy at the Cambridge Judge Business School. Prior, he studied various subjects and holds three bachelor's degrees in political science, business administration, and AI. He co-founded the Amsterdam Policy Hackathon and Data for Public Impact Network (DPIN), which aims to bring policy hackathons to cities around the world. Currently, he also works as Associate Editor for the MIT Science Policy Review and conducts research at the Oxford Computational Political Science Group.",
    image: "/team/xuelong.png",
    linkedin: "https://www.linkedin.com/in/xuelong-f-4203a3216/",
  },

  // Challenge Directors
  {
    name: "Jian Xin Lim",
    role: "Challenge Director",
    affiliation: "Effective Altruism Cambridge",
    bio: "Jian Xin is the Director of Effective Altruism Cambridge, where he runs programs connecting Cambridge students with high-impact careers in policy, research, and global priorities. He manages CHIRP (Cambridge High Impact Research Project), an 8-week intensive research program pairing students with expert mentors to produce policy briefs and research on issues including biosecurity, global health, and existential risk. He also directs the Project-Based Fellowship and coordinates Cambridge's delegation to conferences like EAGx. His work complements the Cambridge Policy Hackathon's mission of developing students' capacity to tackle pressing global challenges through evidence-based policy.",
    image: "/team/jianxin.png",
    linkedin: "https://www.linkedin.com/in/jian-xin-lim%F0%9F%94%B8-87826a182/",
  },

  // Advisors
  {
    name: "Christos Genakos",
    role: "Advisor",
    affiliation: "University of Cambridge",
    bio: "",
    image: "/team/christos.png",
    linkedin: "",
  },
  {
    name: "David Reiner",
    role: "Advisor",
    affiliation: "University of Cambridge",
    bio: "",
    image: "/team/david.png",
    linkedin: "",
  },
];
