"use client";
import { Button } from "../ui/button";
import TabHeader from "../ui/tab-header";
export default function EvaluationFormsSection() {
  return (
    <>
      <TabHeader name="EVALUATION FORMS"></TabHeader>
      <div className="px-5 sm:px-10 md:px-16 lg:px-32 py-10 md:py-12 lg:py-16 flex justify-center">
        <div className="flex flex-col gap-y-5 xxs:w-min xs:hidden">
            <Button
                className="cursor-pointer py-3 px-6 rounded-2xl"
                onClick={() => window.open("https://forms.gle/vnK1jZHCdmBksD2k8", "_blank")}
                >
                ATENEO FIESTA EVALUATION FORM
            </Button>
            <Button
                className="cursor-pointer py-3 px-6 rounded-2xl"
                onClick={() => window.open("https://forms.gle/6K3LN4EvoVtsJww56", "_blank")}
                >
                PALARO EVALUATION FORM
            </Button>
            <Button
                className="cursor-pointer py-3 px-6 rounded-2xl"
                onClick={() => window.open("https://forms.gle/XNqqu5gdQQyEXVEr6", "_blank")}
                >
                ATENEO UFEST EVALUATION FORM
            </Button>
        </div>

        <div className="xs:flex flex-col gap-y-5 hidden xs:w-90">
            <Button size={"lg"}
                className="cursor-pointer py-3 px-6 rounded-2xl"
                onClick={() => window.open("https://forms.gle/vnK1jZHCdmBksD2k8", "_blank")}
                >
                ATENEO FIESTA EVALUATION FORM
            </Button>
            <Button size={"lg"}
                className="cursor-pointer py-3 px-6 rounded-2xl"
                onClick={() => window.open("https://forms.gle/6K3LN4EvoVtsJww56", "_blank")}
                >
                PALARONG ATENISTA EVALUATION FORM
            </Button>
            <Button size={"lg"}
                className="cursor-pointer py-3 px-6 rounded-2xl"
                onClick={() => window.open("https://forms.gle/XNqqu5gdQQyEXVEr6", "_blank")}
                >
                ATENEO UFEST EVALUATION FORM
            </Button>
        </div>
        
      </div>
    </>
  );
}