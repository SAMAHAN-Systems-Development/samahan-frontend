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
    <div className="pointer-events-none sticky top-0 z-50 px-4 py-4 sm:px-6 lg:px-10 xl:px-24 2xl:px-40">
      <div className="relative lg:hidden">
        <div
          className={`flex h-14 items-center justify-start px-4 sm:px-6 ${
            isMobileMenuOpen ? "bg-mainblue rounded-t-xl" : ""
          }`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`pointer-events-auto cursor-pointer p-2 transition-colors ${
              isMobileMenuOpen ? "text-white" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiMenu size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu panel overlay */}
        {isMobileMenuOpen && (
          <div className="bg-mainblue pointer-events-auto absolute top-14 right-0 left-0 z-40 mt-0 overflow-y-auto rounded-b-4xl px-10 pb-6 text-white shadow-xl">
            {/* Logo shown when menu is open */}
            <div className="mb-4 flex items-center justify-start pt-16">
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
                className="font-formular-mono block rounded-md px-4 py-3 hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            {/* Offices collapsible */}
            <details className="py-1 [&[open]_summary>svg]:rotate-180">
              <summary className="font-formular-mono flex w-full cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 hover:bg-white/10">
                <span>Offices</span>
                <FiChevronDown className="transition-transform duration-400" />
              </summary>
              <div className="pb-2 pl-8">
                {offices.map((o) => (
                  <Link
                    key={o.href}
                    href={o.href}
                    className="block rounded-md px-2 py-2 hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {o.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/faq"
              className="font-formular-mono block rounded-md px-4 py-3 hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            {/* Information portal collapsible */}
            <details className="py-1 [&[open]_summary>svg]:rotate-180">
              <summary className="font-formular-mono flex w-full cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 hover:bg-white/10">
                <span>Information Portal</span>
                <FiChevronDown className="transition-transform duration-400" />
              </summary>
              <div className="pb-2 pl-8">
                {infoPortal.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="block rounded-md px-2 py-2 hover:bg-white/10"
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
        <div className="mx-auto max-w-7xl">
          <div className="bg-mainblue/95 border-blue1/90 pointer-events-auto flex h-14 items-center justify-between rounded-full border py-7 lg:px-4 xl:px-8">
            <Link href="/" className="relative h-6 w-20 xl:w-22">
              <Image
                src="/images/on-the-move-logo.png"
                alt="On The Move Logo"
                fill
              />
            </Link>
            <div className="3xl:space-x-32 flex flex-nowrap items-center space-x-20 lg:space-x-16 2xl:space-x-20">
              {headLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-formular-mono whitespace-nowrap text-white lg:text-sm xl:text-base"
                >
                  {l.label}
                </Link>
              ))}

              {/* Offices dropdown (hover) */}
              <div className="group relative inline-block align-middle">
                <button
                  type="button"
                  className="font-formular-mono flex cursor-pointer items-center gap-1 whitespace-nowrap text-white lg:text-sm xl:text-base"
                >
                  Offices
                  <FiChevronDown className="ml-2 text-white transition-transform duration-400 group-hover:rotate-180 xl:ml-4" />
                </button>
                <div className="absolute top-full left-1/2 z-10 hidden -translate-x-1/2 group-hover:block">
                  <div className="border-mainblue mt-4 min-w-48 rounded-b-md border bg-white py-1 shadow-lg">
                    {offices.map((o) => (
                      <Link
                        key={o.href}
                        href={o.href}
                        className="text-mainblue hover:bg-mainblue block px-4 py-2 hover:text-white"
                      >
                        {o.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/faq"
                className="font-formular-mono whitespace-nowrap text-white lg:text-sm xl:text-base"
              >
                FAQ
              </Link>

              {/* Information portal dropdown (hover) */}
              <div className="group relative inline-block align-middle">
                <button
                  type="button"
                  className="font-formular-mono flex cursor-pointer items-center gap-1 whitespace-nowrap text-white lg:text-sm xl:text-base"
                >
                  Information Portal
                  <FiChevronDown className="ml-2 text-white transition-transform duration-400 group-hover:rotate-180 xl:ml-4" />
                </button>
                <div className="absolute top-full left-1/2 z-10 hidden -translate-x-1/2 group-hover:block">
                  <div className="border-mainblue mt-4 min-w-60 rounded-b-md border bg-white py-1 shadow-lg">
                    {infoPortal.map((i) => (
                      <Link
                        key={i.href}
                        href={i.href}
                        className="text-mainblue hover:bg-mainblue block px-4 py-2 hover:text-white"
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
