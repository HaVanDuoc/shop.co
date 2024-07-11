import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Image from "next/image";
import React, { Fragment } from "react";

const CartPage = () => {
  return (
    <div className="flex pb-16">
      <Container>
        <Breadcrumb links={LINKS} />

        <div className="font-extrabold text-5xl mb-6">Your Cart</div>

        <div className="flex flex-wrap gap-6">
          {/* Your Cart */}
          <div className="flex gap-4 w-[60%]">
            <div className="flex w-full flex-wrap p-5 border border-gray-300 rounded-2xl gap-3">
              {/* Card */}
              {PRODUCT_CART.map((product, index) => {
                return (
                  <Fragment key={index}>
                    <Card
                      name={product.color}
                      image={product.image}
                      price={product.price}
                      color={product.color}
                      size={product.size}
                      count={product.count}
                    />

                    {index < PRODUCT_CART.length - 1 && (
                      <div className="flex flex-1 border-b-2 my-3"></div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="flex flex-auto flex-col gap-6">
            <div className="text-2xl font-semibold">Order Summary</div>

            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center text-[20px]">
                <div className="opacity-60">Subtotal</div>
                <div className="font-semibold">$565</div>
              </div>
              <div className="flex justify-between items-center text-[20px]">
                <div className="opacity-60">Discount (-20%)</div>
                <div className="font-semibold">-$113</div>
              </div>
              <div className="flex justify-between items-center text-[20px]">
                <div className="opacity-60">Delivery Fee</div>
                <div className="font-semibold">$15</div>
              </div>
              <div className="border-b-2 flex flex-1 my-3"></div>
              <div className="flex justify-between items-center text-[20px]">
                <div className="text-xl">Total</div>
                <div className="font-semibold text-2xl">$467</div>
              </div>
            </div>

            <div className="flex w-full flex-row justify-center items-center bg-[#F0F0F0] rounded-full pl-[5%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                opacity={60}
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              <input
                type="text"
                placeholder="Add promo code"
                className="flex flex-auto bg-inherit outline-none pl-3"
              />
              <button className="bg-black text-white py-3 px-7 rounded-full">
                Apply
              </button>
            </div>

            <button className="flex flex-row justify-center items-center gap-3 text-white bg-black py-4 rounded-full">
              Go to Checkout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;

interface ICard {
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  count: number;
}

const Card: React.FC<ICard> = ({ name, image, size, color, price, count }) => {
  return (
    <div className="flex w-full flex-row gap-4 relative">
      <div className="flex justify-center items-center rounded-xl overflow-hidden w-32 h-[auto] bg-[#F0EEED]">
        <Image
          src="/assets/images/image 8 (4).png"
          alt=""
          width={0}
          height={0}
          sizes="100%"
          objectFit="cover"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="flex flex-1 flex-col relative gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-xl font-bold">{name}</div>
          <div>Size: {size}</div>
          <div>Color: {color}</div>
        </div>

        <div className="flex flex-row justify-between items-center gap-3">
          <div className="font-semibold text-3xl">$145</div>
          <div className="flex flex-row justify-center items-center bg-[#F0F0F0] py-3 px-4 rounded-full overflow-hidden ">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>

            <input
              type="number"
              defaultValue={count}
              // value={count}
              min={1}
              //   max={stock}
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
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button className="absolute top-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF3333"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    </div>
  );
};

const LINKS = [
  { name: "home", path: "/" },
  { name: "Cart", path: "/cart" },
];

const PRODUCT_CART = [
  {
    name: "Gradient Graphic T-shirt",
    image: "/assets/images/image 8 (4).png",
    size: "Large",
    color: "White",
    price: 145,
    count: 1,
  },
  {
    name: "Gradient Graphic T-shirt",
    image: "/assets/images/image 8 (4).png",
    size: "Large",
    color: "White",
    price: 145,
    count: 2,
  },
  {
    name: "Gradient Graphic T-shirt",
    image: "/assets/images/image 8 (4).png",
    size: "Large",
    color: "White",
    price: 145,
    count: 1,
  },
];
