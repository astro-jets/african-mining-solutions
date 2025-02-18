'use client'

import { BsArrowRightCircleFill } from "react-icons/bs";
// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from '@gsap/react'
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CustomEase);

const RegistrationSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const items = gsap.utils.toArray<HTMLDivElement>(".items");

        // Animate images and text with advanced effects
        items.forEach((item, i) => {
            const title = item.querySelectorAll(".item");
            const itemsContainer = item.querySelector(".items-container");

            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 40%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            })
                .fromTo(
                    itemsContainer,
                    { y: 5, opacity: 0, scale: 0 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.8, ease: "expo.in" }
                )

                .fromTo(
                    title,
                    { y: 5, opacity: 0, scale: 0 },
                    { y: 0, opacity: 1, scale: 1, duration: .9, ease: "power2.in", stagger: 0.4, delay: .5 }
                )
        });


    }, []);

    return (
        <section ref={containerRef} className=" w-full min-h-[90vh] overflow-hidden text-white  bg-no-repeat bg-center bg-cover bg-[url('/images/m5.webp')]">
            <div className="h-full min-h-[90vh] w-full  flex items-center px-6 items">
                <div className="items-container ease-in flex flex-col w-[55%] min-h-[60vh] rounded-2xl overflow-hidden space-y-6 justify-center shadow-xl shadow-gray-400 p-6 backdrop-blur-xl">
                    <p className="text-xl font-thin item">Registration</p>
                    <h1 className="text-5xl item">Working with AMS</h1>
                    <p className="text-xl font-thin item">With expanding operations and new projects across all business areas, there's plenty of opportunity to grow your business with AMS.</p>
                    <button className="bg-black/30 item  p-2 rounded-2xl w-40 text-center font-semibold flex justify-around items-center">
                        Learn more <BsArrowRightCircleFill className="fill-white" size={30} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default RegistrationSection;