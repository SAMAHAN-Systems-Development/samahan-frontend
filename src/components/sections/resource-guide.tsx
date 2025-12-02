import Image from "next/image";

export default function ResourceGuide() {
  return (
    <section className="flex w-full flex-col items-center overflow-x-clip px-6 pt-3 pb-12 md:px-8 md:pb-16 lg:pb-20">
      <div className="w-full max-w-6xl">
        <h1 className="font-formular-black text-center text-xl text-mainblue md:text-3xl lg:text-4xl xl:text-6xl">
          STUDENT RESOURCE GUIDE
        </h1>

        <p className="font-formular-regular mt-10 text-justify text-sm leading-relaxed text-mainblue md:text-base lg:leading-relaxed">
          Traversing into new pathways towards attaining academic excellence,
          sustaining academic service, and empowering academic integrity, the
          SAMAHAN Department of Academic Affairs pioneers its mission to provide
          a convenient academic space among Ateneans for fostering individual
          knowledge and cultivating community engagement on resource sharing and
          distribution.
        </p>

        <p className="font-formular-bold mt-4 text-justify text-sm leading-relaxed text-mainblue md:text-base lg:leading-relaxed">
          AcadHub: The Student Resource Guide,{" "}
          <span className="font-formular-regular">
            an initiative of the SAMAHAN Department of Academic Affairs, is your
            one-stop destination for everything you need to succeed in your
            academic journey. Discover essential student services, helpful
            resources, and innovative digital tools, all in one convenient
            place. Whether you are a freshman just starting or a seasoned
            upperclassman, AcadHub is your partner in achieving academic
            excellence. Towards a thorough information dissemination of the
            vital student resources for the benefit of every Atenean, we shall
            build a more informed and engaged Atenean academic community!
          </span>
        </p>
      </div>

      <div className="relative mt-12">
        <div className="md:hidden pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[200vw] -translate-x-1/2 -translate-y-1/2 md:h-[700px] md:w-[1400px] lg:h-[800px] lg:w-[1600px] scale-125">
          <Image
            src="/images/tape-design/tape-1.svg"
            alt="Decorative tape design"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-20 mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-center md:gap-6 lg:gap-6 xl:gap-8">
          <div className="relative h-42 w-72 overflow-hidden rounded-2xl shadow-lg md:h-64 md:w-96 lg:h-96 lg:w-96">
            <Image
              src="/images/student-resource/student-resource-1.jpg"
              alt="Student Resource Guide 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="relative h-42 w-72 overflow-hidden rounded-2xl shadow-lg md:h-64 md:w-96 lg:h-80 lg:w-78">
              <Image
                src="/images/student-resource/student-resource-2.png"
                alt="Student Resource Guide 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-42 w-72 overflow-hidden rounded-2xl shadow-lg md:h-64 md:w-96 lg:h-64 lg:w-64">
              <Image
                src="/images/student-resource/student-resource-3.jpg"
                alt="Student Resource Guide 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}