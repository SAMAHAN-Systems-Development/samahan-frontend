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
    <div className="w-[24rem] h-[15rem] flex justify-center items-center flex-col">
      <Link href={facebookLink} target="_blank" rel="noopener noreferrer"> 
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
            <div className="flex justify-center mt-2">
              <div className="flex justify-center items-center gap-1 text-blue1 w-3/4">
                <FaFacebook size={45} />
                <p className="font-formular-mono text-sm text-center">
                  {facebookName}
                </p>
              </div>
            </div>
            
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default IndependentBodies;
