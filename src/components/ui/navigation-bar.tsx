"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; 
import { FiChevronDown, FiMenu } from "react-icons/fi"; 

const headLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "SAMASYNCH", href: "/samasynch" },
];
const offices = [
  { label: "Central Board", href: "/offices/central-board" },
  { label: "OSP", href: "/offices/osp" },
  { label: "OSVP", href: "/offices/osvp" },
  { label: "OSG", href: "/offices/osg" },
  { label: "OST", href: "/offices/ost" },
  { label: "Independent Bodies", href: "/offices/independent-bodies" },
];
const infoPortal = [
  { label: "Monthly Reports", href: "/information-portal/monthly-reports" },
  { label: "GAZETTE", href: "/information-portal/gazette" },
  { label: "GUIDESITE", href: "/information-portal/guidesite" },
  { label: "ACADEMIX", href: "/information-portal/academix" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-10 xl:px-24 2xl:px-40 pointer-events-none">
      <div className="lg:hidden relative">
        <div
          className={`flex items-center justify-start px-4 sm:px-6 h-14  ${
            isMobileMenuOpen ? "bg-mainblue rounded-t-xl" : ""
          }`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 cursor-pointer transition-colors pointer-events-auto ${
              isMobileMenuOpen ? "text-white" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiMenu size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu panel overlay */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-14 mt-0 px-10 bg-mainblue text-white rounded-b-4xl z-40 overflow-y-auto pb-6 shadow-xl pointer-events-auto">
            {/* Logo shown when menu is open */}
            <div className="flex items-center justify-start pt-16 mb-4">
              <Link href="/" className="relative h-8 w-24">
                <Image
                  src="/images/on-the-move-logo.png"
                  alt="On The Move Logo"
                  fill
                />
              </Link>
            </div>

            {headLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block px-4 py-3 font-formular-mono hover:bg-white/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            {/* Offices collapsible */}
            <details className="py-1 [&[open]_summary>svg]:rotate-180">
              <summary className="w-full flex items-center justify-between px-4 py-3 font-formular-mono cursor-pointer hover:bg-white/10 rounded-md list-none">
                <span>Offices</span>
                <FiChevronDown className="transition-transform duration-400" />
              </summary>
              <div className="pl-8 pb-2">
                {offices.map((o) => (
                  <Link
                    key={o.href}
                    href={o.href}
                    className="block px-2 py-2 hover:bg-white/10 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {o.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/faq"
              className="block px-4 py-3 font-formular-mono hover:bg-white/10 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            {/* Information portal collapsible */}
            <details className="py-1 [&[open]_summary>svg]:rotate-180">
              <summary className="w-full flex items-center justify-between px-4 py-3 font-formular-mono cursor-pointer hover:bg-white/10 rounded-md list-none">
                <span>Information Portal</span>
                <FiChevronDown className="transition-transform duration-400" />
              </summary>
              <div className="pl-8 pb-2">
                {infoPortal.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="block px-2 py-2 hover:bg-white/10 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        )}
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto">
          <div className="bg-mainblue/95 h-14 py-7 flex items-center justify-between lg:px-4 xl:px-8 rounded-full border border-blue1/90 pointer-events-auto">
            <Link href="/" className="relative h-6 w-20 xl:w-22">
              <Image
                src="/images/on-the-move-logo.png"
                alt="On The Move Logo"
                fill
              />
            </Link>
            <div className="flex items-center flex-nowrap space-x-20 lg:space-x-16 2xl:space-x-20 3xl:space-x-32">
              {headLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white font-formular-mono whitespace-nowrap lg:text-sm xl:text-base"
                >
                  {l.label}
                </Link>
              ))}

              {/* Offices dropdown (hover) */}
              <div className="relative inline-block align-middle group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-white cursor-pointer font-formular-mono whitespace-nowrap lg:text-sm xl:text-base"
                >
                  Offices
                  <FiChevronDown className="text-white transition-transform duration-400 group-hover:rotate-180 ml-2 xl:ml-4" />
                </button>
                <div className="absolute left-1/2 top-full -translate-x-1/2 hidden group-hover:block z-10">
                  <div className="min-w-48 bg-white border mt-4 border-mainblue rounded-b-md shadow-lg py-1">
                    {offices.map((o) => (
                      <Link
                        key={o.href}
                        href={o.href}
                        className="block px-4 py-2 text-mainblue hover:bg-mainblue hover:text-white"
                      >
                        {o.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/faq"
                className="text-white font-formular-mono whitespace-nowrap lg:text-sm xl:text-base"
              >
                FAQ
              </Link>

              {/* Information portal dropdown (hover) */}
              <div className="relative inline-block align-middle group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-white cursor-pointer font-formular-mono whitespace-nowrap lg:text-sm xl:text-base"
                >
                  Information Portal
                  <FiChevronDown className="text-white transition-transform duration-400 group-hover:rotate-180 ml-2 xl:ml-4" />
                </button>
                <div className="absolute left-1/2 top-full -translate-x-1/2 hidden group-hover:block z-10">
                  <div className="min-w-60 bg-white border mt-4 border-mainblue rounded-b-md shadow-lg py-1">
                    {infoPortal.map((i) => (
                      <Link
                        key={i.href}
                        href={i.href}
                        className="block px-4 py-2 text-mainblue hover:bg-mainblue hover:text-white"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}