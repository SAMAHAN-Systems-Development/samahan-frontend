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
    dateWithEvents: [],
    calendarEntry: [],
  },

  JULY: {
    index: 6, // July 2025
    year: 2025,
    dateWithEvents: [
      new Date(2025, 6, 2),
      new Date(2025, 6, 3),
      new Date(2025, 6, 4),
      new Date(2025, 6, 5),
      new Date(2025, 6, 10),
      new Date(2025, 6, 11),
      new Date(2025, 6, 13),
      new Date(2025, 6, 14),
      new Date(2025, 6, 15),
      new Date(2025, 6, 19),
      new Date(2025, 6, 21),
      new Date(2025, 6, 22),
      new Date(2025, 6, 23),
      new Date(2025, 6, 24),
      new Date(2025, 6, 25),
      new Date(2025, 6, 26),
      new Date(2025, 6, 30),
    ],
    calendarEntry: [
      {
        startDate: 2,
        endDate: 5,
        eventName: "Unyon Mindanao Federation Year Culmination Summit",
      },
      {
        startDate: 10,
        endDate: 11,
        eventName: "Ang Panukala: Student Assembly Capacity Building <span style=\"font-family: Arial, sans-serif;\">[</span>OSVP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 13,
        endDate: 15,
        eventName: "SAMAHAN Branding Release",
      },
      {
        startDate: 14,
        eventName: "Matriculation Ceremony",
      },
      {
        startDate: 14,
        eventName:
          "SAMAHAN Department of External Affairs Officers' Onboarding <span style=\"font-family: Arial, sans-serif;\">[</span>DEA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 19,
        eventName: "CUARTA 2025: Treasurers' Guide",
      },
      {
        startDate: 19,
        eventName: "Rise4Education State of the Youth Address <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 21,
        endDate: 23,
        eventName: "Magis Gala 2025",
      },
      {
        startDate: 21,
        endDate: 23,
        eventName: "First Week of Excellence Atenean Help Desk <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 21,
        endDate: 26,
        eventName: "SAMAHAN Recruitment Week",
      },
      {
        startDate: 26,
        eventName: "Adopt-A-Riverbank Program Ocular Visitation <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 30,
        eventName: "1st Semestral Budget Hearing",
      },
    ],
  },

  AUGUST: {
    index: 7, // August 2025
    year: 2025,
    dateWithEvents: [
      new Date(2025, 7, 1),
      new Date(2025, 7, 4),
      new Date(2025, 7, 6),
      new Date(2025, 7, 7),
      new Date(2025, 7, 8),
      new Date(2025, 7, 9),
      new Date(2025, 7, 10),
      new Date(2025, 7, 11),
      new Date(2025, 7, 12),
      new Date(2025, 7, 13),
      new Date(2025, 7, 14),
      new Date(2025, 7, 16),
      new Date(2025, 7, 18),
      new Date(2025, 7, 24),
      new Date(2025, 7, 25),
      new Date(2025, 7, 26),
      new Date(2025, 7, 27),
      new Date(2025, 7, 28),
      new Date(2025, 7, 29),
      new Date(2025, 7, 30),
    ],
    calendarEntry: [
      {
        startDate: 1,
        eventName:
          "Sparrow: Sponsorship Protocol & Regulation Workshop <span style=\"font-family: Arial, sans-serif;\">[</span>SAS<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 4,
        eventName: "SAMAHAN Upskill <span style=\"font-family: Arial, sans-serif;\">[</span>OSG<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 4,
        eventName: "NSM General Assembly <span style=\"font-family: Arial, sans-serif;\">[</span>NSM<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 6,
        eventName: "SAMAHAN SysDev General Assembly <span style=\"font-family: Arial, sans-serif;\">[</span>SYSDEV<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 6,
        eventName: "SAMAHAN Ecoteneo Student Unit General Assembly <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 6,
        endDate: 14,
        eventName:
          "ATENEO ALL-ACCESS: The Resource Vault Survey Release <span style=\"font-family: Arial, sans-serif;\">[</span>OST<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 8,
        eventName:
          "SAMAHAN Department of Academic Affairs General Assembly & Capacity Building <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 8,
        eventName: "ASP Host Pool Workshop <span style=\"font-family: Arial, sans-serif;\">[</span>ASP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 9,
        eventName: "School of Education General Assembly <span style=\"font-family: Arial, sans-serif;\">[</span>SOE<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 9,
        eventName:
          "School of Engineering & Architecture General Assembly <span style=\"font-family: Arial, sans-serif;\">[</span>SOEA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 11,
        eventName: "Business & Management General Assembly <span style=\"font-family: Arial, sans-serif;\">[</span>B&M<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 13,
        eventName: "DAA Prelim Tutorials <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 14,
        eventName: "University Fiesta: Jam-in-Faith",
      },
      {
        startDate: 16,
        eventName: "Adopt-A-Riverbank Program 1st Visitation<span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 18,
        eventName:
          "SAMAComms General Assembly and Training and Development <span style=\"font-family: Arial, sans-serif;\">[</span>SAMACOMMSS<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 25,
        eventName: "SAMAComms Branding Release <span style=\"font-family: Arial, sans-serif;\">[</span>SAMACOMMSS<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 27,
        eventName: "Social Sciences General Assembly <span style=\"font-family: Arial, sans-serif;\">[</span>SS<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 28,
        endDate: 29,
        eventName: "The Ateneo Caravan: Adulting On The Move <span style=\"font-family: Arial, sans-serif;\">[</span>OSP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 29,
        eventName: "Humanities & Letters General Assembly <span style=\"font-family: Arial, sans-serif;\">[</span>HUMLET<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 29,
        eventName: "Knights At The Roundtable 4 <span style=\"font-family: Arial, sans-serif;\">[</span>SPAED<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 30,
        eventName: "School of Nursing General Assembly <span style=\"font-family: Arial, sans-serif;\">[</span>SON<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 30,
        eventName: "ASP Host Pool Workshop",
      },
      {
        startDate: 26,
        endDate: 30,
        eventName: "ALL_ACCESS Resource Vault & Free Ink Services <span style=\"font-family: Arial, sans-serif;\">[</span>OST<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 26,
        endDate: 30,
        eventName:
          "Leadership Training for the Youth (in Partnership with LGU Sta. Maria, Davao Occidental in celebration of Linggo ng Kabataan 2025)",
      },
    ],
  },

  SEPTEMBER: {
    index: 8, // September 2025
    year: 2025,
    dateWithEvents: [
      new Date(2025, 8, 1),
      new Date(2025, 8, 2),
      new Date(2025, 8, 3),
      new Date(2025, 8, 3),
      new Date(2025, 8, 6),
      new Date(2025, 8, 12),
      new Date(2025, 8, 15),
      new Date(2025, 8, 19),
      new Date(2025, 8, 19),
      new Date(2025, 8, 19),
      new Date(2025, 8, 20),
      new Date(2025, 8, 21),
      new Date(2025, 8, 22),
      new Date(2025, 8, 23),
      new Date(2025, 8, 24),
      new Date(2025, 8, 25),
      new Date(2025, 8, 26),
      new Date(2025, 8, 27),
    ],
    calendarEntry: [
      {
        startDate: 1,
        endDate: 3,
        eventName:
          "Build Forward: A SysDev Learning Series (Part 1) <span style=\"font-family: Arial, sans-serif;\">[</span>SYSDEV<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 3,
        eventName: "Ready, Set, Future! X DAA-logue <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 6,
        eventName:
          "Waste Management Committee: MiRCA Partnership Field <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 12,
        eventName: "Palarong Atenista '25",
      },
      {
        startDate: 15,
        eventName: "DEA KITutubo: Educational Kits for Atenean IPs <span style=\"font-family: Arial, sans-serif;\">[</span>DEA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 19,
        eventName: "Launching of Multi-Sectoral Council <span style=\"font-family: Arial, sans-serif;\">[</span>OSVP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 19,
        eventName: "DAA Midterms Tutorial <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 19,
        eventName: "Periodt: A Menstrual Kit Project Launch <span style=\"font-family: Arial, sans-serif;\">[</span>OSP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 20,
        eventName: "Adopt-A-Riverbank Program 2nd Visitation <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 27,
        eventName:
          "Marine and Watershed Conservation Committee: Sea You There <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 21,
        endDate: 26,
        eventName: "Ang Ating Panata Movement: Beyond the Ballot <span style=\"font-family: Arial, sans-serif;\">[</span>OSP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
    ],
  },

  OCTOBER: {
    index: 9, // October 2025
    year: 2025,
    dateWithEvents: [
      new Date(2025, 9, 1),
      new Date(2025, 9, 6),
      new Date(2025, 9, 7),
      new Date(2025, 9, 8),
      new Date(2025, 9, 9),
      new Date(2025, 9, 10),
      new Date(2025, 9, 11),
      new Date(2025, 9, 15),
      new Date(2025, 9, 18),
      new Date(2025, 9, 22),
      new Date(2025, 9, 26),
      new Date(2025, 9, 29),
    ],
    calendarEntry: [
      {
        startDate: 1,
        eventName: "DEA Midterms Fuel: Gamot Para sa Abalang Atenean <span style=\"font-family: Arial, sans-serif;\">[</span>DEA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 6,
        endDate: 11,
        eventName: "Mental Health Week Celebration",
      },
      {
        startDate: 6,
        endDate: 8,
        eventName:
          "Build Forward: A SysDev Learning Series (Part 2) <span style=\"font-family: Arial, sans-serif;\">[</span>SYSDEV<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 9,
        endDate: 11,
        eventName: "UFest: College Days",
      },
      {
        startDate: 15,
        eventName: "Multi-sectoral Dialogue <span style=\"font-family: Arial, sans-serif;\">[</span>OSVP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 18,
        eventName: "Adopt-A-Riverbank Program 3rd Visitation <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 18,
        eventName: "PasaPayong: Rent an Umbrella Project Launch <span style=\"font-family: Arial, sans-serif;\">[</span>OSP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 22,
        eventName: "RE:Start - Ateneo Research Workshop <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 22,
        eventName: "Bring Your Own Challenge <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 22,
        eventName: "SAMAHAN Townhall / State of the SAMAHAN Address",
      },
      {
        startDate: 26,
        eventName: "SAMAHAN Ecoteneo Student Unit Anniversary <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 29,
        eventName: "DAA Pre-Finals Tutorials <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 29,
        eventName: "Ang Ating Panata Movement: Beyond the Ballot <span style=\"font-family: Arial, sans-serif;\">[</span>OSP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
    ],
  },

  NOVEMBER: {
    index: 10, // November 2025
    year: 2025,
    dateWithEvents: [
      new Date(2025, 10, 26),
      new Date(2025, 10, 27),
      new Date(2025, 10, 28),
      new Date(2025, 10, 29),
      new Date(2025, 10, 30),
    ],
    calendarEntry: [
      {
        startDate: 26,
        endDate: 30,
        eventName: "Mindanao Week of Peace",
      },
      {
        startDate: 26,
        endDate: 30,
        eventName: "Ang Ating Plansta Movement: Beyond the Ballot <span style=\"font-family: Arial, sans-serif;\">[</span>OSP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
    ],
  },

  DECEMBER: {
    index: 11, // December 2025
    year: 2025,
    dateWithEvents: [
      new Date(2025, 11, 6),
      new Date(2025, 11, 9),
      new Date(2025, 11, 9),
      new Date(2025, 11, 10),
      new Date(2025, 11, 11),
      new Date(2025, 11, 12),
      new Date(2025, 11, 12),
      new Date(2025, 11, 13),
    ],
    calendarEntry: [
      {
        startDate: 6,
        eventName: "B&M: Himaya Pinning Ceremony <span style=\"font-family: Arial, sans-serif;\">[</span>B&M<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 9,
        eventName: "World AIDS Day <span style=\"font-family: Arial, sans-serif;\">[</span>DCA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 9,
        endDate: 12,
        eventName:
          "Jumpstart x Mindanao Peace Celebration x AdDUvocacy <span style=\"font-family: Arial, sans-serif;\">[</span>OST<span style=\"font-family: Arial, sans-serif;\">]</span> <span style=\"font-family: Arial, sans-serif;\">[</span>OSP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 12,
        eventName: "Political Semestral Dialogue <span style=\"font-family: Arial, sans-serif;\">[</span>SPAED<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 13,
        eventName: "PASIGA: University Christmas Celebration",
      },
    ],
  },

  JANUARY: {
    index: 0, // January 2026
    year: 2026,
    dateWithEvents: [
      new Date(2026, 0, 5),
      new Date(2026, 0, 6),
      new Date(2026, 0, 7),
      new Date(2026, 0, 8),
      new Date(2026, 0, 9),
      new Date(2026, 0, 9),
      new Date(2026, 0, 12),
      new Date(2026, 0, 13),
      new Date(2026, 0, 14),
      new Date(2026, 0, 14),
      new Date(2026, 0, 15),
      new Date(2026, 0, 16),
      new Date(2026, 0, 17),
      new Date(2026, 0, 18),
      new Date(2026, 0, 19),
      new Date(2026, 0, 20),
      new Date(2026, 0, 21),
      new Date(2026, 0, 19),
      new Date(2026, 0, 23),
      new Date(2026, 0, 24),
    ],
    calendarEntry: [
      {
        startDate: 5,
        endDate: 9,
        eventName: "HUMLET Week <span style=\"font-family: Arial, sans-serif;\">[</span>HUMLET<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 9,
        eventName: "EduBox: Educational Resources Project Launch <span style=\"font-family: Arial, sans-serif;\">[</span>OSP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 12,
        endDate: 14,
        eventName: "Skills Cabin 2.0 <span style=\"font-family: Arial, sans-serif;\">[</span>OSG<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 14,
        eventName: "DAA Prelims Tutorials <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 14,
        endDate: 21,
        eventName: "NSM Week <span style=\"font-family: Arial, sans-serif;\">[</span>NSM<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 19,
        eventName: "Bus Services Project Launch <span style=\"font-family: Arial, sans-serif;\">[</span>OSP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 23,
        endDate: 24,
        eventName: "The Ateneo Parliament Year 3 <span style=\"font-family: Arial, sans-serif;\">[</span>OSVP<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 24,
        eventName: "Adopt-A-Riverbank Program 4th Visitation <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
    ],
  },

  FEBRUARY: {
    index: 1, // February 2026
    year: 2026,
    dateWithEvents: [
      new Date(2026, 1, 2),
      new Date(2026, 1, 3),
      new Date(2026, 1, 4),
      new Date(2026, 1, 5),
      new Date(2026, 1, 6),
      new Date(2026, 1, 7),
      new Date(2026, 1, 9),
      new Date(2026, 1, 13),
      new Date(2026, 1, 14),
      new Date(2026, 1, 20),
      new Date(2026, 1, 21),
      new Date(2026, 1, 27),
    ],
    calendarEntry: [
      {
        startDate: 2,
        endDate: 7,
        eventName: "Computer Studies IT Week <span style=\"font-family: Arial, sans-serif;\">[</span>CS<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 7,
        eventName: "SON Day <span style=\"font-family: Arial, sans-serif;\">[</span>SON<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 9,
        endDate: 13,
        eventName: "Eco-Booths / Sari Sa-Restore <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 14,
        eventName: "Adopt-A-Riverbank Program 5th Visitation <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 20,
        endDate: 21,
        eventName: "University Fair",
      },
      {
        startDate: 27,
        eventName: "DAA Midterms Tutorials <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
    ],
  },

  MARCH: {
    index: 2, // March 2026
    year: 2026,
    dateWithEvents: [
      new Date(2026, 2, 6),
      new Date(2026, 2, 7),
      new Date(2026, 2, 8),
      new Date(2026, 2, 9),
      new Date(2026, 2, 10),
      new Date(2026, 2, 16),
      new Date(2026, 2, 17),
      new Date(2026, 2, 18),
      new Date(2026, 2, 19),
      new Date(2026, 2, 20),
      new Date(2026, 2, 21),
      new Date(2026, 2, 22),
      new Date(2026, 2, 21),
      new Date(2026, 2, 25),
      new Date(2026, 2, 23),
      new Date(2026, 2, 24),
      new Date(2026, 2, 25),
      new Date(2026, 2, 26),
      new Date(2026, 2, 27),
      new Date(2026, 2, 28),
    ],
    calendarEntry: [
      {
        startDate: 6,
        endDate: 10,
        eventName: "DAA Skills Festival X Ready, Set Future! Series 1 <span style=\"font-family: Arial, sans-serif;\">[</span>DEA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 16,
        endDate: 20,
        eventName: "SOE Week <span style=\"font-family: Arial, sans-serif;\">[</span>SOE<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 20,
        endDate: 22,
        eventName: "Eco-Movement 2026",
      },
      {
        startDate: 21,
        eventName: "Adopt-A-Riverbank Program 6th Visitation <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 25,
        eventName: "DEA Abot-Kamay: Uniform Drive for Muslim Students <span style=\"font-family: Arial, sans-serif;\">[</span>DEA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 23,
        endDate: 28,
        eventName: "Festival of Excellence x Experience Ateneo",
      },
    ],
  },

  APRIL: {
    index: 3, // April 2026
    year: 2026,
    dateWithEvents: [
      new Date(2026, 3, 10),
      new Date(2026, 3, 11),
      new Date(2026, 3, 13),
      new Date(2026, 3, 20),
      new Date(2026, 3, 23),
      new Date(2026, 3, 24),
      new Date(2026, 3, 25),
      new Date(2026, 3, 26),
      new Date(2026, 3, 27),
      new Date(2026, 3, 28),
      new Date(2026, 3, 29),
    ],
    calendarEntry: [
      {
        startDate: 10,
        eventName: "DAA Pre-Finals Tutorials <span style=\"font-family: Arial, sans-serif;\">[</span>DAA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 11,
        eventName: "Adopt-A-Riverbank Program 7th Visitation <span style=\"font-family: Arial, sans-serif;\">[</span>ESU<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 13,
        eventName: "SAMAHAN NewsFeed <span style=\"font-family: Arial, sans-serif;\">[</span>SAMACOMMSS<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 20,
        eventName: "DEA Hunger-Free Zone: Snack Support for Exams <span style=\"font-family: Arial, sans-serif;\">[</span>DEA<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 23,
        endDate: 28,
        eventName: "SS Week <span style=\"font-family: Arial, sans-serif;\">[</span>SS<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
      {
        startDate: 29,
        eventName: "Loyola Awards 2026",
      },
      {
        startDate: 29,
        eventName: "Political Semestral Dialogue <span style=\"font-family: Arial, sans-serif;\">[</span>SPAED<span style=\"font-family: Arial, sans-serif;\">]</span>",
      },
    ],
  },
};