
import React from "react";
import GradientBgComponent from "../ui/gradient-bg-component";
import Container from "../ui/container";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    title: "What is Flexiple's process?",
    content:
      "Our process is fairly straightforward. We understand your requirements in detail and recommend freelancers per your specific needs. You can interview the freelancers we recommend though they are already vetted by us rigorously. Once you like someone and decide to work with them, we draw up a tripartite agreement. You work directly with the freelancer, just the invoicing is done by Flexiple.",
  },
  {
    title: "Is there a project manager assigned to manage the resources?",
    content:
      "Our core strength is with freelance developers and designers. Though we do have senior engineers who can work as tech leads, project managers are not part of our offering.",
  },
  {
    title: "What is Flexiple's model?",
    content:
      "We typically work on an hourly model of upwards of US$30 per hour. For full-time longer term engagements, we can also work on a monthly model of upwards of US$5000 per month.The rates vary depending on the skill sets, experience level and location of the freelancer.",
  },
  {
    title: "Are there any extras charges?",
    content:
      "The hourly/ monthly rate shared is all-inclusive. No additional charges other than taxes are applicable.",
  },
];
const FaqSection = () => {
  return (
    <Container>
      <div className="relative text-white pb-20">
        <GradientBgComponent />
        <div className="w-full mx-auto md:grid md:grid-cols-12">
          <div className="col-start-1 col-end-5 pt-[30px] max-lg:mb-5 tracking-tighter flex flex-col items-center md:items-start gap-8">
            <h3 className="text-2xl md:h1 font-supply text-center md:text-start w-1/2 md:w-full mx-auto">
              Frequently Asked Questions
            </h3>
            <Button className="text-black bg-white hover:bg-[#CECECF] md:text-lg py-3">
              View all FAQs <ArrowRight />
            </Button>
          </div>
          <div className="col-start-6 col-end-13">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={faq?.title} className="p-3 md:p-7">
                  <AccordionTrigger className="tracking-tighter">
                    {faq?.title}
                  </AccordionTrigger>
                  <AccordionContent className="md:text-lg">
                    {faq?.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FaqSection;
