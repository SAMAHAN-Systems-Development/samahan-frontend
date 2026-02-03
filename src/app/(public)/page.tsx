import { Metadata } from "next";
import Head from "next/head";
import HomePageClient from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: "SAMAHAN Website 2025-2026",
  description: "Frontend for Samahan Website",
};

export default function Home() {
  return (
    <>
      <Head>
				<link
					rel="shortcut icon"
					href={"/images/favicon.ico?v=M44lzPylqQ"}
				/>
				<link
					rel="apple-touch-icon"
					href={"/images/apple-touch-icon.png"}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={"/images/favicon-32x32.png"}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={"/images/favicon-16x16.png"}
				/>
				<link
					rel="mask-icon"
					href={"/images/safari-pinned-tab.svg?v=M44lzPylqQ"}
					color="#000000"></link>
			</Head>
      <HomePageClient />
    </>
  );
}
