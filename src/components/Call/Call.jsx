import React from "react";

export default function FeatureSection() {
  return (
    <section className="py-24 relative bg-white overflow-hidden" >
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-md lg:max-w-2xl mx-auto text-center">
          <span className="text-gray-400 uppercase" >New feature</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mt-2 mb-6">
            <span>Take </span>
            <span className="text-indigo-200"> quick action to boost  </span>
            <span>your child's academic success!.</span>
          </h1>
          <p className="leading-8 mb-10">
          If you've ever wondered how to provide the best education for your child, Springdale Public School is the place for you. Take a big step forward in securing a bright future for your child with our outstanding educational programs and resources. Join us and watch them excel!
          </p>
          <div className="flex flex-wrap -mx-2 -mb-2 justify-center items-center">
            <div className="w-full md:w-auto px-2 mb-2">
              <a
                className="block w-full md:w-auto py-3 px-8 text-center text-black font-bold bg-indigo-200 hover:bg-indigo-300 transition duration-200"
                href="#"
              >
                Admission
              </a>
            </div>
            <div className="w-full md:w-auto px-2 mb-2">
              <a
                className="block w-full md:w-auto py-3 px-8 text-center bg-transparent text-black font-bold border border-indigo-200 hover:bg-indigo-200 transition duration-200"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-full md:flex md:flex-col md:justify-center">
        <div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 "></div>
        <div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 "></div>
        <div className="h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64"></div>
      </div>
      <div className="absolute top-0 right-0 h-full md:flex md:flex-col md:justify-center">
        <div className="mb-8 h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64 "></div>
        <div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 "></div>
        <div className="hidden md:block h-32 lg:h-64 w-32 lg:w-64 "></div>
      </div>
    </section>
  );
}
