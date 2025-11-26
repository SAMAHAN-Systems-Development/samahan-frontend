import { Card, CardFooter, CardContent } from "./card";
import Image from "next/image";

interface ProfileCardProps {
  image: {
    imageUrl: string;
    imageAlt: string;
  };
  name: string;
  role: string;
}
const ProfileCard = ({ image, name, role }: ProfileCardProps) => {
  const { imageUrl, imageAlt } = image;

  return (
    <>
      <div className="flex flex-col items-center gap-4 ">
        {/* Wrapper for card + floating profile */}
        <div className="relative w-80 h-68 ">
          {/* Background card */}
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/images/profile-card-bg.png"
              alt="Profile Card Background"
              fill
              className="object-contain"
            />
          </div>

          {/* Main profile image (on top, not clipped) */}
          <div className="absolute -top-[3rem] left-1/2 -translate-x-1/2 w-72 h-80 z-10">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center text-center mt-1 w-full px-2">
            <h1 className="text-xl font-formular-bold uppercase text-mainblue leading-tight break-words">
              {name}
            </h1>

            <p className="text-sm text-mainblue mt-1">{role}</p>
          </div>
        </div>

        {/* Name + Role */}
      </div>
    </>
  );
};

export default ProfileCard;
