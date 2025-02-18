import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt } from "react-icons/fa";
import { BsEnvelope, BsPhoneFlip, BsTwitterX } from "react-icons/bs";

const About = () => {
    return (
        <div className="h-full">
            {/* Mission Statement */}
            <section className="flex items-center bg-stone-100 h-full font-poppins dark:bg-[#111]">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto h-full space-y-8 lg:py-6 md:px-6">
                    <div className="px-4 mb-10 md:text-center md:mb-20">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                            About us
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Get to know us, take a look at we do.
                        </p>
                    </div>

                    <div className="w-full px-4 mb-10 lg:mb-0 ">
                        <h2
                            className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                            Who we are
                        </h2>
                        <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            Corporate Link Africa is a dynamic and forward-thinking media company at the forefront of connecting
                            businesses to the heart of the African corporate landscape. As a trusted source of information and a
                            strategic partner for corporations, we go beyond traditional news reporting, offering a
                            comprehensive suite of media services to meet the diverse needs of businesses operating in Africa.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                Our Mission
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                To be the premier media company dedicated to weaving a comprehensive narrative of the corporate world in Africa.
                            </p>
                        </div>

                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                Our Vision
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                To create a seamless link between corporations and the public, providing a multifaceted platform that not only delivers news but also offers a spectrum of media-related services.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <Image width={500} height={500} src="/src/img/is.jpg" alt="ads" className="relative z-40 object-cover w-full h-96 rounded-lg" />
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                What We Are
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Corporate Link Africa is more than a news publication; we are a dynamic media company uniquely positioned to cater to the diverse needs of the corporate world in Africa. Our team of dedicated professionals combines journalistic expertise with a deep understanding of media dynamics to offer a holistic suite of services.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                What we are not
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                We are not just another news outlet. We do not compromise on the quality of our content, and we are not driven by sensationalism. Corporate Link Africa is a reliable, strategic partner for businesses looking to enhance their corporate image and navigate the media landscape.
                            </p>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <Image alt="image" width={500} height={500} src="/src/img/not.jpg" className="relative z-40 object-cover w-full h-96 rounded-lg" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row flex-wrap ">
                        {/* Policy */}
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                Our Policy
                            </h2>
                            <div className="flex-col">
                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Unbiased Reporting</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        Our commitment to unbiased reporting remains unwavering. We adhere to the highest standards of journalistic integrity, ensuring that our news and media services are impartial and credible.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Transparency</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        We believe in transparent communication, from our editorial processes to our media strategy development. Trust is the cornerstone of our relationship with our audience.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Ethical Journalism</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        Our dedication to ethical journalism guides our practices, ensuring that our content is not only accurate but also respectful and accountable.
                                    </p>
                                </div>


                            </div>
                        </div>

                        {/* Choose Us */}
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                                How Different Are We From Others <span className="text-red-500 font-bold">?</span>
                            </h2>
                            <div className="flex-col">
                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Holistic Media Solutions</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        We offer a complete suite of media services, including news coverage, PR, advertising, content creation, and more, providing a one-stop solution for all your corporate communication needs.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Skilled Content Producers</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        Our team includes skilled content producers and scriptwriters who bring a creative edge to every project, ensuring your message is not only communicated effectively but resonates with your audience.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Ethical Journalism</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        We prioritize ethical journalism, ensuring that our content is unbiased, transparent, and accountable. Our commitment to integrity sets us apart in the media landscape.
                                    </p>
                                </div>

                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Comprehensive Coverage</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        From news reporting to in-depth analysis and sector-specific reports, we provide a comprehensive view of the African business landscape, empowering businesses with the insights they need to succeed.
                                    </p>
                                </div>
                                <div className="flex-col">
                                    <h4 className="text-black dark:text-white text-xl">Strategic Partnerships</h4>
                                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        We go beyond being a service provider; we are your strategic partner in navigating the complexities of the African corporate landscape, offering insights, expertise, and tailored solutions to support your business goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center px-4 lg:mb-0 space-y-4">
                        <p className="w-full mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            Choose Corporate Link Africa for a holistic media experience that seamlessly integrates news reporting with strategic communication solutions, connecting your business to the heart of corporate Africa.
                        </p>
                        <div className="flex justify-around w-full">
                            <li className="flex space-x-4"><BsPhoneFlip size={20} color={"#000"} /><p>+265 (0) 885631138 / 997572483</p> </li>
                            <li className="flex space-x-4"><BsEnvelope size={20} color={"#000"} /><p>corporatelinkafrica@gmail.com</p> </li>
                            <li className="flex space-x-4"><FaMapMarkedAlt size={20} color={"#000"} /><p>Feeamanilah Building, Room 19, Limbe Blantyre</p> </li>
                        </div>
                        <div className="flex justify-around w-1/2">
                            <a href="https://www.linkedin.com/company/82323263/admin/feed/posts/"><FaLinkedin size={20} color="#000" /></a>
                            <a href="https://www.facebook.com/profile.php?id=61554654021876"><FaFacebook size={20} color="#000" /></a>
                            <a href="https://www.twitter.com"><BsTwitterX size={20} color="#000" /></a>
                            <a href="https://www.instagram.com"><FaInstagram size={20} color="#000" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;