import React from 'react';


const CommunitySection = () => {
  return (
    <section className="py-12 md:py-24 bg-neutral-50" id='Student' smooth={true}
    duration={500}>
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-28 max-w-3xl">
          <h1 className="relative text-6xl sm:text-9xl xl:text-11xl max-w-xl xl:max-w-3xl font-semibold font-heading">
            <span className="mr-3">Join Us And Change</span>
            <span className="relative inline-block">
              <span className="relative z-10">Your future.</span>
              <span className="absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full"></span>
            </span>
          </h1>
        </div>
        <div className="flex flex-wrap -m-3 mb-16">
          <div className="w-full md:w-1/2 p-3">
            <div className="relative overflow-hidden">
              <img
                className="rounded-4xl transform transition duration-300 hover:scale-105 hover:brightness-110 w-full object-cover"
                style={{ height: '666px' }}
                src="https://static.shuffle.dev/components/preview/5e80167f-76b7-4ee3-bb5e-b8126519dee3/assets/public/mirga-assets/images/features/woman.jpg"
                alt=""
              />
              <p className="absolute bottom-0 left-0 px-14 pb-16 text-xl text-white font-semibold tracking-tight">
              "Where Excellence Meets Innovation in Education."

              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <div className="relative overflow-hidden">
            <img
              className="rounded-4xl transform transition duration-300 hover:scale-105 hover:brightness-110 w-full object-cover"
             style={{ height: '666px' }}
              src="https://ucarecdn.com/833d0fe1-c3b5-4843-b62c-fed9467aceeb/imageOfMyself.jpeg"
  alt=""
/>

              <div className="absolute top-0 left-0 px-14 py-16 flex flex-col justify-between h-full">
                <h3 className="mb-8 text-5xl text-white font-semibold tracking-tight max-w-xs font-heading">
                  Augmented Reality Experiences.
                </h3>
                <p className="text-xl text-white font-semibold tracking-tight">
                Committed to Excellence, Driven by Passion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-auto">
            <a
              className="inline-flex justify-center bg-black items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
              href="#"
            >
              Admission Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
