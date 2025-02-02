/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "../ui/container";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className=" text-white py-20 md:py-24">
      <Container>
        <div className="flex max-w-[960px] flex-col items-start gap-10 mx-auto md:items-center text-center ">
          <h1 className="text-[52px] leading-[60px] tracking-[-0.13em] font-supply font-medium">
            Hire .NET Developers: Affordable, Dedicated .NET Experts in 72 hours
          </h1>
          <p className="text-xl">
            Hire .NET developers to
            <strong>enhance your project's efficiency and productivity</strong>.
            Build dynamic web applications using
            <strong>ASP.NET, C#, Entity Framework, and MVC</strong>.
          </p>
          <p className="text-xl">
            Access 100+ expert NET developers, engineers and architects from
            Flexiple, handpicked through a 5-hour evaluation process.
          </p>
          <Button className="text-black bg-white hover:bg-[#CECECF] text-lg">
            Hire dream developer <ArrowRight />
          </Button>
          <div>
            <div className="flex items-center gap-2 justify-center mb-3">
              {Array.from({
                length: 5,
              }).map((_, index) => (
                <Star
                  key={index}
                  className="fill-white outline-white border-white"
                />
              ))}
            </div>
            <p className="text-xl">
              Clients rate Flexiple .NET developers <strong>4.8 / 5</strong> on
              average based on 10,482 reviews.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
