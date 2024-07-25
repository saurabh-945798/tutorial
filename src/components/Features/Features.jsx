import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-24 bg-neutral-50" id='Features' smooth={true}
    duration={500}>
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-20 max-w-5xl">
          <h1 className="relative text-6xl sm:text-9xl xl:text-11xl font-semibold font-heading">
            <span className="mr-3">Innovate, educate, and</span>
            <span className="relative inline-block">
              <span className="relative z-10">Dominate Online</span>
              <span className="absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full"></span>
            </span>
          </h1>
        </div>
        <h3 className="mb-8 text-4xl font-semibold tracking-tight font-heading">The most important news</h3>
        <div className="flex flex-wrap -m-3 mb-16">
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            <div className="flex flex-col h-full justify-center p-10 bg-white rounded-5xl">
              <div className="flex flex-wrap items-center -m-3 mb-5">
                <div className="w-auto p-3">
                  <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full">
                    <img src="https://static.shuffle.dev/components/preview/5e80167f-76b7-4ee3-bb5e-b8126519dee3/assets/public/mirga-assets/images/features/sticker.svg" alt="logo" />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <h4 className="text-4xl font-medium tracking-tight font-heading">Primary Education (Grades 1-5)
</h4>
                </div>
              </div>
              <p className="text-neutral-600 font-medium tracking-tight">English: Building strong literacy skills, including reading, writing, and comprehension.
  Mathematics: Developing essential arithmetic and problem-solving abilities.
  Science: Encouraging curiosity about the natural world through basic scientific concepts and experiments.
  Social Studies: Understanding community, culture, and geography.
  Art: Fostering creativity and expression through various artistic mediums.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            <div className="mb-6 p-10 bg-white rounded-5xl">
              <div className="flex flex-wrap items-center -m-3 mb-5">
                <div className="w-auto p-3">
                  <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full">
                    <img src="https://static.shuffle.dev/components/preview/5e80167f-76b7-4ee3-bb5e-b8126519dee3/assets/public/mirga-assets/images/features/sticker.svg" alt="" />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <h4 className="text-4xl font-medium tracking-tight font-heading">Secondary (Grades 6-10):

</h4>
                </div>
              </div>
              <p className="text-neutral-600 font-medium tracking-tight">Subjects: English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
Description: Broader curriculum introducing specialized subjects and providing a deeper understanding of each field.</p>
            </div>
            <div className="p-10 bg-white rounded-5xl">
              <div className="flex flex-wrap items-center -m-3 mb-5">
                <div className="w-auto p-3">
                  <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full">
                    <img src="https://static.shuffle.dev/components/preview/5e80167f-76b7-4ee3-bb5e-b8126519dee3/assets/public/mirga-assets/images/features/sticker.svg" alt="" />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <h4 className="text-4xl font-medium tracking-tight font-heading">Senior Secondary (Grades 11-12):

</h4>
                </div>
              </div>
              <p className="text-neutral-600 font-medium tracking-tight">Science Stream:
Subjects: Physics, Chemistry, Biology, Mathematics, Computer Science, English
Description: Focused on advanced scientific and mathematical concepts preparing students for careers in science and technology..</p>
            </div>
          </div>
          <div className="w-full xl:w-1/3 p-3">
            <div className="flex flex-col h-full justify-center p-10 bg-white rounded-5xl">
              <div className="flex flex-wrap items-center -m-3 mb-5">
                <div className="w-auto p-3">
                  <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full">
                    <img src="https://static.shuffle.dev/components/preview/5e80167f-76b7-4ee3-bb5e-b8126519dee3/assets/public/mirga-assets/images/features/sticker.svg" alt="" />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <h4 className="text-4xl font-medium tracking-tight font-heading">Educational Resources
</h4>
                </div>
              </div>
              <p className="text-neutral-600 font-medium tracking-tight">Digital Classrooms: Equipped with technology to enhance interactive learning.
Interactive Learning Modules: Engaging tools to make learning more effective and enjoyable.
Online Educational Platforms: Access to a wide range of online resources for self-paced learning and additional support..</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-auto">
            <a
              href="#"
              className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
            >
              Get consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
