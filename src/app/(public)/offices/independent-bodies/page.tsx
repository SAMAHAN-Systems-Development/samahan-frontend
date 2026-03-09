import IndependentBodiesPage from "@/components/pages/independent-bodies-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Independent Bodies - SAMAHAN Website',
  description: 'Explore the independent bodies operating under SAMAHAN.',
}

function Page() {
  return (
    <>
      <IndependentBodiesPage />
    </>
  );
}

export default Page;
