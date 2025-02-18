"use client"
// Import necessary modules
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Image from "next/image";

// Your Next.js component
function Slider() {
    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000} // Set autoplay interval to 5 seconds
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
            centerMode={false}
            centerSlidePercentage={100}
            showThumbs={false}
            className="relative overflow-hidden min-h-[90vh]  md:h-full" // Set initial height using Tailwind classes
        >

            <div className="relative w-full hover-img min-h-[90vh] md:h-full md:max-h-full overflow-hidden">
                <a href="#" className='flex flex-col relative h-[90vh] md:h-full md:max-h-full'>
                    <Image height={1024} width={1024} className="w-full mx-auto  object-cover h-[40vh]  md:min-h-[90vh] md:max-h-full" src='/images/m1.webp' alt="Image description" />
                </a>
            </div>

            <div className="relative w-full hover-img max-h-[40vh] md:h-full md:max-h-full overflow-hidden">
                <a href="#" className='flex flex-col relative h-full md:h-full md:max-h-full'>
                    <Image height={1024} width={1024} className="w-full mx-auto  object-cover h-[40vh]  md:h-[90vh] md:max-h-full" src='/images/m2.webp' alt="Image description" />
                </a>
            </div>
            <div className="relative w-full hover-img max-h-[40vh] md:h-full md:max-h-full overflow-hidden">
                <a href="#" className='flex flex-col relative h-full md:h-full md:max-h-full'>
                    <Image height={1024} width={1024} className="w-full mx-auto  object-cover h-[40vh]  md:h-[90vh] md:max-h-full" src='/images/m4.webp' alt="Image description" />
                </a>
            </div>




        </Carousel>
    );
}

export default Slider;
