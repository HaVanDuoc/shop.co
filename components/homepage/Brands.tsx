import React from "react";
import Container from "../Container";
import Image from "next/image";

const Brands = () => {
  const BRANDS = [
    { name: "Versace", path: "/assets/icons/Versace.svg", link: "#" },
    { name: "Zera", path: "/assets/icons/zara-logo-1 1.svg", link: "#" },
    { name: "Gucci", path: "/assets/icons/gucci-logo-1 1.svg", link: "#" },
    { name: "Parada", path: "/assets/icons/prada-logo-1 1.svg", link: "#" },
    { name: "Cal", path: "/assets/icons/Group-1.svg", link: "#" },
  ];

  return (
    <div className="bg-black">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-[6vw] py-[42px]">
          {BRANDS.map((brand, i) => (
            <Image
              key={i}
              src={brand.path}
              alt={brand.name}
              width={0}
              height={0}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Brands;
