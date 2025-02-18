
import LegacySection from "@/components/legacy/LegacySection";
import RegistrationSection from "@/components/registration/RegistrationSection";
import ServicesComponent from "@/components/services/services";
import Slider from "@/components/slider/Slider";
import Image from "next/image";
import { BsArrowRight, BsArrowRightCircle, BsEnvelope, BsFacebook, BsLinkedin, BsPhone, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const artists = [
  { id: 1, name: "Engineering and Construction Department", subtitle: 'Engineering', image: '/images/m1.webp' },
  { id: 2, name: "Irone Ore ", image: '/images/m2.webp', },
  { id: 3, name: "Mining and Processing", image: '/images/m3.webp' },
  { id: 4, name: "Supply chain and site services", image: '/images/m4.webp', },
  { id: 5, name: "Energy", image: '/images/m5.webp', },
  { id: 5, name: "Lithium", image: '/images/m6.webp', },
]


export default function Home() {
  return (
    <div className="w-full flex flex-col bg-white text-black">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[90vh] w-full relative">
        <div className="absolute top-20 left-20 text-white flex flex-col w-2/4 z-9 p-4 rounded-3xl h-f bg-black/30 backdrop-blur-sm space-y-8">
          <h1 className="text-8xl font-bold"><span className="font-thin text-7xl capitalize">Welcome to<br /></span> mine corp.</h1>
          <button className="rounded-3xl p-3 bg-white text-black flex justify-between w-60">
            <span className="text-2xl">Our Business</span>
            <BsArrowRightCircle className="fill-black" size={30} />
          </button>
          <p className="text-xl w-3/4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum unde nemo, mollitia voluptatibus, possimus ullam maxime sed quas autem tempora ratione. Totam enim corporis consequatur sit aut nam quidem?</p>
        </div>
        <Slider />
      </section>


      {/* Services Section */}
      <ServicesComponent />

      {/* Registration Section */}
      <RegistrationSection />

      {/* Legacy Section */}
      <LegacySection />


      {/* Nesletter section */}
      <section>
        <div className="w-full mx-auto mt-8 px-4 sm:px-6">
          <div className="pb-12 md:pb-20">

            {/* CTA box */}
            <div className="relative bg-black/80 backdrop-blur-lg rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

              {/* Background illustration */}
              <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                      <stop stopColor="#DFDFDF" offset="0%" />
                      <stop stopColor="#4C4C4C" offset="44.317%" />
                      <stop stopColor="#333" offset="100%" />
                    </radialGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g fill="#FFF">
                      <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                      <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                      <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                      <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                    </g>
                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                  </g>
                </svg>
              </div>

              <div className="relative flex flex-col lg:flex-row justify-between items-center">

                {/* CTA content */}
                <div className="text-center lg:text-left lg:max-w-xl">
                  <h3 className="h3 text-white mb-2">Want more tutorials & guides?</h3>
                  <p className="text-gray-300 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>

                  {/* CTA form */}
                  <form className="w-full lg:w-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                      <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                      <a className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 shadow" href="#0">Subscribe</a>
                    </div>
                    {/* Success message */}
                    {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                    <p className="text-sm text-gray-400 mt-3">No spam. You can unsubscribe at any time.</p>
                  </form>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400">
        {/*Footer content*/}
        <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
            <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
              <div className="flex-shrink max-w-full w-full md:w-1/4 lg:w-2/5 px-3 lg:pr-16">
                <div className="flex  mb-2">
                  {/* <img src="/src/img/logo.png" className="w-1/4 h-auto object-cover" alt="LOGO"/> */}
                  <span className="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">African Mining Solutions</span>
                </div>

                <p>Simplified Mining Business.</p>

                <ul className="flex space-x-8 mt-6 mb-6 Lg:mb-0">
                  {/*facebook*/}
                  <li className="inline-block">
                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://facebook.com" title="Facebook">
                      <BsFacebook size={20} color={"#fff"} />
                    </a>
                  </li>
                  {/*twitter*/}
                  <li className="inline-block">
                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://twitter.com" title="Twitter">
                      <BsTwitterX size={20} color={"#fff"} />
                    </a>
                  </li>
                  {/*youtube*/}
                  <li className="inline-block">
                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://youtube.com" title="Youtube">
                      <BsYoutube size={20} color={"#fff"} />
                    </a>
                  </li>
                  {/*instagram*/}
                  <li className="inline-block">
                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://instagram.com" title="Instagram">
                      <BsLinkedin size={20} color={"#fff"} />
                    </a>
                  </li>{/*end instagram*/}
                </ul>
              </div>

              <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
                <div className="flex flex-wrap flex-row">
                  {/* Services */}
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Services</h4>
                    <ul>
                      <li className="py-1 hover:text-white"><a href="/services">Engineering & Construction</a></li>
                      <li className="py-1 hover:text-white"><a href="/services">Mining Operations</a></li>
                      <li className="py-1 hover:text-white"><a href="/services">Energy</a></li>
                      <li className="py-1 hover:text-white"><a href="/services">Gold</a></li>
                      <li className="py-1 hover:text-white"><a href="/services">Diamonds</a></li>
                      <li className="py-1 hover:text-white"><a href="/services">Uranium</a></li>
                      <li className="py-1 hover:text-white"><a href="/services">Bauxide</a></li>
                    </ul>
                  </div>

                  {/* About us */}
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">About us</h4>
                    <ul>
                      <li className="py-1 hover:text-white"><a href="/about">Our Mission</a></li>
                      <li className="py-1 hover:text-white"><a href="/about">Our Vision</a></li>
                      <li className="py-1 hover:text-white"><a href="/about">Our Story</a></li>
                      <li className="py-1 hover:text-white"><a href="/about">Our Team</a></li>
                    </ul>
                  </div>

                  {/* Contact US */}
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Contact Us</h4>
                    <ul>
                      <li className="py-1 hover:text-white">
                        <a href="#" className="flex space-x-4">
                          <BsEnvelope size={20} color={'#fff'} />
                          <p>info@clafrica.online</p>
                        </a>
                      </li>

                      <li className="py-1 hover:text-white">
                        <a href="#" className="flex space-x-4">
                          <BsPhone size={20} color={'#fff'} />
                          <p>+265 885 631 138</p>
                        </a>
                      </li>

                      <li className="py-1 hover:text-white">
                        <a href="#" className="flex space-x-4">
                          <BsPhone size={20} color={'#fff'} />
                          <p>+265 997 572 483 </p>
                        </a>
                      </li>

                      <li className="py-1 hover:text-white">
                        <a href="#" className="flex space-x-2">
                          <FaMapMarkerAlt size={20} color={'#fff'} />
                          <p>Somewhere in south agrica</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Start footer copyright*/}
        <div className="footer-dark">
          <div className="container py-4 border-t border-gray-200 border-opacity-10">
            <div className="row">
              <div className="col-12 col-md text-center">
                <p className="d-block my-3">Copyright © Africa Mining Solutions | All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>{/*End footer copyright*/}
      </footer>
    </div>
  );
}
