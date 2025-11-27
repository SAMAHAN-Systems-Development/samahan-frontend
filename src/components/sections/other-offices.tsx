import { otherSamahanOfficesData } from "@/data/other-samahan-offices-data";
import OfficeCard from "../ui/OfficeCard";
interface OtherOfficesProps {
  office: "osp" | "osvp" | "osg" | "ost";
}
export default function OtherOffices({ office }: OtherOfficesProps) {
  const filteredOffices = otherSamahanOfficesData.filter(
    (item) => item.office !== office
  );
  return (
    <div className="px-6 md:px-8 lg:px-12">
      <h1 className="font-formular-black text-center text-xl text-mainblue md:text-3xl">
        OTHER SAMAHAN OFFICES
      </h1>
      <div className="mx-auto mt-4 md:mt-7 lg:mt-10 mb-20 grid max-w-4xl grid-cols-1 justify-items-center gap-6 lg:grid-cols-3">
        {filteredOffices.map((item, index) => (
          <OfficeCard
            key={index}
            imageUrl={item.imageUrl}
            officeName={item.officeName}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
}
