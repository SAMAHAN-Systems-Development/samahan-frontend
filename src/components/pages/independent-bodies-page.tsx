import React from "react";
import IndependentBodies from "../ui/independent-bodies";

function IndependentBodiesPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-20"></div>
      <IndependentBodies
        image={{
          imgSource: "/images/placeholder.png",
          imgAlt: "placeholder",
        }}
        organizationName="COMMISSION ON STUDENTS' RIGHTS AND WELFARE"
        facebookName="SAMAHAN Commission on Students' Rights and Welfare"
        facebookLink={"https://www.facebook.com"}
      />
      <div className="h-20"></div>
    </div>
  );
}

export default IndependentBodiesPage;
