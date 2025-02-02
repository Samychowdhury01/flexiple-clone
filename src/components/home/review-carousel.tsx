"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ReviewCard from "./review-card";
import { TReview } from "@/types/types.review";

const CarouselPlugin: React.FC<{ reviews: TReview[] }> = ({ reviews }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="w-full py-12">
      <Carousel
        // plugins={[plugin.current]}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-7xl mx-auto px-6 overflow-hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        ref={emblaRef}
      >
        <CarouselContent className="-ml-6">
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="pl-6 md:basis-1/2 lg:basis-1/3 overflow-hidden"
            >
              <ReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" /> */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-16 rounded-full transition-colors duration-300 ${
                index === selectedIndex ? "bg-purple-600" : "bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPlugin;
