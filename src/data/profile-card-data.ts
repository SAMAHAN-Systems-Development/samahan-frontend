export interface samahanProfileCardType {
  image: {
    imageUrl: string;
    imageAlt: string;
  };
  name: string;
  role: string;
}

export const samahanProfileCard: samahanProfileCardType[] = [
  {
    image: {
      imageUrl: "/images/osv/hannah-aquino.png",
      imageAlt: "Hannah Aquino",
    },
    name: "HANNAH AQUINO",
    role: "SAMAHAN President",
  },
  {
    image: {
      imageUrl: "/images/osv/aleah-carungay.png",
      imageAlt: "Aleah Nisha Hyacinthe Carungay",
    },
    name: "ALEAH NISHA HYACINTHE CARUNGAY",
    role: "Chief-of-Staff",
  },
  {
    image: {
      imageUrl: "/images/osv/mark-lipasan.png",
      imageAlt: "Mark Loyd Lipasan",
    },
    name: "MARK LOYD LIPASAN",
    role: "Executive Secretary",
  },
  {
    image: {
      imageUrl: "/images/osv/ryzah-cabanting.png",
      imageAlt: "Ryzah Kate Cabanting",
    },
    name: "RYZAH KATE CABANTING",
    role: "Executive Undersecretary",
  },
  {
    image: {
      imageUrl: "/images/osv/rana-guerra.png",
      imageAlt: "Rana Nicole Guerra",
    },
    name: "RANA NICOLE GUERRA",
    role: "Executive Undersecretary",
  },
  //   {
  //     image: {
  //       imageUrl: "/images/osv/angeleiah-chu.png",
  //       imageAlt: "Angeleiah Allez Chu",
  //     },
  //     name: "ANGELEIAH ALLEZ CHU",
  //     role: "Executive Secretary",
  //   },
];
