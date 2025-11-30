"use client";
import { Button } from "../ui/button";
import TabHeader from "../ui/tab-header";
export default function DocumentRequestTabSection() {
  return (
    <>
      <TabHeader name="REQUEST FOR OFFICIAL DOCUMENTS"></TabHeader>
      <div className="px-5 sm:px-10 md:px-16 lg:px-32 py-6 md:py-12 lg:py-16">
        <div className="">
          {" "}
          <p className="font-formular text-mainblue font-medium text-[18px] sm:text-xl md:text-xl lg:text-2xl mb-3 sm:mb-4">
            REGISTRAR&apos;S OFFICE:
          </p>
        </div>
        <div className="font-formular text-mainblue text-sm sm:text-sm md:text-base space-y-4 sm:space-y-3 md:space-y-4 pl-0 sm:pl-4 md:pl-8">
          <p className="leading-relaxed">
            The form caters to both current students and alumni. The students
            and alumni should fill this out in order to request documents and
            for drive-through payment and claim of the requested document(s).
          </p>
          <p className="leading-relaxed">
            Access the{" "}
            <a href="https://www.addu.edu.ph/registrar/" className="text-mainblue underline font-medium">
              link
            </a>{" "}
            if you intend to request for any of the following documents:
            Transcript of Records (TOR) for Board Exam (Please upload 2x2
            picture) -- Required for licensure examinations.
          </p>
        </div>

        <div className="mt-4 px-4 sm:px-8 md:px-12 lg:px-20">
          <ol className="text-mainblue text-sm sm:text-sm md:text-base leading-tight space-y-1 sm:space-y-2 list-decimal marker:font-bold pl-5 sm:pl-6">
            <li>
              <strong>Diploma, (Certified True Copy)</strong> -- A certified
              replica of your diploma.
            </li>
            <li>
              <strong>Diploma, Original</strong> -- (Issued only once and
              Subject to verification).
            </li>
            <li>
              <strong>Diploma (Second Copy)</strong> -- May be denied release
              for cause. Affidavits of explanation justifying the request must
              be sent as part of your response to the confirmation email which
              you will receive subsequently.
            </li>
            <li>
              <strong>Reissued LLB to Juris Doctor Diploma</strong> -- A
              replacement or re-issuance of LLB your diploma, per LLB circular.
            </li>
            <li>
              <strong>Honorable Dismissal (Subject to verification)</strong> --
              Only one copy allowed for release (issued only once). This is
              requested as part of the credentials for students/graduates who
              desire to transfer to other schools.
            </li>
            <li>
              <strong>
                Certification, Authentication, and Verification from (CAV) CHED
                (Local)
              </strong>
            </li>
            <li>
              <strong>
                Certification, Authentication, and Verification (CAV) from CHED
                (Abroad) / DFA
              </strong>
            </li>
            <li>
              <strong>Certification: Bona Fide Student</strong> -- Certifies the
              period of attendance of the requesting party as an incumbent
              student of their specific program.
            </li>
            <li>
              <strong>
                Certification: Complete Academic Requirements (Graduate School)
              </strong>
            </li>
            <li>
              <strong>
                Certification: Eligibility (C1) Authentication for J.D.
              </strong>
            </li>
            <li>
              <strong>Certification: Enrollment</strong> -- Specify school year
              and semester in the details.
            </li>
            <li>
              <strong>Certification: Grades</strong> -- Please indicate in the
              details the school year, semester, and number of copies.
            </li>
            <li>
              <strong>Certification: Graduation</strong> -- Certifies the
              details relative to the grant of the degree by a graduate.
            </li>
            <li>
              <strong>Certification: Medium of Instruction (MOI)</strong> --
              Indicates that the medium of instruction by the University is
              English, unless otherwise required by law.
            </li>
            <li>
              <strong>Certification: Units Earned</strong>
            </li>
            <li>
              <strong>Certification: QPI / GWPA</strong>
            </li>
            <li>
              <strong>Course Description</strong> -- (Processing time: 2 weeks.
              Please specify in the details if requesting specific courses
              (subjects) or all)
            </li>
            <li>
              <strong>Letter of no Objection</strong> -- Subject to
              verification.
            </li>
            <li>
              <strong>
                Australian Health Practitioner Regulation Agency Documents
              </strong>{" "}
              -- 2 CTC Diploma, Original TOR abroad with 2 authentications, 2
              Letter of Confirmation, Autonomous Certificate (cert. of fee),
              Certificate of AHPRA, 1 long brown envelope.
            </li>
          </ol>
        </div>
        <Button 
          className="cursor-pointer py-3 px-6 rounded-2xl mt-6 sm:mt-6 md:mt-8"
          onClick={() => window.open("https://forms.gle/icompp-booking-form", "_blank")}
        >
          REQUEST REGISTRAR CERTIFICATE
        </Button>
        <h2 className="font-formular text-mainblue font-medium text-[18px] sm:text-xl md:text-xl lg:text-2xl mb-3 sm:mb-4 mt-8 sm:mt-10 md:mt-12">
          OFFICE OF THE STUDENT AFFAIRS:
        </h2>
        <div className="font-formular text-mainblue px-2 sm:px-4 mt-2 sm:mt-3 md:mt-4">
          <ol className="text-mainblue text-sm sm:text-sm md:text-base leading-tight space-y-1 sm:space-y-2 list-decimal marker:font-bold pl-5 sm:pl-6">
            <li>
              <strong>Certificate of Good Moral Character</strong>
            </li>
          </ol>
        </div>
        <div className="px-6 sm:px-10 md:px-14 font-formular text-mainblue text-sm sm:text-sm md:text-base mt-2">
          a. Access the link to request the said document. Please note that the form is only intended for the utilization of the Undergraduate Unit.
        </div>
        <Button 
          className="cursor-pointer py-3 px-6 rounded-2xl mt-6 sm:mt-6 md:mt-8"
          onClick={() => window.open("https://forms.gle/icompp-booking-form", "_blank")}
        >
          REQUEST CERTIFICATE
        </Button>
      </div>
    </>
  );
}