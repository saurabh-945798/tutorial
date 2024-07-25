import React, { useState } from "react";
import { Link, Element } from "react-scroll";

export default function MyComponent() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="relative pb-24">
      <div className="hidden md:block py-72 lg:py-96 absolute top-0 left-0 right-0 bg-white"></div>
      <nav className="relative py-10" data-config-="data-config-">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between relative">
            <a className="inline-block w-16" href="#">
              <img
                src="https://c8.alamy.com/comp/2B3J431/initial-letter-ss-logo-design-vector-template-ss-letter-logo-design-2B3J431.jpg"
                alt="logo"
                width="116"
              />
            </a>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
                  fill="#000"
                ></path>
              </svg>
            </button>
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ul className="inline-flex">
                <li className="mr-8">
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-8">
                  <Link
                    to="Student"
                    smooth={true}
                    duration={500}
                    className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li className="mr-8">
                  <Link
                    to="Features"
                    smooth={true}
                    duration={500}
                    className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                  >
                    Academics
                  </Link>
                </li>
                <li className="mr-8">
                  <Link
                    to="Work"
                    smooth={true}
                    duration={500}
                    className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                  >
                    Admissions
                  </Link>
                </li>
                <li className="mr-8">
                  <Link
                    to="Team"
                    smooth={true}
                    duration={500}
                    className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                  >
                    Faculty
                  </Link>
                </li>
                <li className="mr-8">
                  <Link
                    to="gallery"
                    smooth={true}
                    duration={500}
                    className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="mr-8">
                  <Link
                    to="Login"
                    smooth={true}
                    duration={500}
                    className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block ml-auto">
              <a
                className="inline-block px-8 py-3 text-white font-bold bg-black hover:bg-gray-900"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-20 items-center">
          <div className="w-full lg:w-1/2 xl:w-2/3 px-4 mb-8 lg:mb-0">
            <Element name="home">
              <h1 className="text-5xl lg:text-6xl font-heading mb-6">
                Springdale Public School
              </h1>
              <a
                className="inline-block w-full md:w-auto text-center px-8 py-3 text-white font-bold bg-black hover:bg-gray-900"
                href="#"
              >
                Learn More
              </a>
            </Element>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
            <Element name="about">
              <p className="leading-8 max-w-sm">
                Welcome to Springdale Public School, where we nurture young
                minds for a brighter future
              </p>
            </Element>
          </div>
        </div>
        <div>
          <img
            className="block w-full mb-10 transform transition duration-300 hover:scale-105 hover:brightness-110"
            src=""
            alt=""
          />
          <div className="flex justify-center">
            <h5 className="text-xl font-heading"></h5>
            <img
              className="mx-5 transform transition duration-300 hover:scale-105 hover:brightness-110"
              src="https://static.shuffle.dev/components/preview/f84fdd48-b58b-484e-a42d-767e9351ba00/assets/public/pstls-assets/images/headers/headers-2-building.jpg"
              alt="line"
            />
            <h5 className="text-xl font-heading"></h5>
          </div>
        </div>
      </div>
      <div
        className={`${mobileNavOpen ? "block" : "hidden"} fixed top-0 left-0 bottom-0 w-3/4 max-w-xs z-50`}
        data-config-="data-config-"
      >
        <div
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="fixed inset-0 bg-black bg-opacity-75"
        ></div>
        <nav className="relative flex flex-col h-full p-8 bg-white">
          <div className="flex items-center justify-between mb-12">
            <a className="items-center w-16" href="#">
              <img
                src="https://c8.alamy.com/comp/2B3J431/initial-letter-ss-logo-design-vector-template-ss-letter-logo-design-2B3J431.jpg"
                alt="logo"
                width="102"
              />
            </a>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="inline-block focus:outline-none"
              type="button"
              aria-label="Close"
            >
              <img src="pstls-assets/images/navigations/x2.svg" alt="" />
            </button>
          </div>
          <div>
            <ul>
              <li className="py-3">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li className="py-3">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li className="py-3">
                <Link
                  to="Features"
                  smooth={true}
                  duration={500}
                  className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                >
                  Academics
                </Link>
              </li>
              <li className="py-3">
                <Link
                  to="Work"
                  smooth={true}
                  duration={500}
                  className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                >
                  Admissions
                </Link>
              </li>
              <li className="py-3">
                <Link
                  to="Team"
                  smooth={true}
                  duration={500}
                  className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                >
                  Faculty
                </Link>
              </li>
              <li className="py-3">
                <Link
                  to="gallery"
                  smooth={true}
                  duration={500}
                  className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                >
                  Gallery
                </Link>
              </li>
              <li className="py-3">
                <Link
                  to="Login"
                  smooth={true}
                  duration={500}
                  className="inline-block font-bold hover:text-gray-900 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div>
              <a
                className="block px-8 py-3 text-center text-white font-bold bg-black hover:bg-gray-900"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
