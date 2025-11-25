interface TabHeaderProps {
  name: string;
  description?: string;
}

export default function TabHeader({ name, description }: TabHeaderProps) {
  return (
    <div className="w-full bg-mainblue text-white px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 md:rounded-lg">
      <div className="flex flex-col items-center justify-center text-center gap-2 md:gap-3">
        <h2 className="font-formular-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase leading-tight">
          {name}
        </h2>

        {description && (
          <p className="font-formular-regular text-xs sm:text-sm md:text-base max-w-4xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
