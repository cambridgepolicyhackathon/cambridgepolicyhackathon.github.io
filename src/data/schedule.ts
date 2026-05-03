/**
 * Hackathon schedule: Thursday 14 May – Saturday 16 May.
 * Edit the items array for each day to describe what that day consists of.
 */
export interface ScheduleDay {
  id: string;
  label: string;
  date: string; // e.g. "15 May"
  items: string[];
}

export const SCHEDULE_DAYS: ScheduleDay[] = [
  {
    id: "thursday",
    label: "Thursday",
    date: "14 May",
    items: [
      "4:00pm - Walk in",
      "5:00pm - Kickoff",
      "6:30pm - Dinner and socializing",
      "8:00pm - Team formation",
      "Start Hacking",
    ],
  },
  {
    id: "friday",
    label: "Friday",
    date: "15 May",
    items: [
      "Workshops",
      "Lunch",
      "Case stakeholders Q&A",
    ],
  },
  {
    id: "saturday",
    label: "Saturday",
    date: "16 May",
    items: [
      "Final pitches and judging",
      "Awards ceremony",
      "Closing remarks",
      "Closing drinks"
    ],
  },
];
