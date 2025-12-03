"use client";

export default function ConstitutionFile(){
    return (
        <div className="border-2 border-mainblue rounded-xl flex flex-col justify-center align-center w-full max-w-235 py-5 md:py-7 px-5 md:px-8 lg:p-10">
            <div className="title font-trapix text-xl md:text-2xl lg:text-4xl text-center text-mainblue">
                AMENDED 2020 SAMAHAN CONSTITUTION
            </div>
            <div className="subtitle font-formular-regular text-center text-sm md:text-base text-mainblue md:mt-2">
                The foundational legal document outlining the structure and function of the student government.
            </div>
            <div className="button-container flex justify-center mt-4">
                <button onClick={() => window.open("/documents/gazette-documents/AMENDED-2020-SAMAHAN-CONSTITUTION.pdf", "_blank")}
                    className="bg-mainblue hover:bg-blue2 cursor-pointer text-white text-sm md:text-md font-formular-regular py-2 px-4 rounded-lg w-full">
                    View PDF
                </button>
            </div>
        </div>
    )
}