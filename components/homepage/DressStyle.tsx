import React from "react";
import Container from "../Container";
import HeadTitle from "../HeadTitle";
import Image from "next/image";

const DressStyle = () => {
  const STYLES = [
    { name: "Casual", imageUrl: "/assets/images/image 11.png" },
    { name: "Formal", imageUrl: "/assets/images/image 13.png", sizeAuto: true },
    { name: "Party", imageUrl: "/assets/images/image 12.png", sizeAuto: true },
    { name: "Gym", imageUrl: "/assets/images/image 14.png" },
  ];

  return (
    <div>
      <Container>
        <div className="bg-[#F0F0F0] rounded-3xl flex flex-col items-center justify-center">
          <div className="mt-[70px] mb-[64px] text-center">
            <HeadTitle content="Browser by Dress Style" />
          </div>

          <div className="flex flex-wrap gap-4 w-full px-16 pb-16">
            {STYLES.map((styles, index) => (
              <div
                key={index}
                className={`relative flex ${
                  styles.sizeAuto ?? "w-1/4"
                } flex-auto justify-end bg-white rounded-xl overflow-hidden`}
              >
                <div className="absolute top-[10%] left-[5%] text-xl lg:text-3xl md:text-2xl font-bold">
                  {styles.name}
                </div>
                <div className="flex">
                  <Image
                    src={styles.imageUrl}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{
                      width: "100%",
                      height: "auto",
                      minHeight: "190px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DressStyle;
