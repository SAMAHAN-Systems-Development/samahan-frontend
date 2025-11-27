import TabHeader from "@/components/ui/tab-header";
import { icomppEquipmentData } from "@/data/icompp-equipment-data";
import { Button } from "../ui/button";

export default function IcomppEquipment() {
  return (
    <div className="w-full">
      <TabHeader name="ICOMPP EQUIPMENT AND STUDIOS BOOKING" />

      <div className="mt-6 md:mt-8 px-4 md:px-8 lg:px-12">
        <p className="font-formular-regular text-sm md:text-base text-mainblue mb-6 md:mb-8">
          Access the link if you intend to book the following equipment and/or
          studios:
        </p>
      </div>

      <div className="px-4 md:px-8 md:ml-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {icomppEquipmentData.map((item) => (
            <div key={item.id} className="flex gap-3">
              <span className="font-formular text-mainblue text-sm md:text-base flex-shrink-0">
                {item.id}.
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-formular-regular text-sm md:text-base text-mainblue">
                  {item.name}
                </p>
                {item.note && (
                  <p className="font-formular-regular text-xs md:text-sm text-mainblue">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-10 lg:mt-14">
          <Button 
            className="cursor-pointer py-3 px-6 rounded-2xl"
            onClick={() => window.open("https://forms.gle/icompp-booking-form", "_blank")}
          >
            BOOK ICOMPP EQUIPMENT
          </Button>
        </div>
      </div>
    </div>
  );
}
