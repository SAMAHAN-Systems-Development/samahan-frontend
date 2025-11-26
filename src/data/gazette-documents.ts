export interface GazetteDocument {
  documentName: string;
  type: 'Act' | 'Memorandum' | 'Resolution';
  description?: string;
  office: string;
  actNumber?: number;
  year: number;
  date?: Date;
  href: string;
}

// 5th Student Assembly
export const gazetteDocuments: GazetteDocument[] = [
    // 5th Student Assembly - ACTS
    {
        documentName: "SAMAHAN ACT NO. 006-2526",
        type: "Act",
        description: "An Act Establishing The Samahan Students’ Needs And Services Department (SNSD)",
        office: "Office Of The Legislative Secretary",
        actNumber: 6,
        year: 2025,
        date: new Date("2025-08-11"),
        href: "/documents/gazette-documents/5th-student-assembly/bills/Samahan Act No. 006-2526.pdf"
    },
    {
        documentName: "SAMAHAN ACT NO. 007 OF 2025",
        type: "Act",
        description: "An Act Repealing The 2024 Student Assembly Code Of Legislative Procedures And Implementing The 2025 Student Assembly Code Of Internal Procedures",
        office: "Office Of The Legislative Secretary",
        actNumber: 7,
        year: 2025,
        date: new Date("2025-08-29"),
        href: "/documents/gazette-documents/5th-student-assembly/bills/Samahan Act No. 007-2526.pdf"
    },

    // 5th Student Assembly - RESOLUTIONS
    {
        documentName: "ASSEMBLY RESOLUTION NO. 001-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Mx. Le-Ann Larombe As The Associate Justice From The School Of Nursing In The Samahan Student Court",
        office: "Office Of The Legislative Secretary",
        actNumber: 1,
        year: 2025,
        date: new Date("2025-08-09"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 001-2526 - Nursing Associate Justice Confirmation.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 002-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Ms. Lorrhaine Mae Baintin As The Commission On Student Rights And Welfare Head Commissioner Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 2,
        year: 2025,
        date: new Date("2025-08-29"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 002-2526 - StRAW Head Commissioner Appointment.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 003-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Mr. Christian Dave Fernandez As The Ateneo De Davao University Commission On Audit Head Commissioner",
        office: "Office Of The Legislative Secretary",
        actNumber: 3,
        year: 2025,
        date: new Date("2025-08-29"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 003-2526 - COA Head Commissioner Appointment.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 004-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Ms. Hyacinth Louise Duldulao As The Director Of The Department Of Academic Affairs Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 4,
        year: 2025,
        date: new Date("2025-09-05"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 004-2526 _ Confirming the appointment of Department of Academic Affairs Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 005-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Ms. Arabella Grace Mejorada As The Director Of The Department Of Systems Development Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 5,
        year: 2025,
        date: new Date("2025-09-05"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 005-2526 _ Confirming the appointment of Department of Systems Development Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 006-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Mr. Justin T. Felicia As The Department Director Of The Department Of External Affairs Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 6,
        year: 2025,
        date: new Date("2025-09-05"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 006-2526 _ Confirming the appointment of Department of External Affairs Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 007-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Ms. Neomie Joanne B. Jereza As The Department Director Of The Department Of Disaster Risk Reduction And Management Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 7,
        year: 2025,
        date: new Date("2025-09-05"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 007-2526 _ Confirming the appointment of Department of Disaster Risk Reduction and Management Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 008-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Mr. Ivan Zander M. Labra As The Samahan Creative Team Director Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 8,
        year: 2025,
        date: new Date("2025-09-05"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 008-2526 _ Confirming the appointment of SAMAHAN Creative Team Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 009-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Ms. Ces Ruelene N. Arcala As The Department Director Of Campaigns And Advocacies",
        office: "Office Of The Legislative Secretary",
        actNumber: 9,
        year: 2025,
        date: new Date("2025-09-05"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 009-2526 - Department Head of Campaigns and Advocacies Appointment.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 010-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Ms. Ma. Angelica Z. Rosal As The Department Director Of Ateneo Samahan Productions",
        office: "Office Of The Legislative Secretary",
        actNumber: 10,
        year: 2025,
        date: new Date("2025-09-05"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 010-2526 - Department Head of Ateneo Samahan Productions.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 011-2526",
        type: "Resolution",
        description: "A Resolution Urging The Food Court And Commercial Spaces Offices Of Ateneo De Davao University To Mandate Food Stalls In The Food Court To Display Pork Identification Signages For All Food Items That Contain Pork",
        office: "Office Of The Legislative Secretary",
        actNumber: 11,
        year: 2025,
        date: new Date("2025-10-31"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 011-2526.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 012-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Mx. Lyla Alexys Dabon As The Director Of The Department Of Sponsorships And Support Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 12,
        year: 2025,
        date: new Date("2025-09-19"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 012-2526 _ Confirming the Appointment of SAS Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 013-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Mx. Tomas J. Nazareno As The Director Of The Logistics Department Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 13,
        year: 2025,
        date: new Date("2025-09-19"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 013-2526 _ Confirming the Appointment of SLD Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 014-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Mr. Henry Benedict E. Velez As The Department Director Of Samahan Communications (SAMACOMMS) Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 14,
        year: 2025,
        date: new Date("2025-09-19"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 014-2526 _ Confirming the Appointment of SAMACOMMS Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 016-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Mr. Luis Miguel L. Torres As The Samahan Political Affairs And Engagements Department Director Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 16,
        year: 2025,
        date: new Date("2025-09-19"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 016-2526 _ Confirming the Appointment of SPAED Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 017-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Mr. Ron Edward Dulhao As The Director Of The Research And Development Department Of The Samahan Ng Mga Mag-Aaral Ng Pamantasang Ateneo De Davao",
        office: "Office Of The Legislative Secretary",
        actNumber: 17,
        year: 2025,
        date: new Date("2025-09-19"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 017-2526 _ Confirming the Appointment of R&D Director.pdf"
    },
    {
        documentName: "ASSEMBLY RESOLUTION NO. 018-2526",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Ms. Johanna C. Fuentesfina As The Associate Justice From The Accountancy Cluster In The Samahan Student Court",
        office: "Office Of The Legislative Secretary",
        actNumber: 18,
        year: 2025,
        date: new Date("2025-09-19"),
        href: "/documents/gazette-documents/5th-student-assembly/resolutions/Assembly Resolution No. 018-2526 _ Confirming the appointment of Accountancy Associate Justice.pdf"
    },

    //4th Student Assembly - ACTS
    {
        documentName: "SAMAHAN ACT NO. 001-2425",
        type: "Act",
        description: "An Act Establishing The Samahan Political Affairs And Engagements Department (SPAED)",
        office: "Office Of The Legislative Secretary",
        actNumber: 1,
        year: 2024,
        date: undefined, // No date provided
        href: "/documents/gazette-documents/4th-student-assembly/bills/SAMAHAN Act No. 001-2425.pdf"
    },
    {
        documentName: "SAMAHAN ACT NO. 002-2425",
        type: "Act",
        description: "An Act Repealing The 2023 Student Assembly Code Of Legislative Procedures And Implementing The 2024 Student Assembly Code Of Internal Procedures",
        office: "Office Of The Legislative Secretary",
        actNumber: 2,
        year: 2024,
        date: undefined,// No Date Provided
        href: "/documents/gazette-documents/4th-student-assembly/bills/SAMAHAN Act No. 002-2425.pdf"
    },
    {
        documentName: "SAMAHAN ACT NO. 003-2425",
        type: "Act",
        description: "An Act Requiring The Officers Of The Samahan To Conduct A Formal Transition Of Leadership To The Incoming Set Of Officers And Providing Guidelines Therefor",
        office: "Office Of The Legislative Secretary",
        actNumber: 3,
        year: 2024,
        date: undefined, // No date provided
        href: "/documents/gazette-documents/4th-student-assembly/bills/SAMAHAN Act No. 003-2425.pdf"
    },
    {
        documentName: "SAMAHAN ACT NO. 004-2425",
        type: "Act",
        description: "An Act Institutionalizing The Integration Of Mindanao Perspectives And Identity To Student Activities And Engagements",
        office: "Office Of The Legislative Secretary",
        actNumber: 4,
        year: 2024,
        date:undefined,// No date provided
        href: "/documents/gazette-documents/4th-student-assembly/bills/SAMAHAN Act No. 004-2425.pdf"
    },
    {
        documentName: "SAMAHAN ACT NO. 005-2425",
        type: "Act",
        description: "An Act Establishing A Yearly Forum For Student Representatives From Various Cultural And Identity Groups To Engage In Dialogue, Address Concerns, And Formulate Policy Recommendations To Enhance Diversity, Inclusion, And Cultural Affairs Initiatives Throughout The University",
        office: "Office Of The Legislative Secretary",
        actNumber: 5,
        year: 2024,
        date: undefined, // No date provided
        href: "/documents/gazette-documents/4th-student-assembly/bills/SAMAHAN Act No. 005-2425.docx.pdf"
    },

    //4th Student Assembly - RESOLUTIONS
    {
        documentName: "RESOLUTION NO. 001-2425",
        type: "Resolution",
        description: "A Resolution Creating An Ad Hoc Committee To Convene The Members Of The Samahan Student Court",
        office: "Office Of The Legislative Secretary",
        actNumber: 1,
        year: 2024,
        date: new Date("2024-09-11"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 001-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 002-2425",
        type: "Resolution",
        description: "A Resolution To Adopt The Magna Carta Of The Rights And Responsibilities Of The Undergraduate Students Of The Ateneo De Davao University And To Endorse It To The Office Of Student Affairs",
        office: "Office Of The Legislative Secretary",
        actNumber: 2,
        year: 2024,
        date: new Date("2024-09-11"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 002-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 016-2425",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Jan A.G. Adrian Lariego As The Head Commissioner Of Commission On Audit",
        office: "Office Of The Legislative Secretary",
        actNumber: 16,
        year: 2024,
        date: new Date("2024-10-05"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 016-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 017-2425",
        type: "Resolution",
        description: "A Resolution Endorsing The Cluster Participation Incentive Mechanism For Students In The Natural Sciences And Mathematics Cluster",
        office: "Office Of The Legislative Secretary",
        actNumber: 17,
        year: 2024,
        date: new Date("2024-10-05"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 017-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 018-2425",
        type: "Resolution",
        description: "A Resolution Urging The Ateneo De Davao University Committee On Anti-Sexual Harassment That In Combating Sexual Harassment- To Strengthen Reporting Mechanisms And Support Systems For Ateneo De Davao University Students",
        office: "Office Of The Legislative Secretary",
        actNumber: 18,
        year: 2024,
        date: new Date("2024-10-05"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 018-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 019-2425",
        type: "Resolution",
        description: "A Resolution Urging The Student Executive Councils (SECs) Of The Ateneo De Davao University To Strengthen Their Student Judicial Court Application Campaign And Modifying Applicant Qualifications",
        office: "Office Of The Legislative Secretary",
        actNumber: 19,
        year: 2024,
        date: new Date("2024-10-16"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 019-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 020-2425",
        type: "Resolution",
        description: "A Resolution Urging The Physical Plant Technical Office (PPO) To Install Vending Machines For Menstrual Hygiene Products At Ateneo De Davao University",
        office: "Office Of The Legislative Secretary",
        actNumber: 20,
        year: 2024,
        date: new Date("2024-11-13"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 020-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 021-2425",
        type: "Resolution",
        description: "A Resolution Urging The Ateneo De Davao University Administration To Institutionalize Annual Ramadan Practices And Integrate Them Into The Calendar Of Activities Of The Ateneo De Davao University",
        office: "Office Of The Legislative Secretary",
        actNumber: 21,
        year: 2024,
        date: new Date("2024-11-24"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 021-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 022-2425",
        type: "Resolution",
        description: "A Resolution Urging The Samahan Central Board To Commence The Development Of The Samahan Local Government Code",
        office: "Office Of The Legislative Secretary",
        actNumber: 22,
        year: 2024,
        date: new Date("2025-02-11"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 022-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 023-2425",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Adriel Lubuguin As The Accountancy Cluster Justice Of The Samahan Student Court",
        office: "Office Of The Legislative Secretary",
        actNumber: 23,
        year: 2024,
        date: new Date("2025-02-11"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 023-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 024-2425",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Precious Mae Jardenil As The Business And Management Cluster Justice Of The Samahan Student Court",
        office: "Office Of The Legislative Secretary",
        actNumber: 24,
        year: 2024,
        date: new Date("2025-02-11"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 024-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 025-2425",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Monique Lois Ambray As The Natural Sciences And Mathematics Cluster Justice Of The Samahan Student Court",
        office: "Office Of The Legislative Secretary",
        actNumber: 25,
        year: 2024,
        date: new Date("2025-02-11"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 025-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 026-2425",
        type: "Resolution",
        description: "A Resolution Confirming The Appointment Of Ivan Gel Tizon As The Social Sciences Cluster Justice Of The Samahan Student Court",
        office: "Office Of The Legislative Secretary",
        actNumber: 26,
        year: 2024,
        date: new Date("2025-02-11"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 026-2425.pdf"
    },
    {
        documentName: "RESOLUTION NO. 027-2425",
        type: "Resolution",
        description: "A Resolution Urging The Samahan Commission On Student’s Rights, & Welfare (StRAW) To Strengthen Existing Qualifications On Forms Of Sexual Harassment, And For The University To Provide Case, Emotional, And Protective Assistance",
        office: "Office Of The Legislative Secretary",
        actNumber: 27,
        year: 2024,
        date: new Date("2025-05-06"),
        href: "/documents/gazette-documents/4th-student-assembly/resolutions/Resolution No. 027-2425.pdf"
    },
];
