export interface TeamMember {
  name: string;
  affiliation: string;
  bio: string;
  image: string;
  linkedin: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Adam Herold",
    affiliation: "University of Cambridge",
    bio: "Adam is an MPhil candidate in Technology Policy at the Cambridge Judge Business School. In 2023, he graduated from Cornell University's College Scholar Program, through which he completed an interdisciplinary research study on undergraduate career decision-making. Afterwards, he worked as a senior business researcher at Gartner. On the side, he is a practicing artist and graphic designer and is keenly interested in social entrepreneurship.",
    image: "/team/adam.png",
    linkedin: "https://www.linkedin.com/in/adam-herold/",
  },
  {
    name: "Arif Baker",
    affiliation: "University of Cambridge",
    bio: "Arif Baker is an MPhil candidate in Technology Policy at Cambridge Judge Business School. He has professional experience across public and private sectors, spanning government technology policy and implementation, software development, and project management in the UK and Malaysia. He holds a Bachelor of Science in Computer Science, specialising in Artificial Intelligence, from the University of Nottingham.",
    image: "/team/arif.png",
    linkedin: "https://www.linkedin.com/in/arif-b-3a5329271/",
  },
  {
    name: "Xuelong Fu",
    affiliation: "University of Cambridge",
    bio: "Xuelong is an MPhil candidate in Technology Policy at the Cambridge Judge Business School. Prior, he studied various subjects and holds three bachelor’s degrees in political science, business administration, and AI. He co-founded the Amsterdam Policy Hackathon and Data for Public Impact Network (DPIN), which aims to bring policy hackathons to cities around the world. Currently, he also works as Associate Editor for the MIT Science Policy Review and conducts research at the Oxford Computational Political Science Group.",
    image: "/team/xuelong.png",
    linkedin: "https://www.linkedin.com/in/xuelong-f-4203a3216/",
  },
];
