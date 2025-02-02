/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Container from "../ui/container";
import { ChevronRight, Home } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "../ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import TalentCard from "./talent-card";

const JobsSection = () => {
  const array = Array.from({ length: 5 });
  return (
    <Container>
      <div className="text-white">
        <div className="flex items-center gap-2">
          <Home /> <ChevronRight size={20} />{" "}
          <p className="opacity-80 text-lg">Hire Developers</p>
        </div>
        <div className="mt-10 flex items-center gap-10">
          <p>Filter By</p>
          <Select>
            <SelectTrigger className="w-[180px] p-5 round-md">
              <SelectValue placeholder="Select a skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className=" ">
                <SelectLabel>Skills</SelectLabel>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="nextjs">Nextjs</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] p-5 rounded-md">
              <SelectValue placeholder="Select a skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Notice Period</SelectLabel>
                <SelectItem value="immediately">
                  Immediately Available
                </SelectItem>
                <SelectItem value="1-15 days">1-15 days</SelectItem>
                <SelectItem value="16-30 days">16-30 days</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* job section */}
        <div className=" mt-10 lg:flex lg:justify-between">
          {/* dynamic data */}
          <div className="lg:w-[60%] flex flex-col items-center gap-10  ">
            {/* Your job listings here */}
            {array.map((_, index) => (
              <TalentCard key={index} />
            ))}
          </div>

          {/* sticky section */}
          <div className="flex flex-col gap-5 sticky top-4 lg:w-[35%] border p-8 rounded-lg h-fit">
            <h3 className="font-mono text-[30px] leading-[38px] tracking-[-0.15px]">
              99% of Flexiple's clients hire talent after a risk-free trial.
            </h3>
            <p>
              Flexiple's meticulous screening and matching process connects you
              with exceptional developers perfectly aligned to your specific
              needs.
            </p>
            <Button className="bg-white text-black w-full font-mono hover:bg-[#CECECF]">
              Book a call
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default JobsSection;
