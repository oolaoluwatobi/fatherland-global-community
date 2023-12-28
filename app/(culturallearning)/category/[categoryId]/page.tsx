import React from "react";
import { classTeachers } from "@/lib/data2";
import Image from "next/image";
import HeroCat from "../components/HeroCat";
import Getstarted from "../components/Getstarted";
import Faq from "../../exploreculturallearning/components/Faq";
import Youmayalsolike from "./components/Youmayalsolike";
import Aside from "./components/Aside";
export default function page({ params }: { params: { categoryId: string } }) {
  const renderTutors = classTeachers.find(
    (teacher) => teacher.id === params.categoryId
  );
  console.log(renderTutors);
  return (
    <section>
      <HeroCat />
      <div className="max-w-7xl mx-auto  lg:pr-[5rem] lg:flex container">
        <Aside />
        <div className="lg:grid grid-cols-2 gap-12 ">
          <Image
            src={renderTutors?.image1!!}
            alt={renderTutors?.id!!}
            className="lg:w-[25.875rem] lg:h-[375px] mb-5 lg:mb-0"
          />
          <Image
            src={renderTutors?.image2!!}
            alt={renderTutors?.id!!}
            className="lg:w-[25.875rem] lg:h-[375px] mb-5 lg:mb-0"
          />
          <Image
            src={renderTutors?.image3!!}
            alt={renderTutors?.id!!}
            className="lg:w-[25.875rem] lg:h-[375px] mb-5 lg:mb-0"
          />
          <Image
            src={renderTutors?.image4!!}
            alt={renderTutors?.id!!}
            className="lg:w-[25.875rem] lg:h-[375px] mb-5 lg:mb-0"
          />
        </div>
      </div>
      <div className="items-center max-w-7xl mx-auto container lg:pb[3.875rem] pb5 lg:mt-24 lg:mb-[2.875rem] mb-5">
        <p className="text-black lg:text-[40px] text-base font-bold lg:leading-10 break-words text-center lg:text-start">
        You May Also Like
        </p>
      </div>
      <Youmayalsolike />
      <Getstarted />
      <Faq />
    </section>
  );
}
