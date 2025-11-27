"use client";

export default function ConstitutionFile(){
    return (
        <div className="border-2 border-mainblue rounded-lg flex flex-col justify-center align-center w-full max-w-[977px] py-10 px-5">
            <div className="title font-trapix text-xl sm:text-3xl md:text-4xl text-center text-mainblue">
                AMENDED 2020 SAMAHAN CONSTITUTION
            </div>
            <div className="subtitle font-formular-regular text-center text-sm sm:text-md text-mainblue">
                The foundational legal document outlining the structure and function of the student government.
            </div>
            <div className="button-container flex justify-center py-4">
                <button onClick={() => window.open("/documents/gazette-documents/AMENDED-2020-SAMAHAN-CONSTITUTION.pdf", "_blank")}
                    className="bg-mainblue hover:bg-blue2 cursor-pointer text-white text-sm sm:text-md font-formular-regular py-2 px-4 rounded-lg w-7/8">
                    View PDF
                </button>
            </div>
        </div>
    )
}