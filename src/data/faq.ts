export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "When and where is the hackathon?",
    answer:
      "The Cambridge Policy Hackathon takes place over a weekend in Cambridge. Exact dates and venue will be announced soon.",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone with an interest in policy, technology, or social impact is welcome. We encourage diverse teams mixing policymakers, researchers, developers, and designers.",
  },
  {
    question: "Do I need a team before applying?",
    answer:
      "You can apply as an individual or with a team. We will also run team-forming sessions before the event for those who want to find teammates.",
  },
  {
    question: "What should I bring?",
    answer:
      "A laptop, curiosity, and a willingness to collaborate. We provide wifi, meals, and a supportive environment.",
  },
];
