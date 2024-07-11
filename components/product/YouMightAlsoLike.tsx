import React from "react";
import { IProduct } from "@/types";
import Container from "../Container";
import HeadTitle from "../HeadTitle";
import ProductList from "../ProductList";

const products: IProduct[] = [
  {
    id: 1,
    name: "Polo with Contrast Trims",
    price: 232,
    imageUrl: "/assets/images/image 7 (2).png",
    rating: 4,
    discount: 20,
  },
  {
    id: 2,
    name: "Gradient Graphic T-shirt",
    price: 145,
    imageUrl: "/assets/images/image 8 (2).png",
    rating: 4,
  },
  {
    id: 3,
    name: "Polo with Tipping Details",
    price: 80,
    imageUrl: "/assets/images/image 9 (2).png",
    rating: 4,
  },
  {
    id: 4,
    name: "Black Striped T-shirt",
    price: 210,
    imageUrl: "/assets/images/image 10 (2).png",
    rating: 4,
  },
];

const YouMightAlsoLike = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center flex-col gap-[55px] py-[72px] w-full">
          <HeadTitle content="You Might Also Like" />
          <ProductList products={products} />
          <button className="flex justify-center items-center text-base capitalize border border-gray-300 rounded-full w-full md:w-[218px] py-[15px]">
            View all
          </button>
        </div>
      </Container>
    </div>
  );
};

export default YouMightAlsoLike;
