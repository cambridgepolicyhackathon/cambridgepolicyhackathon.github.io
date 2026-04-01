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
      "4:30pm - Walk in",
      "5:00pm - Kickoff Presentations",
      "6:45pm - Dinner and Socializing",
      "8:30pm - Team Formation Deadline",
      "9:00pm - Start Hacking",
    ],
  },
  {
    id: "friday",
    label: "Friday",
    date: "15 May",
    items: [
      "10:00am - Optional Workshop 1",
      "11:00am - Optional Workshop 2",
      "12:00am - Lunch",
      "14:00pm - Case Stakeholders Q&A",
    ],
  },
  {
    id: "saturday",
    label: "Saturday",
    date: "16 May",
    items: [
      "TBA",
    ],
  },
];
