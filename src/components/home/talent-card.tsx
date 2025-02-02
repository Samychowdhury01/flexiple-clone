import { Banknote, Briefcase, BriefcaseBusiness, Calendar } from "lucide-react";
import React from "react";

const TalentCard = () => {
  return (
    <div className="rounded-[10px] border border-[rgba(255,255,255,0.4)]duration-100 ease-out w-full !p-5">
      <div>
        <h3 className="text-[40px] leading-[48px]    font-medium tracking-[-0.15px] order-last md:order-first">
          Shubham Singh
        </h3>
        <div className="flex-wrap gap-x-6 gap-y-1 md:flex mt-5">
          <div className="flex items-center gap-2">
            <Briefcase />
            <p>Experience: 4.2 years</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar />
            <p>Notice: 4.2 years</p>
          </div>
          <div className="flex items-center gap-2">
            <Banknote />
            <p>Current CTC:: 4.2 years</p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="mx-auto h-[1px] w-full bg-gray-400 my-5"
        ></div>
        <div>
          <p>Worked at:</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness />
              <div>
<p className="text-lg font-bold">Senior Full Stack Engineer</p>
<p>Lenek Tech</p>
              </div>
            </div>
            <div>
                Oct 22 -Present
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
