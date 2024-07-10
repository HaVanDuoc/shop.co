import React from "react";
import Container from "../Container";
import Image from "next/image";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "rgb(243 244 246)" }}>
      <Container>
        <div className="flex items-center justify-center w-full h-full relative flex-col lg:flex-row gap-8">
          <div className="w-full md:w-1/2 h-full flex items-start justify-center flex-col gap-8">
            <div className="text-5xl md:text-6xl mt-10 md:mt-0 font-extrabold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </div>
            <div className="opacity-60 text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            <button className="w-full md:w-52 h-14 bg-black text-white rounded-full">
              Shop Now
            </button>
            <div className="flex w-full h-full justify-center md:justify-between items-center flex-row flex-wrap gap-3">
              <div>
                <div className="text-[40px] font-bold">200+</div>
                <div className="text-base opacity-60">
                  International Brands+
                </div>
              </div>
              <div className="flex border-l h-[84px] mx-4 border-gray-300 "></div>
              <div>
                <div className="text-[40px] font-bold">2,000+</div>
                <div className="text-base opacity-60">
                  High-Quality Products
                </div>
              </div>
              <div className="hidden sm:flex border-l h-[84px] mx-4 border-gray-300"></div>
              <div className="flex flex-1 justify-center items-center flex-col">
                <div className="text-[40px] font-bold">30,000+</div>
                <div className="text-base opacity-60">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="relative lg:w-1/2 w-full h-[663px]">
            <Image
              src={"/assets/icons/star.svg"}
              alt="star"
              width={56}
              height={56}
              className="absolute left-0 top-[298px]"
            />
            <Image
              src="/assets/images/Rectangle_4__3_-removebg.png"
              alt="banner"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </div>
          <Image
            src={"/assets/icons/star.svg"}
            alt="star"
            width={104}
            height={104}
            className="absolute right-0 bottom-[473px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
