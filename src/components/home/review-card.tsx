import { TReview } from "@/types/types.review";
import Image from "next/image";
import React from "react";

const ReviewCard: React.FC<{ review: TReview }> = ({ review }) => {
  return (
    <div className="group relative rounded-[10px] p-[1px] transition-all duration-300 ease-linear bg-gradient-to-b from-[#FFFFFF08] to-[#FFFFFF1A] hover:card-gradient-border">
      <div className="relative rounded-[9px] w-full h-full p-6 lg:p-10 flex min-h-[300px] flex-col justify-between gap-4 bg-muted  group-hover:card-gradient-bg transition-colors md:min-h-[388px] border border-gray-200/40 group-hover:border-transparent">
        <p className="text-white/90 text-lg">&quot;{review?.review}&quot;</p>
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 relative rounded-full overflow-hidden">
            <Image
              src={
                "https://ik.imagekit.io/6eslefmcf/flexiple/testimonial-section-images/tr:w-100/Vyas_NOQh6ZUJQI.jpeg"
              }
              height={50}
              width={50}
              alt="review author image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium tracking-[-0.15px] text-white">
              {review.authorName}
            </p>
            <p className="text-sm text-white/70">{review.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
