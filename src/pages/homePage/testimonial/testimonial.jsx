import { TestimonialCard } from "./testimonialCard";
import { useState } from "react";


export function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  function toggleReview(){
    setShowAll(!showAll)
  }

  return (
    <>
      <section className="grid grid-cols gap-6 place-items-center
         overflow-scroll h-screen w-screen snap-center snap-always
         pt-20 xl:pt-10 pb-20 px-4 lg:pl-15 xl:pl-70 2xl:pl-70 overflow-x-hidden
         ">
        <h2 className="text-center text-gray-800 font-medium text-2xl lg:text-3xl xl:text-4xl py-6">How Others Describe Me</h2>
        <div className="max-w-6xl grid grid-cols lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          <TestimonialCard showAll={showAll} />
        </div>
        <button 
        className="underline text-lg cursor-pointer text-gray-500" 
        onClick={toggleReview}
        >{showAll ? "Show less" : "Show more" }</button>
      </section>
    </>
  );
}
