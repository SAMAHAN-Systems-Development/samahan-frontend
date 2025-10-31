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
    <div className="flex items-center justify-center flex-col hover:scale-102 transition-transform">
      <Card className="relative w-82 h-54 overflow-hidden rounded-xl border-2 border-mainblue">
        <Image src={imgSource} alt={imgAlt} fill className="object-cover" />
      </Card>
      <h1 className="text-center text-mainblue pt-5 font-formular-black text-3xl uppercase">
        {cardTitle}
      </h1>
    </div>
  );
};

export default AdvocasixCard;
