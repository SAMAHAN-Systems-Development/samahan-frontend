import Image from "next/image";

// 1. Define types
type CardVariant = "default" | "taller" | "developer";

interface ProfileCardProps {
  image: {
    imageUrl: string;
    imageAlt: string;
  };
  variant?: CardVariant | CardVariant[];
}

const ProfileCard = ({ image, variant = "default" }: ProfileCardProps) => {
  const { imageUrl, imageAlt } = image;

  // 2. Helper to check variants
  const hasVariant = (v: CardVariant) => {
    if (Array.isArray(variant)) {
      return variant.includes(v);
    }
    return variant === v;
  };

  const isTaller = hasVariant("taller");
  const isDeveloper = hasVariant("developer");
  
  // Check if we need ANY custom height calculation
  const usesCustomHeight = isTaller || isDeveloper;

  // 3. Define height variables with specific logic for the intersection (Both)
  let heightVariables = "";
  
  if (isDeveloper && isTaller) {
     // CASE: BOTH Developer AND Taller
     // Maybe you want this even taller than a regular developer card?
     heightVariables = "[--extra-height:55px] xs:[--extra-height:65px] md:[--extra-height:75px] xl:[--extra-height:85px]";
  } else if (isDeveloper) {
     // CASE: Just Developer (Needs height for head clearance)
     heightVariables = "[--extra-height:30px] xs:[--extra-height:40px] md:[--extra-height:50px] xl:[--extra-height:60px]";
  } else if (isTaller) {
     // CASE: Just Taller (Aesthetic variation)
     heightVariables = "[--extra-height:13.5px] xs:[--extra-height:17px] xs-sm:[--extra-height:20px] sm:[--extra-height:23px] md:[--extra-height:26px] xl:[--extra-height:30px]";
  }

  return (
    <div
      className={`
        relative
        w-[40vw]          
        sm:w-64     
        md:w-72         
        xl:w-80
        
        ${heightVariables}

        ${!usesCustomHeight ? "aspect-[5/7]" : "h-0"}
      `}
      style={{
        paddingBottom: usesCustomHeight ? "calc(140% + var(--extra-height))" : undefined,
      }}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        quality={100}
        // 4. If it's a developer (even if also taller), we anchor to the bottom.
        className={`
            object-cover pointer-events-none
            ${isDeveloper ? "object-bottom" : "object-bottom"} 
        `}
        // Note: You can change the ternary above to "object-top" if you change your mind later
        draggable={false}
      />
    </div>
  );
};

export default ProfileCard;