export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "When and where is the hackathon?",
    answer:
      "The Cambridge Policy Hackathon (CPH) takes place from 15 to 17 May in Cambridge, UK. Details will be announced closer to the event.",
  },
  {
    question: "Who can participate?",
    answer:
      "We welcome anyone with a strong interest in interdisciplinary and evidence-based policymaking. Technical skills (e.g., programming) are not strictly required. While we generally target university students and young professionals, anyone can register as participant. Students from various study backgrounds are welcome to participate.",
  },
  {
    question: "What is a 'policy hackathon'?",
    answer:
      "A policy hackathon takes on the format of a traditional hackathon, but with a broader and socially-oriented focus on creating policy rather than only technical applications or code solutions. Therefore, while we welcome designs or demos of technical solutions that could enhance policymaking, they are not mandatory. The emphasis of the event is on crafting innovative, evidence-based, and impactful policy proposals, in many cases also enhanced by rigorous data analysis.",
  },
  {
    question: "What will participants work on?",
    answer:
      "Teams select one of the five policy themes they would want work on. Each policy theme has a specific challenge case provided by a policy stakeholder and organizations that work on pressing societal issues. Throughout the weekend, teams will develop evidence-based policy proposals to tackle the case within their policy theme.",
  },
  {
    question: "What are the deliverables at the end of the hackathon?",
    answer:
      "Teams are expected to write an actionable policy proposal, while also presenting their work to the audience and judge panel in a concise, 3-minute pitch at the end of the hackathon. Some cases may ask teams to create a tool or application.",
  },
  {
    question: "How will the winners be selected?",
    answer:
      "A diverse judge panel will read the policy briefs and listen to the final pitches. The winners are selected based the judges' rating and guidance of an evaluation rubric.",
  },
  {
    question: "Is the event in-person?",
    answer:
      "Yes, the HPH is an in-person event and we do not offer any online attendance options.",
  },
  {
    question: "What are the costs for attending the hackathon?",
    answer:
      "Participation in the hackathon is free of charge. However, participants are responsible for covering their own travel and accommodation expenses.",
  },
];
