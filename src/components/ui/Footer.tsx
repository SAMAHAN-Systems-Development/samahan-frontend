import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        //Container for footer
        <footer className="bg-mainblue p-15 text-white rounded-t-[100px]">
            {/* 1. Logo and Org Name Row */}
            <div className="logo-orgname-container flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-8 ">
                {/* Container for logo */}
                <div className="logo-container flex flex-row gap-2">
                    {/* AdDU Logo */}
                    <Image 
                        src="/images/placeholder.png"
                        alt="AdDU Logo"
                        width={100}
                        height={100}
                    />
                    {/* SAMAHAN Logo */}
                    <Image 
                        src="/images/placeholder.png"
                        alt="SAMAHAN Logo"
                        width={100}
                        height={100}
                    />
                </div>
                {/* Container for org name */}
                <div className="samahan flex flex-col w-full lg:ml-8 lg:space-y-0 space-y-4">
                    {/* Title */}
                    <div className="title font-trapix text-2xl">
                        <span className="inline-block max-w-md">Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao </span>
                    </div>
                    {/* Description */}
                    <div className="description font-formular-mono text-sm">
                        The Student Government of College Unit of the Ateneo de Davao University
                    </div>
                </div>
            </div>
            {/* 2. Links and Contact Row */}
            <div className="left py-16 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16">
                {/* Links */}
                <div className="links-container flex flex-col lg:flex-row gap-12 text-center lg:text-left">
                    {/* Quick Links */}
                    <div className="quick-links flex flex-col">
                        <div className="font-trapix text-lg mb-2 lg:px-4">Quick Links</div>
                        <ul className="list-none space-y-4 font-formular-mono text-xs lg:pl-4 mt-4">
                            <li><Link href="/" className="hover:underline">About</Link></li>
                            <li><Link href="/" className="hover:underline">Academix</Link></li>
                            <li><Link href="/" className="hover:underline">Meet the Developers</Link></li>
                            <li><Link href="/" className="hover:underline">Fortiores 2030</Link></li>
                        </ul>
                    </div>
                    {/* Offices */}
                    <div className="offices flex flex-col">
                        <div className="font-trapix text-lg mb-2 lg:px-4">Offices</div>
                        <ul className="list-none space-y-4 font-formular-mono text-xs lg:pl-4 mt-4">
                            <li><Link href="/" className="hover:underline">President</Link></li>
                            <li><Link href="/" className="hover:underline">Vice President</Link></li>
                            <li><Link href="/" className="hover:underline">Secretary General</Link></li>
                            <li><Link href="/" className="hover:underline">Treasurer</Link></li>
                        </ul>
                    </div>
                    {/* Policies */}
                    <div className="policies flex flex-col">
                        <div className="font-trapix text-lg mb-2 lg:px-4">Policies</div>
                        <ul className="list-none space-y-4 font-formular-mono text-xs lg:px-4 mt-4">
                            <li><Link href="/" className="hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    {/* Address */}
                    <div className="address flex flex-col">
                        <div className="font-trapix text-lg mb-2 lg:px-4">Address</div>
                        <ul className="list-none space-y-2 font-formular-mono text-xs lg:px-4 mt-4 max-w-xs">
                            <li>Mezzanine Level, Martin Building, Ateneo de Davao University E.Jacinto Street, Davao City 8000</li>
                        </ul>
                    </div>
                </div>
                {/* Contact */}
                <div className="right flex flex-col text-center md:text-center lg:text-right gap-8">
                    <div className="font-trapix text-lg flex flex-col">
                        Telephone
                        <div className="font-formular-mono text-xs mt-2">(082) 221 2411 LOC 8328</div>
                    </div>
                    <div className="font-trapix text-lg flex flex-col">
                        Email
                        <div className="font-formular-mono text-xs mt-2">samahan<span className="font-trapix text-xs">@</span>addu.edu.ph</div>
                    </div>
                    <div className="font-trapix text-lg flex flex-col">
                        Socials
                        <div className="font-formular-mono text-md mt-2 flex flex-row justify-center lg:justify-end">
                            <a href="https://www.facebook.com/AdDUSAMAHAN" target="_blank" rel="noopener noreferrer"><FaFacebook className="mr-2" /></a>
                            <a href="https://www.instagram.com/samahan_ateneo" target="_blank" rel="noopener noreferrer"><FaInstagram className="mr-2"/></a>
                            <a href="https://x.com/addusamahan" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Horizontal line */}
            <hr />
            {/* Credits & Copyright row */}
            <div className="copyright-container justify-between lg:mt-8 mt-4 flex flex-col lg:flex-row items-center gap-4 lg:space-y-0 space-y-10">
                {/* Assets By */}
                <div className="left assets-by font-formular-mono text-sm flex flex-col text-center lg:text-left">
                    <div className="flex-row">Assets by <span className="font-trapix">SAMAHAN Creative Team</span></div>
                    <div className="flex-row">Developed by <Link href="/" className="hover:underline"><span className="font-trapix">SAMAHAN Systems Development</span></Link></div>
                </div>
                {/* Copyright */}
                <div className="right copyright font-formular-mono text-sm">
                   <span className="font-fontspring text-sm">© </span>2025<span className="font-trapix"> SAMAHAN On the Move</span>
                </div>
            </div>
        </footer>
    )
}