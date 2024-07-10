import React from "react";
import { IProduct } from "@/types";
import Container from "../Container";
import HeadTitle from "../HeadTitle";
import ProductList from "../ProductList";

const products: IProduct[] = [
  {
    id: 1,
    name: "vertical striped shirt",
    price: 232,
    imageUrl: "/assets/images/Frame 32.png",
    rating: 4,
    discount: 20,
  },
  {
    id: 2,
    name: "courage graphic t-shirt",
    price: 145,
    imageUrl: "/assets/images/Frame 33.png",
    rating: 4,
  },
  {
    id: 3,
    name: "loose fit bermuda shorts",
    price: 80,
    imageUrl: "/assets/images/Frame 34.png",
    rating: 4,
  },
  {
    id: 4,
    name: "faded skinny jeans",
    price: 210,
    imageUrl: "/assets/images/Frame 38.png",
    rating: 4,
  },
];

const TopSelling = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center flex-col gap-[55px] py-[72px] w-full">
          <HeadTitle content="Top Selling" />
          <ProductList products={products} />
          <button className="flex justify-center items-center text-base capitalize border border-gray-300 rounded-full w-full md:w-[218px] py-[15px]">
            View all
          </button>
        </div>
      </Container>
    </div>
  );
};

export default TopSelling;
