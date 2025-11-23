import { cn } from "@/lib/utils";
import { useState } from "react";

export interface CalendarEntryProps {
  startDate: number;
  endDate?: number;
  eventName: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function CalendarEntry({
  startDate,
  endDate,
  eventName,
  active,
  onClick,
  className,
}: CalendarEntryProps) {
  const styles = {
    inactive:
      "text-mainblue bg-white hover:bg-mainblue/10 active:bg-mainblue active:text-white",
    active: "text-white bg-mainblue",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        `border-mainblue font-formular-regular flex w-full flex-row items-center gap-3 rounded-xl border-2 p-2`,
        `transition-colors duration-100 hover:cursor-pointer`,
        `${active ? styles.active : styles.inactive}`,
        className
      )}
    >
      <p className="w-16 text-end">
        {startDate && endDate ? `${startDate} - ${endDate}` : startDate}
      </p>
      <p className="flex-grow">{eventName.toString()}</p>
    </div>
  );
}
