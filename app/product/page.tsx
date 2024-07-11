import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Divide from "@/components/Divide";
import RatingReviewSection from "@/components/product/RatingReviewSection";
import YouMightAlsoLike from "@/components/product/YouMightAlsoLike";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import React from "react";

const LINKS = [
  { name: "home", path: "/" },
  { name: "shop", path: "/shop" },
  { name: "men", path: "" },
  { name: "T-shirt", path: "" },
];

const PRODUCT_DETAILS = {
  name: "One Life Graphic T-shirt",
  images: [
    { imageUrl: "/assets/images/image 1.png" },
    { imageUrl: "/assets/images/image 5.png" },
    { imageUrl: "/assets/images/image 6.png" },
  ],
  rating: 5,
  price: 300,
  discount: 40,
  describe: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
  colors: [
    { color: "#4F4631", selected: true },
    { color: "#314F4A", selected: false },
    { color: "#31344F", selected: false },
  ],
  sizes: [
    { size: "Small", selected: false },
    { size: "Medium", selected: false },
    { size: "Large", selected: true },
    { size: "X-large", selected: false },
  ],
  count: 1,
  stock: 382,
};

const ProductDetails = () => {
  const { images, discount, price, colors, describe, sizes, stock } =
    PRODUCT_DETAILS;

  return (
    <div className="pb-10">
      <Container>
        <Divide />
        <Breadcrumb links={LINKS} />

        <div className="flex flex-row gap-7">
          <div className="flex flex-row flex-1 gap-3">
            <div className="flex flex-col gap-2 w-1/4">
              {images.map((img, index) => (
                <Image
                  key={index}
                  src={img.imageUrl}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="flex flex-1"
                />
              ))}
            </div>

            <div className="flex flex-auto">
              <Image
                src={images[0].imageUrl}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className="flex flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-3 ">
            <div className="font-extrabold uppercase text-4xl">
              One Life Graphic T-shirt
            </div>

            <StarRating count={4} />

            <div className="text-2xl font-bold flex flex-row gap-3 items-center">
              <div>
                $
                {discount
                  ? (discount ? price * (1 - discount / 100) : price).toFixed(2)
                  : price}
              </div>
              {discount && discount > 0 && (
                <>
                  <div className="line-through text-gray-400 gray-400">
                    ${price}
                  </div>
                  <div className="bg-[#FF3333] bg-opacity-10 text-[12px] text-[#FF3333] px-4 rounded-full">
                    -{discount}%
                  </div>
                </>
              )}
            </div>

            <div className="opacity-60">{describe}</div>

            <Divide />

            {/* Select Color */}
            <div className="flex flex-col gap-3 my-6">
              <div className="opacity-60">Select Color</div>

              <div className="flex flex-row gap-2">
                {colors.map((clr, index) => (
                  <button
                    key={index}
                    className="rounded-full p-2 border border-gray-300"
                    style={{ backgroundColor: clr.color }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2"
                      //   stroke-linecap="round"
                      stroke-linejoin="round"
                      className={clr.selected ? "opacity-100" : "opacity-0"}
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <Divide />

            {/* Choose Size */}
            <div className="flex flex-col gap-3 my-6">
              <div className="opacity-60">Select Color</div>
              <div className="flex flex-row gap-3">
                {sizes.map((size, index) => (
                  <div
                    className={`${
                      size.selected
                        ? "bg-black text-white"
                        : " bg-[#F0F0F0] text-black"
                    } flex justify-center items-center border rounded-full py-3 px-6 cursor-pointer`}
                    key={index}
                  >
                    <div
                      className={` ${
                        size.selected ? "opacity-100" : "opacity-60"
                      } capitalize`}
                    >
                      {size.size}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Divide />

            {/* Count of Product */}
            <div className="flex flex-row gap-5 mt-5">
              {/*  */}
              <div className="flex flex-row justify-center items-center bg-[#F0F0F0] py-3 px-4 rounded-full overflow-hidden gap-5">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>

                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  max={stock}
                  className="text-center outline-none bg-inherit"
                />

                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>

              {/* Button Add Cart */}
              <button className="bg-black rounded-full text-white flex flex-1 justify-center items-center">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <RatingReviewSection />

        <YouMightAlsoLike />
      </Container>
    </div>
  );
};

export default ProductDetails;
