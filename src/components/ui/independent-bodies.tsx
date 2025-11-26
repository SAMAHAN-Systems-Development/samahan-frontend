import { Card, CardHeader, CardContent } from "./card";
import { FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

interface IndependentBodiesProps {
  organizationName: string;
  facebookName: string;
  facebookLink: string;
  image: {
    imgSource: string;
    imgAlt: string;
  };
}

const IndependentBodies = ({
  organizationName,
  facebookName,
  facebookLink,
  image: { imgSource, imgAlt },
}: IndependentBodiesProps) => {
  return (
    <div className="flex h-max w-full flex-col items-center justify-center md:max-w-80 lg:max-w-100">
      <Link
        className="w-full"
        href={facebookLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="w-full gap-0 !border-0 shadow-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-20 overflow-hidden md:w-30 lg:w-40 xl:w-45">
                <Image
                  src={imgSource}
                  alt={imgAlt}
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center p-0">
            <h1 className="font-formular-black text-center text-xs text-mainblue md:text-base">
              {organizationName}
            </h1>
            <div className="mt-1 flex items-start justify-center gap-2 text-blue1">
              <FaFacebook className="size-4 md:size-5 flex-shrink-0" />
              <p className="font-formular-regular text-center text-xs md:text-sm">
                {facebookName}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default IndependentBodies;
