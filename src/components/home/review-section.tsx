import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import author from "@/assets/review-author.webp";

import { getReview } from "@/action/review-action";
import CarouselPlugin from "./review-carousel";

const ReviewSection = async() => {
  const reviews = await getReview();
  return (
    <div className=" text-white py-20 md:py-24">
      <Container>
      <div className="relative"> 
      <div className="gradient-bg w-[1000px] h-[500px] blur-2xl rounded-t-full absolute top-0 left-0 -z-10 transform"></div>
        <div className="mx-auto mb-15 flex max-w-6xl flex-col gap-5 text-center lg:mb-20 w-full md:w-4/5 ">
          <h1 className="font-mono text-[48px] font-bold">
            100+ fast-growing companies love Flexiple!
          </h1>
          <p className="text-xl mx-auto max-w-[800px]">
            Team work makes dreamwork. Flexiple helps companies build the best
            possible team by scouting and identifying the best fit.
          </p>
        </div>
        <div className="mx-auto flex max-w-5xl gap-[30px] max-md:flex-col md:gap-10">
          <div className="relative shrink-0 overflow-hidden rounded-[10px]">
            <Image
              src={author}
              alt="review author image"
              width={400}
              height={350}
              className="h-[350px] w-[400px] object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center gap-10">
            <p className="text-xl">
              “I’ve been pleased with Purab’s performance and work ethics. He is
              proactive in flagging any issues and communicates well. The time
              zone difference is huge but he provides a sufficient overlap. He
              and I work together very well and I appreciate his expertise.”
            </p>
            <div className="flex flex-col gap-2">
              <p className="h2 tracking-[-0.15px] font-supply">
                Paul Cikatricis
              </p>
              <p className="text-lg opacity-80">
                UX and Conversion Optimization Lead
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* review cards */}
     <div className="mt-20">
     <CarouselPlugin reviews={reviews}/>
     </div>
      </Container>
    </div>
  );
};

export default ReviewSection;
