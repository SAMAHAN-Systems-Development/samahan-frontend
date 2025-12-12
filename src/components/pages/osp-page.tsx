import React from "react";
import HeroBanner from "../ui/hero-banner";
import OtherOffices from "../sections/other-offices";
import ProjectCarouselSection from "../sections/project-carousel-section";
import ProfileGroup from "../sections/profile-group";
import ProfileCard from "../ui/profile-card";

const LPAREN = <span className="font-['Arial'] inline">&#40;</span>;
const RPAREN = <span className="font-['Arial'] inline">&#41;</span>;
const COLON = <span className="font-['Arial'] inline">&#58;</span>;

function OSPPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <HeroBanner
        imageSrc="/images/hero-images/OSP-INDEPENDENT-Hero.png"
        imageAlt="OSP Page Hero"
        header1="OFFICE OF THE"
        header2="PRESIDENT"
      />

      <ProfileGroup
        groupTitle="OFFICE OF THE SAMAHAN PRESIDENT"
        description={
          <>
            The Office of the SAMAHAN President aims to establish harmony and
            efficiency in both the internal operations of the student government
            and external relations. The Office is composed of the following
            deputies{COLON} Chief of Staff, Executive Secretary, and Executive
            Undersecretary.
          </>
        }
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-2 lg:col-start-3 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/hannah-aquino.png",
                imageAlt: "Hannah Aquino",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/aleah-carungay.png",
                imageAlt: "Aleah Carungay",
              }}
              variant="taller"
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/mark-lipasan.png",
                imageAlt: "Mark Lipasan",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-start-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/ryzah-cabanting.png",
                imageAlt: "Ryzah Cabanting",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/rana-guerra.png",
                imageAlt: "Rana Guerra",
              }}
            />
          </div>

          <div className="col-span-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/angeleiah-chu.png",
                imageAlt: "Angeleiah Chu",
              }}
            />
          </div>
        </div>
      </ProfileGroup>

      <ProfileGroup
        groupTitle="DEPARTMENT OF EXTERNAL AFFAIRS"
        description={
          <>
            The Department of External Affairs is the primary arm of the SAMAHAN
            Central Board for managing external engagements under the Office of
            the SAMAHAN President. Anchored in student-centered initiatives, it
            facilitates national and international opportunities for Ateneo de
            Davao students and represents SAMAHAN in external partnerships and
            alliances, including Buklod Atenista and Unyon ng mga Estudyante sa
            Mindanao {LPAREN}Unyon Mindanao{RPAREN}.
          </>
        }
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/justin-felicia.png",
                imageAlt: "Justin Felicia",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/precious-santos.png",
                imageAlt: "Precious Santos",
              }}
            />
          </div>
        </div>
      </ProfileGroup>

      <ProfileGroup
        groupTitle="ECOTENEO STUDENT UNIT"
        description={
          <>
            The SAMAHAN Ecoteneo Student Unit {LPAREN}ESU{RPAREN} is the
            official environmental advocacy arm of the SAMAHAN Central Board,
            committed to championing ecological justice and student-led action
            for the planet. Inspired the Jesuit call to care for our common
            home, ESU serves as a space where advocacy takes root, and where
            compassion is transformed into concrete initiatives.
          </>
        }
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/joyce-arabia.png",
                imageAlt: "Joyce Arabia",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/maria-asilum.png",
                imageAlt: "Maria Asilum",
              }}
              variant="taller"
            />
          </div>
        </div>
      </ProfileGroup>

      <ProfileGroup
        groupTitle="DEPARTMENT OF CAMPAIGNS AND ADVOCACIES"
        description="The SAMAHAN Department of Campaigns and Advocacies is the advocacy arm of the SAMAHAN Central Board under the Office of the SAMAHAN President. It aims to amplify the voices of Ateneans in actualizing the pursuit of serving the University, Mindanao, and the Philippines."
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/ces-arcala.png",
                imageAlt: "Ces Arcala",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/mc-datuin.png",
                imageAlt: "MC Datuin",
              }}
            />
          </div>
        </div>
      </ProfileGroup>

      <ProfileGroup
        groupTitle="STUDENT NEEDS AND SERVICES DEPARTMENT"
        description="The Student Needs and Services Department focuses on addressing students' welfare, needs, and access to services. It is a centralized body tasked with handling long-term student support programs, ensuring that services related to student life are better coordinated and sustained."
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/cayla-cole.png",
                imageAlt: "Cayla Cole",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osp/jian-paculaba.png",
                imageAlt: "Jian Paculaba",
              }}
            />
          </div>
        </div>
      </ProfileGroup>

      <ProjectCarouselSection />
      <div className="h-20"></div>
      <OtherOffices office="osp" />
      <div className="h-20"></div>
    </div>
  );
}

export default OSPPage;
