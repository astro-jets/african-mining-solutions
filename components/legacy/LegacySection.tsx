"use client"
import { useRef } from "react";

import Image from "next/image";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CustomEase);


const LegacySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const items = gsap.utils.toArray<HTMLDivElement>(".items");

        // Animate images and text with advanced effects
        items.forEach((item, i) => {
            const imageItem = item.querySelectorAll(".item-image");
            const textItem = item.querySelectorAll(".item-text");

            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            })
                .fromTo(
                    imageItem,
                    { x: -400, opacity: 0.8, scale: 0.7 },
                    { x: 0, opacity: 1, scale: 1, duration: .5, ease: "power2.in" }
                )
                .fromTo(
                    textItem,
                    { x: 25, opacity: 0.8, scale: 0.8 },
                    { x: 0, opacity: 1, scale: 1, duration: .4, delay: -.3, ease: "power2.in" }
                )
        });


    }, []);
    return (
        <section ref={containerRef} className="w-full min-h-[90vh]  flex justify-between items-center items  p-6">
            <div className="rounded-3xl w-[45%] min-h-50 max-h-[70vh] overflow-hidden item-image">
                <Image height={560} width={700} src="/images/m6.webp" className="object-cover w-full h-full" alt="Landwind Logo" />
            </div>
            <div className=" item-text flex flex-col w-[45%] min-h-60 overflow-hidden space-y-6 justify-center">
                <h1 className="text-5xl">Building a legacy</h1>
                <p className="text-xl font-thin">AMS is growing as an industry leader on the back of our desire to think differently, navigate changing operating landscapes and seize new opportunities.</p>
                <div className="border-black border-2 p-2 rounded-2xl w-40 text-center font-semibold">
                    Learn more
                </div>
            </div>

        </section>
    );
}

export default LegacySection;