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
    w-[45vw]          
    aspect-[5/7]

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
        className="object-bottom object-cover pointer-events-none" 
        draggable={false}
      />
    </div>
  );
};

export default ProfileCard;