import Image from "next/image";
import React from "react";

const ReviewCard = ({review}) => {
  return (
    <div className="rounded-[10px] border transition-bg duration-100 ease-out w-full h-full p-6 lg:p-10 dark:bg-gradient-to-b from-white/[0.03] to-white/10 hover:carousel-border-dark dark:hover:gradient-border-dark dark:active:gradient-border-dark flex min-h-[300px] flex-col justify-between gap-4 bg-transparent md:min-h-[388px] border-gray-200 dark:border-[rgba(255,255,255,0.4)]">
      <p>{review?.review}</p>
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 ">
          <Image
            src={
              "https://ik.imagekit.io/6eslefmcf/flexiple/testimonial-section-images/tr:w-100/Vyas_NOQh6ZUJQI.jpeg"
            }
            height={50}
            width={50}
            
            alt="review author image"
            className="rounded-full h-full w-full object-cover"
          />
        </div>
     <div className="flex flex-col gap-1">
     <p className="text-lg font-medium tracking-[-0.15px]">{review.authorName}</p>
     <p className="text-sm">{review.position}</p>
     </div>
      </div>
    </div>
  );
};

export default ReviewCard;
