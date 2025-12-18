import React from "react";

interface ProfileGroupProps {
  groupTitle: string;
  description?: string | React.ReactNode;
  children: React.ReactNode;
}

export default function ProfileGroup({
  groupTitle,
  description,
  children,
}: ProfileGroupProps) {
  return (
    <section className="flex w-full flex-col items-center px-8 py-12 md:py-16">
      <div className="flex w-full max-w-7xl flex-col">
        <h2 className="font-formular-black text-center text-2xl uppercase text-mainblue md:text-3xl lg:text-4xl">
          {groupTitle}
        </h2>

        <p className="font-formular-regular mt-4 text-center text-sm leading-relaxed text-mainblue md:text-base">
          {description}
        </p>

        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
