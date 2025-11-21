import React from "react";
import TabHeader from "../ui/tab-header";
import Image from "next/image";

interface AppItem {
  name: string;
  icon: string;
}

interface AppCategory {
  title: string;
  description: string;
  apps: AppItem[];
  link?: string;
}

const DigitalApplications = () => {
  const categories: AppCategory[] = [
    {
      title: "FLASHCARDS",
      description:
        "Helps when revising a handful of concepts. It helps in memorization and active recall. Digital applications can also help save time for more efficient studying sessions.",
      apps: [
        {
          name: "QUIZLET",
          icon: "/images/digital-applications/quizlet-icon.png",
        },
        {
          name: "GIZMO AI",
          icon: "/images/digital-applications/gizmoAI-icon.png",
        },
        { name: "ANKI", icon: "/images/digital-applications/anki-icon.png" },
      ],
    },
    {
      title: "FOCUS",
      description:
        "Boosts productivity by minimizing distractions and promoting effective time management through timed study intervals. Often uses reward systems to motivate users and enhance productivity such as earning points, unlocking achievements, or growing a virtual tree.",
      apps: [
        { name: "FLOW", icon: "/images/digital-applications/flow-icon.png" },
        {
          name: "STUDY BUNNY",
          icon: "/images/digital-applications/bunny-icon.png",
        },
        {
          name: "FOREST",
          icon: "/images/digital-applications/forest-icon.png",
        },
      ],
    },
    {
      title: "TASK MANAGEMENT",
      description:
        "Enhances productivity by helping you organize tasks and track progress and habits. They also offer reminders to streamline your workflow and keep you focused for better time management.",
      apps: [
        {
          name: "FOLDERLY",
          icon: "/images/digital-applications/folderly-icon.png",
        },
        {
          name: "MINIMALIST",
          icon: "/images/digital-applications/minimalist-icon.png",
        },
        {
          name: "TODOMATE",
          icon: "/images/digital-applications/todomate-icon.png",
        },
        {
          name: "ONEMORE",
          icon: "/images/digital-applications/onemore-icon.png",
        },
      ],
    },
    {
      title: "SCIENCES",
      description:
        "Offers a wide range of resources that allows for better understanding of difficult topics. May provide lecture videos or illustrations that can aid those who are visual learners.",
      apps: [
        {
          name: "KHAN ACADEMY",
          icon: "/images/digital-applications/khanacademy-icon.png",
        },
        {
          name: "CRASH COURSE",
          icon: "/images/digital-applications/crashcourse-icon.png",
        },
      ],
    },
  ];

  return (
    <section className="w-full pb-20">
      <div className="mx-auto w-full max-w-screen-xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 md:mx-0 md:rounded-3xl overflow-hidden">
          <TabHeader name="HELPFUL DIGITAL APPLICATION" />
        </div>

        <div className="mt-15 space-y-15 lg:space-y-32">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="font-trapix text-2xl md:text-3xl text-mainblue mb-4">
                {category.title}
              </h3>

              <p className="text-sm md:text-base text-mainblue max-w-5xl mx-auto mb-8 px-4">
                {category.description}
              </p>

              <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                {category.apps.map((app, appIndex) => (
                  <div
                    key={appIndex}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center">
                      <Image
                        src={app.icon}
                        alt={app.name}
                        width={60}
                        height={60}
                        className="w-30 h-30 md:w-24 md:h-24 object-contain"
                      />
                    </div>
                    <span className="font-formular text-xs md:text-sm font-semibold text-mainblue uppercase">
                      {app.name}
                    </span>
                  </div>
                ))}

                {category.link && (
                  <div className="flex flex-col items-center gap-3">
                    <button className="text-mainblue font-formular text-xs md:text-sm font-semibold uppercase underline hover:no-underline">
                      {category.link}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalApplications;