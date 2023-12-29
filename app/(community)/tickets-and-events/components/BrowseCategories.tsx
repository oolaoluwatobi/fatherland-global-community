import Container from "@/components/ui/container";
import { CATEGORIES } from "@/lib/data";
// import React, { ReactNode } from "react";

export default function BrowseCategories() {
  // const renderCategories = CATEGORIES.map((cat) => {
  //   <div className="grid grid-cols-3 mx-auto gap-8">
  //     {CATEGORIES.map((cat, index) => (
  //       <div
  //         key={cat.name}
  //         className={`flex flex-col items-center p-4 rounded bg-secondary-foreground border border-[#FD6906] cursor-pointer ${
  //           index >= 6 ? 'col-span-1 col-start-2 col-end-4' : ''
  //         }`}
  //       >
  //         <div className="bg-red-200 h-10 w-10 rounded-full flex items-center justify-center text-primary">
  //           {cat.icon}
  //         </div>
  //         <p className="mt-2 text-center font-semibold text-primary">{cat.name}</p>
  //       </div>
  //     ))}
  //   </div>
  // });

  return (
    <Container>
      <div className="mt10 px-8">
        <h5 className="lg:text-4xl text-2xl font-[700]  py-5 ">
          Browse Categories
        </h5>
        <div className=" grid lg:grid-cols-3 mx-auto place-items-center gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="flex px-8 py-5 w96 w-full mx-auto rounded bg-secondary-foreground m4 border border-[#FD6906]  cursor-pointer"
            >
              <div className="bg-red-20 my-auto w10 mr-8 text-primary">
                {cat.icon}
              </div>
              <p className="my-auto w-ful text-center bg-red-20 font-[500] lg:text-xl text-sm ">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
