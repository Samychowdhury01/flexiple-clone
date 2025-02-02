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
          <Home /> <ChevronRight size={20} />
          <p className="opacity-80 text-lg">Hire Developers</p>
        </div>
        <div className="mt-10 flex items-center gap-10 text-accent-foreground">
          <p>Filter By</p>
          <Select>
            <SelectTrigger className="w-[180px] p-5 round-md">
              <SelectValue placeholder="Select a skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className=" text-accent border-none outline-0">
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
export default JobsSection;
