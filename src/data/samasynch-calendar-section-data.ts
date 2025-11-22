// samasynch-calendar-section-data.ts
import { CalendarEntryProps } from "@/components/ui/calendar-entry";

export interface MonthData {
  index: number; // JS month index (0-based)
  year: number;
  dateWithEvents: Date[];
  calendarEntry: CalendarEntryProps[];
}

export const ACADEMIC_YEAR_2025_2026: Record<string, MonthData> = {
  MAY: {
    index: 4, // May 2025
    year: 2025,
    dateWithEvents: [],
    calendarEntry: [],
  },

  JUNE: {
    index: 5, // June 2025
    year: 2025,
    dateWithEvents: [new Date(2025, 5, 1), new Date(2025, 5, 30)],
    calendarEntry: [
      {
        startDate: 1,
        eventName: "Pride Month Celebration",
      },
      {
        startDate: 30,
        eventName: "Pride Month Celebration",
      },
    ],
  },

  JULY: {
    index: 6, // July 2025
    year: 2025,
    dateWithEvents: [],
    calendarEntry: [],
  },

  AUGUST: {
    index: 7, // August 2025
    year: 2025,
    dateWithEvents: [],
    calendarEntry: [],
  },

  SEPTEMBER: {
    index: 8, // September 2025
    year: 2025,
    dateWithEvents: [],
    calendarEntry: [],
  },

  OCTOBER: {
    index: 9, // October 2025
    year: 2025,
    dateWithEvents: [],
    calendarEntry: [],
  },

  NOVEMBER: {
    index: 10, // November 2025
    year: 2025,
    dateWithEvents: [
      // Saints' Day
      new Date(2025, 10, 1),

      // PE Departmental Written Exam (Nov 3–8)
      new Date(2025, 10, 3),
      new Date(2025, 10, 4),
      new Date(2025, 10, 5),
      new Date(2025, 10, 6),
      new Date(2025, 10, 7),
      new Date(2025, 10, 8),

      // ABLAZE 4 (Nov 5–8)
      new Date(2025, 10, 5),
      new Date(2025, 10, 6),
      new Date(2025, 10, 7),
      new Date(2025, 10, 8),

      // Mass for Our Dear Departed
      new Date(2025, 10, 6),

      // Final Exams (Nov 10–15)
      new Date(2025, 10, 10),
      new Date(2025, 10, 11),
      new Date(2025, 10, 12),
      new Date(2025, 10, 13),
      new Date(2025, 10, 14),
      new Date(2025, 10, 15),

      // Start of Semestral Break
      new Date(2025, 10, 16),

      // National Drug Abuse Prevention and Control Week (Nov 17–22)
      new Date(2025, 10, 17),
      new Date(2025, 10, 18),
      new Date(2025, 10, 19),
      new Date(2025, 10, 20),
      new Date(2025, 10, 21),
      new Date(2025, 10, 22),
    ],
    calendarEntry: [
      {
        startDate: 1,
        eventName: "Saints' Day",
      },
      {
        startDate: 3,
        endDate: 8,
        eventName: "PE Departmental Written Exam",
      },
      {
        startDate: 5,
        endDate: 8,
        eventName: "ABLAZE 4 - For those Transitioning to Retirement",
      },
      {
        startDate: 6,
        eventName: "Mass for Our Dear Departed",
      },
      {
        startDate: 10,
        endDate: 15,
        eventName: "Final Exams",
      },
      {
        startDate: 16,
        eventName: "Start of Semestral Break",
      },
      {
        startDate: 17,
        endDate: 22,
        eventName: "National Drug Abuse Prevention and Control Week",
      },
    ],
  },

  DECEMBER: {
    index: 11, // December 2025
    year: 2025,
    dateWithEvents: [
      new Date(2025, 11, 1),
      new Date(2025, 11, 5),
      new Date(2025, 11, 6),
      new Date(2025, 11, 8),
    ],
    calendarEntry: [
      {
        startDate: 1,
        eventName: "World AIDS Day",
      },
      {
        startDate: 1,
        eventName: "12 Days of Giving Campaign",
      },
      {
        startDate: 5,
        eventName: "International Volunteer Day",
      },
      {
        startDate: 6,
        eventName: "Dugong Bighaw Bloodletting Day",
      },
      {
        startDate: 8,
        eventName:
          "Solemnity of the Immaculate Conception (Special Non-working Holiday)",
      },
    ],
  },

  JANUARY: {
    index: 0, // January 2026
    year: 2026,
    dateWithEvents: [],
    calendarEntry: [],
  },

  FEBRUARY: {
    index: 1, // February 2026
    year: 2026,
    dateWithEvents: [],
    calendarEntry: [],
  },

  MARCH: {
    index: 2, // March 2026
    year: 2026,
    dateWithEvents: [],
    calendarEntry: [],
  },

  APRIL: {
    index: 3, // April 2026
    year: 2026,
    dateWithEvents: [],
    calendarEntry: [],
  },
};
