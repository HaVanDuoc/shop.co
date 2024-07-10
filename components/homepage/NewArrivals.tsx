import React from "react";
import { IProduct } from "@/types";
import Container from "../Container";
import HeadTitle from "../HeadTitle";
import ProductList from "../ProductList";

const products: IProduct[] = [
  {
    id: 1,
    name: "t-shirt with tape details",
    price: 120,
    imageUrl: "/assets/images/image 7.png",
    rating: 4,
  },
  {
    id: 2,
    name: "skinny fit jeans",
    price: 260,
    imageUrl: "/assets/images/image 8.png",
    rating: 4,
    discount: 20,
  },
  {
    id: 3,
    name: "checkered shirt",
    price: 180,
    imageUrl: "/assets/images/image 9.png",
    rating: 4,
  },
  {
    id: 4,
    name: "sleeve striped t-shirt",
    price: 160,
    imageUrl: "/assets/images/image 10.png",
    rating: 4,
    discount: 30,
  },
];

const NewArrivals = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center flex-col gap-[55px] py-[72px] w-full">
          <HeadTitle content="New Arrivals" />
          <ProductList products={products} />
          <button className="flex justify-center items-center text-base capitalize border border-gray-300 rounded-full w-full md:w-[218px] py-[15px]">
            View all
          </button>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
