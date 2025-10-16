import { Card, CardHeader, CardContent } from "./card";
import { FaFacebook } from "react-icons/fa6";
import Image from "next/image";

interface IndependentBodiesProps {
  organizationName: string;
  organizationDescription: string;
  facebookLink: string;
  image: {
    imgSource: string;
    imgAlt: string;
  };
}

const IndependentBodies = ({
  organizationName,
  organizationDescription,
  facebookLink,
  image: { imgSource, imgAlt },
}: IndependentBodiesProps) => {
  return (
    <div className="w-[24rem] h-[15rem] flex justify-center items-center flex-col">
      <Card className="!border-0 shadow-none">
        <CardHeader>
          <div className="flex items-center justify-center">
            <div className="relative bg-amber-500 rounded-full w-36 h-36 overflow-hidden">
              <Image
                src={imgSource}
                alt={imgAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-mainblue font-formular-black text-2xl text-center">
            {organizationName}
          </h1>
          <div className="flex justify-center items-center  gap-4 text-blue1">
            <FaFacebook size={22} />
            <p className="font-formular-mono text-sm">
              {organizationDescription}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndependentBodies;
