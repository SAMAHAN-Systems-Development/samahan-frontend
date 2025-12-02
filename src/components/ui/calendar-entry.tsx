import { cn } from "@/lib/utils";

export interface CalendarEntryProps {
  startDate: number;
  endDate?: number;
  eventName: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

// Helper function to parse event names with ^TAG^ format
/* const parseEventName = (text: string) => {
  const parts = text.split(/(\^[^^]+\^)/g);
  return parts.map((part, i) => {
    if (part.startsWith("^") && part.endsWith("^")) {
      return <sup key={i}>{part.slice(1, -1)}</sup>;
    }
    return part;
  });
}; */

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
      "text-mainblue bg-white hover:bg-gray-200 active:bg-mainblue active:text-white",
    active: "text-white bg-mainblue",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        `border-mainblue font-formular-regular flex w-full flex-row items-center gap-3 md:gap-4 rounded-xl md:rounded-2xl border-2 p-2 pl-4 lg:pl-6`,
        `transition-colors duration-100 hover:cursor-pointer`,
        `${active ? styles.active : styles.inactive}`,
        className
      )}
    >
      <p className="min-w-14 md:min-w-14 text-end text-sm sm:text-base -mb-0.5 sm:-mb-1">
        {startDate && endDate ? `${startDate} - ${endDate}` : startDate}
      </p>
      <p 
        className="flex-grow text-sm sm:text-base -mb-0.5 sm:-mb-1"
        dangerouslySetInnerHTML={{ __html: eventName }}
      />
    </div>
  );
}