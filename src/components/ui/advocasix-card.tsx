import { Card } from "@/components/ui/card";
import Image from "next/image";

interface AdvocasixCardProp {
  cardTitle: string;
  image: {
    imgSource: string;
    imgAlt: string;
  };
}

const AdvocasixCard = ({
  cardTitle,
  image: { imgSource, imgAlt },
}: AdvocasixCardProp) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 transition-transform hover:scale-102 xs:w-30 md:w-50 md:gap-4 lg:w-60 xl:w-80">
      <Card className="relative aspect-4/3 w-full overflow-hidden rounded-xl border-2 border-mainblue">
        <Image src={imgSource} alt={imgAlt} fill className="object-cover" />
      </Card>
      <h1 className="font-formular-black text-center text-[.625rem] text-mainblue uppercase md:text-base xl:text-lg">
        {cardTitle}
      </h1>
    </div>
  );
};

export default AdvocasixCard;
