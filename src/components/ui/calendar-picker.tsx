import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface CalendarPickerProps {
  month: Date;
  dateWithEvents: Date[];
  activeEntry: {
    startDate: number;
    endDate?: number;
  };
}

function createDateRange(
  start: number,
  dateWithEvents: Date[],
  end?: number
): Date[] {
  const result: number[] = [];
  for (let i = start; i <= (end ?? start); i++) result.push(i);

  const filtered = dateWithEvents.filter((date) =>
    result.includes(date.getDate())
  );

  // remove duplicates based on timestamp
  const unique = Array.from(new Set(filtered.map((d) => d.getTime()))).map(
    (time) => new Date(time)
  );

  return unique;
}

const CalendarPicker = ({
  month,
  dateWithEvents,
  activeEntry,
}: CalendarPickerProps) => {
  const { startDate, endDate } = activeEntry;
  const activeDates = createDateRange(startDate, dateWithEvents, endDate) ?? [];
  console.log(activeDates);
  return (
    <div className="p-4 border-2 border-blue1 rounded-2xl bg-white shadow-sm inline-block">
      <DayPicker
        mode="single"
        hideNavigation
        month={month}
        modifiers={{
          eventDates: dateWithEvents,
          activeDates,
          startingDate: activeDates.length ? [activeDates[0]] : [],
          endingDate: activeDates.length
            ? [activeDates[activeDates.length - 1]]
            : [],
        }}
        modifiersClassNames={{
          eventDates:
            "relative font-formular-mono text-mainblue after:content-[''] after:absolute after:bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-mainblue",
          activeDates:
            "bg-mainblue text-white font-formular-mono rounded-none  after:content-[''] after:absolute after:bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-white",
          startingDate:
            "bg-mainblue text-white font-formular-mono rounded-l-2xl",
          endingDate: "bg-mainblue text-white font-formular-mono rounded-r-2xl",
        }}
        styles={{
          day: { pointerEvents: "none" },
        }}
        classNames={{
          day: "relative text-mainblue font-formular-mono text-sm",
          month_caption: "hidden",
          weekday: "uppercase font-fontspring text-mainblue",
        }}
      />
    </div>
  );
};

export default CalendarPicker;
