import { Metadata } from "next";
import HomePageClient from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: "SAMAHAN Website 2025-2026",
  description: "Frontend for Samahan Website",
};

export default function Home() {
  return (
    <>
      <HomePageClient />
    </>
  );
}
