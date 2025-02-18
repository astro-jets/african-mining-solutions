'use client'
// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from '@gsap/react'
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CustomEase);

const artists = [
    { id: 1, name: "Engineering and Construction Department", subtitle: 'Engineering', image: '/images/m1.webp' },
    { id: 2, name: "Irone Ore ", image: '/images/m2.webp', },
    { id: 3, name: "Mining and Processing", image: '/images/m3.webp' },
    { id: 4, name: "Supply chain and site services", image: '/images/m4.webp', },
    { id: 5, name: "Energy", image: '/images/m5.webp', },
    { id: 5, name: "Lithium", image: '/images/m6.webp', },
]


const ServicesComponent = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const items = gsap.utils.toArray<HTMLDivElement>(".services");

        // Animate images and text with advanced effects
        items.forEach((item, i) => {
            const serviceImg = item.querySelectorAll(".service-image");
            const textContent = item.querySelectorAll(".text-content");

            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            })

                .fromTo(
                    serviceImg,
                    { y: 5, opacity: 0.3, scale: 0.8 },
                    { y: 0, opacity: 1, scale: 1, duration: .4, ease: "power2.in", stagger: 0.2 }
                )

                .fromTo(
                    textContent,
                    { x: 45, opacity: 0.3 },
                    { x: 0, opacity: 1, duration: .4, ease: "power2.in", delay: -1 }
                )
        });


    }, []);
    return (
        <section ref={containerRef} className=" w-full min-h-[90vh] overflow-hidden text-black">
            <div className="p-6 flex flex-col items-center w-full h-full space-y-4">
                <h1 className="text-xl text-center font-thin text-red-500">Our operations</h1>
                <h1 className="text-5xl text-center font-bold">Our operations</h1>
                <p className="w-1/2 text-center">We are governed by our sustainability practices and maintain our social license to operate by supporting the wellbeing of our people, protecting our environment and making positive contributions to the communities where we operate.</p>
                <div className="grid grid-cols-3 gap-4 gap-y-12 services">
                    {artists.map((artist, index) => (
                        <div
                            key={index}
                            className="flex flex-col " //dark:shadow-[#635b5b] shadow-[#222]  shadow-1
                        >
                            {/* Artist Image */}
                            <div className="w-full h-80 mx-auto  overflow-hidden">
                                <img
                                    src={artist.image}
                                    alt="Artist"
                                    className="object-cover w-full h-full service-image"
                                />
                            </div>
                            <p className="text-red-500 my-4">Iron Ore</p>
                            <p className="text-xl text-black font-bold">{artist.name}</p>
                            <h3 className="text-lg font-medium text-black text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate laudantium aliquid porro doloremque doloribus nam perspiciatis ea deleniti nesciunt!</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesComponent;