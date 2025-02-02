/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "../ui/container";
import { ChevronRight, Home } from "lucide-react";
import { Button } from "../ui/button";
import SelectForFilterCandidates from "./select-for-filter-candidates";
import { getCandidates } from "@/action/candidate-action";
import TalentCard from "./talent-card";
import { TFilter } from "@/types/types.candidate";

// Add this prop to receive search params
const CandidateSection = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, unknown>>;
}) => {
  // Await the searchParams Promise
  const resolvedParams = await searchParams;
  // Convert searchParams to TFilter
  const filter: TFilter = {
    notice: typeof resolvedParams.notice === 'string' ? resolvedParams.notice : null,
    skill: typeof resolvedParams.skill === 'string' ? resolvedParams.skill : null,
  };
  // Pass the filter to getCandidates
  const candidates = await getCandidates(filter);

  return (
    <Container>
      <div className="text-white">
        <div className="flex items-center gap-2">
          <Home /> <ChevronRight size={20} />
          <p className="opacity-80 text-lg">Hire Developers</p>
        </div>
        <SelectForFilterCandidates />
        {/* job section */}
        <div className=" mt-10 lg:flex lg:justify-between">
          {/* dynamic data */}
          <div className="lg:w-[60%] flex flex-col items-center gap-10">
            {candidates.map((candidate) => (
              <TalentCard key={candidate?.id} candidate={candidate} />
            ))}
          </div>

          <div className="max-w-md p-[1px] rounded-[24px] card-gradient-border h-fit sticky top-4">
            <div className="rounded-[23px] bg-muted card-gradient-bg p-8 h-full">
              <h2 className="text-4xl font-supply mb-6 text-white leading-tight">
                99% of Flexiple's clients hire talent after a risk-free trial.
              </h2>
              <p className="text-gray-400 mb-8">
                Flexiple's meticulous screening and matching process connects
                you with exceptional developers perfectly aligned to your
                specific needs.
              </p>
              <Button
                variant="secondary"
                className="w-full bg-white text-black hover:bg-gray-100 rounded-full"
              >
                Book a consultation call →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CandidateSection;
