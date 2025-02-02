import { TCandidate } from "@/types/types.candidate";
import { Banknote, Briefcase, BriefcaseBusiness, Calendar } from "lucide-react";
import React from "react";

const TalentCard: React.FC<{ candidate: TCandidate }> = ({ candidate }) => {
  return (
    <div className="rounded-[10px] border duration-100 ease-out w-full !p-5">
      <div>
        <h3 className="text-3xl md:text-[40px] md:leading-[48px]  font-supply font-medium tracking-[-0.15px] order-last md:order-first">
          {candidate?.name}
        </h3>
        <div className="flex-wrap gap-x-6 gap-y-1 md:flex mt-5 text-accent-foreground">
          <div className="flex items-center gap-2">
            <Briefcase />
            <p>Experience: {candidate?.experience} years</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar />
            <p>Notice: {candidate?.notice}</p>
          </div>
          <div className="flex items-center gap-2">
            <Banknote />
            <p>Current CTC: {candidate.ctc}LPA</p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="mx-auto h-[1px] w-full bg-gray-400 my-5"
        ></div>
        <div>
          <p className="text-accent-foreground">Worked at:</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness />
              <div>
                <p className="md:text-lg font-bold">Senior Full Stack Engineer</p>
                <p className="text-accent-foreground">Lenek Tech</p>
              </div>
            </div>
            <div className="text-accent-foreground">Oct 22 -Present</div>
            <div></div>
          </div>
          <div className="flex items-center gap-2 mt-10">
            {candidate?.skills.map((skill, index) => (
              <p
                key={index}
                className="px-2.5 py-[5px] rounded-full border  dark:text-white whitespace-nowrap flex items-center gap-1 text-xs md:text-sm !border-[#FFFFFF80] !bg-[#00000066]"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
