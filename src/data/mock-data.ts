export interface AdvocasixItem {
  id: string;
  title: string;
  content: string;
  image: {
    imgSource: string;
    imageAlt: string;
  };
}

export const advocasixData: AdvocasixItem[] = [
  {
    id: "climate-action",
    title: "CLIMATE ACTION",
    content:
      "Guided by its principles as a Jesuit, Filipino, and Mindanaoan autonomous student government, the Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao set the goal of championing the identified AdvocaSIX for the incoming 6 years that started on 2022 and aims to cultivate until 2028. With that, SAMAHAN shall hereby champion the following advocacies for the term of 2024-2025:",
    image: {
      imgSource: "/images/placeholder.png",
      imageAlt: "Students participating in a tree planting drive",
    },
  },
  {
    id: "good-governance",
    title: "GOOD GOVERNANCE & TRANSPARENCY",
    content:
      "Accountable, data-informed student governance—open budgets, participatory consultations, and regular public reporting.",
    image: {
      imgSource: "/images/advocasix/governance.jpg",
      imageAlt: "Open forum and public consultation",
    },
  },
];
