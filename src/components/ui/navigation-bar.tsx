"use client";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

// Data sources
const headLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "SAMASYNCH", href: "/contact" },
];
const offices = [
  { label: "OSP", href: "/offices/osp" },
  { label: "OSVP", href: "/offices/osvp" },
  { label: "OSG", href: "/offices/osg" },
  { label: "OST", href: "/offices/ost" },
  { label: "Independent Bodies", href: "/offices/independent-bodies" },
];
const infoPortal = [
  { label: "Monthly Reports", href: "/offices/osp" },
  { label: "GAZETTE", href: "/information-portal/gazette" },
  { label: "GUIDESITE", href: "/offices/osg" },
  { label: "ACADEMIX", href: "/offices/ost" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 xl:px-24 2xl:px-40 select-none">
      {/* Mobile: details/summary toggle (no hooks) */}
      <details className="lg:hidden group relative">
        <summary className="list-none">
          <div className="bg-mainblue h-14 flex items-center justify-between px-4 sm:px-6 rounded-none">
            <div className="relative h-6 w-20 sm:w-32">
              <Image
                src="/images/on-the-move-logo.png"
                alt="On The Move Logo"
                fill
              />
            </div>
            <div className="text-white p-2 cursor-pointer">
              <FiMenu size={22} className="block group-open:hidden" />
              <FiX size={22} className="hidden group-open:block" />
            </div>
          </div>
        </summary>

        {/* Mobile menu panel overlay */}
        <div className="absolute left-0 right-0 top-14 mt-0 px-0 bg-mainblue text-white rounded-b-2xl shadow-md divide-y divide-white/10 z-40  overflow-y-auto">
          {headLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-4 py-3 font-formular-mono hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}

          {/* Offices collapsible */}
          <details className="px-2 py-1 group">
            <summary className="w-full flex items-center justify-between px-2 py-2 font-formular-mono cursor-pointer hover:bg-white/10 rounded-md">
              <span>Offices</span>
              <FiChevronDown className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="pl-4 pb-2">
              {offices.map((o) => (
                <Link
                  key={o.href}
                  href={o.href}
                  className="block px-2 py-2 hover:bg-white/10 rounded-md"
                >
                  {o.label}
                </Link>
              ))}
            </div>
          </details>

          <Link
            href="/FAQ"
            className="block px-4 py-3 font-formular-mono hover:bg-white/10"
          >
            FAQ
          </Link>

          {/* Information portal collapsible */}
          <details className="px-2 py-1 group">
            <summary className="w-full flex items-center justify-between px-2 py-2 font-formular-mono cursor-pointer hover:bg-white/10 rounded-md">
              <span>Information Portal</span>
              <FiChevronDown className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="pl-4 pb-2">
              {infoPortal.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="block px-2 py-2 hover:bg-white/10 rounded-md"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </details>

      {/* Desktop nav (unchanged layout; mapped content) */}
      <div className="hidden lg:block">
        <div className="bg-mainblue h-14 flex items-center justify-between lg:px-6 xl:px-10 rounded-full">
          <div className="relative h-6 w-20  xl:w-22">
            <Image
              src="/images/on-the-move-logo.png"
              alt="On The Move Logo"
              fill
            />
          </div>
          <div className="flex items-center flex-nowrap  space-x-12 md:space-x-12 xl:space-x-16 2xl:space-x-24s">
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
                <FiChevronDown className="text-white transition-transform duration-200 group-hover:rotate-180 ml-2 xl:ml-4" />
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
              href="/FAQ"
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
                <FiChevronDown className="text-white transition-transform duration-200 group-hover:rotate-180 ml-2 xl:ml-4" />
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
  );
}
