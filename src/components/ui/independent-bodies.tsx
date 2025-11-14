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
    <div className="w-[24rem] h-max flex justify-center items-center flex-col">
      <Link href={facebookLink} target="_blank" rel="noopener noreferrer"> 
        <Card className="!border-0 shadow-none gap-2">
          <CardHeader>
            <div className="flex items-center justify-center">
              <div className="relative w-36 h-36 overflow-hidden">
                <Image
                  src={imgSource}
                  alt={imgAlt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-mainblue font-formular-black text-lg text-center">
              {organizationName}
            </h1>
            <div className="flex justify-center mt-1">
              <div className="flex justify-center items-center gap-3 text-blue1 w-3/4">
                <div className="w-min h-min"><FaFacebook size={25}/></div>
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
