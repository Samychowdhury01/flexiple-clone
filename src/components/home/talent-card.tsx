import { Banknote, Briefcase, BriefcaseBusiness, Calendar } from "lucide-react";
import React from "react";

const TalentCard = () => {
  return (
    <div className="rounded-[10px] border duration-100 ease-out w-full !p-5">
      <div>
        <h3 className="text-[40px] leading-[48px]  font-supply font-medium tracking-[-0.15px] order-last md:order-first">
          Shubham Singh
        </h3>
        <div className="flex-wrap gap-x-6 gap-y-1 md:flex mt-5 text-accent-foreground">
          <div className="flex items-center gap-2">
            <Briefcase />
            <p>Experience: 4.2 years</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar />
            <p>Notice: </p>
          </div>
          <div className="flex items-center gap-2">
            <Banknote />
            <p>Current CTC: 4.2 years</p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="mx-auto h-[1px] w-full bg-gray-400 my-5"
        ></div>
        <div>
          <p className="text-accent-foreground">Worked at:</p>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness />
              <div>
                <p className="text-lg font-bold">Senior Full Stack Engineer</p>
                <p className="text-accent-foreground">Lenek Tech</p>
              </div>
            </div>
            <div className="text-accent-foreground">Oct 22 -Present</div>
            <div></div>
          </div>
          <div className="flex items-center mt-10">
            <p className="px-2.5 py-[5px] rounded-full border border-dGrey1/60 dark:border-white/60 bg-dGrey1/10 dark:bg-white/10 text-sm dark:text-white whitespace-nowrap flex items-center gap-1 md:text-sm !border-[#FFFFFF80] !bg-[#00000066]">
              Javascript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
