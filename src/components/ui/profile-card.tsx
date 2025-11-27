import { Card, CardFooter, CardContent } from "./card";
import Image from "next/image";

interface ProfileCardProps {
  image: {
    imageUrl: string;
    imageAlt: string;
  };
}
const ProfileCard = ({ image }: ProfileCardProps) => {
  const { imageUrl, imageAlt } = image;

  return (
    <div
      className="
    relative
    w-[60vw]          
    aspect-[3/4]     

    sm:w-64     
    md:w-72         
    lg:w-80         
  "
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        quality={100}
        className="object-contain"
      />
    </div>
  );
};

export default ProfileCard;
