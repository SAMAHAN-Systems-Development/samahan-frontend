import React from "react";
import HeroBanner from "../ui/hero-banner";
import OtherOffices from "../sections/other-offices";
import ProfileGroup from "../sections/profile-group";
import ProfileCard from "../ui/profile-card";
import ProjectCarouselSection from "../sections/project-carousel-section";

const LPAREN = <span className="font-['Arial'] inline">&#40;</span>;
const RPAREN = <span className="font-['Arial'] inline">&#41;</span>;
const COLON = <span className="font-['Arial'] inline">&#58;</span>;

function OSVPPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OSVP-Hero.png"
        imageAlt="OSVP Page Hero"
        header1="OFFICE OF THE"
        header2="VICE PRESIDENT"
      />

      <ProfileGroup
        groupTitle="OFFICE OF THE SAMAHAN VICE PRESIDENT"
        description={
          <>
            The Office of the SAMAHAN Vice President supervises the internal
            affairs of the SAMAHAN Central Board and leads the Student Assembly.
            The Office is composed of the following committees{COLON} Executive
            Committee and the Legislative Support and Monitoring Bureau {LPAREN}
            LSMB{RPAREN}.
          </>
        }
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-2 lg:col-start-3 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/ken-hinojales.png",
                imageAlt: "Profile Picture",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/kate-gingatan.png",
                imageAlt: "Profile Picture",
              }}
              variant="taller"
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/robs-briones.png",
                imageAlt: "Profile Picture",
              }}
            />
          </div>
        </div>
      </ProfileGroup>

      <ProfileGroup
        groupTitle="OFFICE OF THE LEGISLATIVE SECRETARY"
        description="Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam ibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-1 lg:col-start-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/juelianna-muhali.png",
                imageAlt: "Profile Picture",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/monica-rama.png",
                imageAlt: "Profile Picture",
              }}
            />
          </div>

          <div className="col-span-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/russell-fajardo.png",
                imageAlt: "Profile Picture",
              }}
            />
          </div>
        </div>
      </ProfileGroup>

      <ProfileGroup
        groupTitle="DEPARTMENT OF ACADEMIC AFFAIRS"
        description={
          <>
            The SAMAHAN Department of Academic Affairs {LPAREN}DAA{RPAREN}{" "}
            serves as the academic arm of the SAMAHAN, under the Office of the
            SAMAHAN Vice President. At its core, the department is committed to
            promoting the academic welfare of the student body. It strives to
            provide support through various initiatives that respond to
            students&apos; academic needs. The DAA also plays a role in
            examining and reflecting on academic policies, contributing
            student-centered insights that help improve the learning
            environment.
          </>
        }
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/hyacinth-duldulao.png",
                imageAlt: "Profile Picture",
              }}
              variant="taller"
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/emjay-serna.png",
                imageAlt: "Profile Picture",
              }}
            />
          </div>
        </div>
      </ProfileGroup>

      <ProfileGroup
        groupTitle="DEPARTMENT OF DISASTER RISK REDUCTION AND MANAGEMENT"
        description={
          <>
            The SAMAHAN Department of Disaster Risk Reduction and Management{" "}
            {LPAREN}DDRRM{RPAREN} is the helping arm of the Ateneo de Davao
            University by providing its services to its constituents. The
            organization also aims to develop and implement effective disaster
            response plans and protocols to ensure the safety of everyone in the
            university in the event of a disaster. Additionally, the department
            aims to establish partnerships and collaborations with local
            government units and other organizations to enhance the university
            community&apos;s disaster risk reduction and management efforts.
          </>
        }
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/neomie-jereza.png",
                imageAlt: "Profile Picture",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/joshua-chua.png",
                imageAlt: "Profile Picture",
              }}
              variant="taller"
            />
          </div>
        </div>
      </ProfileGroup>

      <ProfileGroup
        groupTitle="SAMAHAN POLITICAL AFFAIRS AND ENGAGEMENTS DEPARTMENT"
        description="We, the members of the SAMAHAN Political Affairs and Engagements Department of the Samahan ng mga Mag-Aaral ng Pamantasang Ateneo de Davao, recognizing the crucial role of political engagement and leadership in shaping the future of our university and society, hereby establish this department to promote informed and active participation among students."
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/luis-torres.png",
                imageAlt: "Profile Picture",
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard
              image={{
                imageUrl: "/images/osvp/daniella-cadavez.png",
                imageAlt: "Profile Picture",
              }}
              variant="taller"
            />
          </div>
        </div>
      </ProfileGroup>

      <ProjectCarouselSection />
      <div className="h-20"></div>
      <OtherOffices office="osvp" />
      <div className="h-20"></div>
    </div>
  );
}

export default OSVPPage;
