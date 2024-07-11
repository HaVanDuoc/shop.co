"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import StarRating from "./StarRating";
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";

interface IProductList {
  products: IProduct[];
  cols?: number;
}

const ProductList: React.FC<IProductList> = ({ products, cols = 4 }) => {
  const router = useRouter();

  return (
    <div
      className={`grid grid-cols-3 lg:grid-cols-${
        cols > 0 ? cols : 4
      } gap-4 w-full`}
    >
      {products.map((product, index) => {
        const { id, name, price, discount, imageUrl, rating } = product;
        const discountPrice = discount ? price * (1 - discount / 100) : price;

        return (
          <div
            className="flex w-full flex-col gap-2 cursor-pointer"
            onClick={() => router.push("/#")}
            key={index}
          >
            <div className="flex justify-center items-center overflow-hidden rounded-3xl mb-2 bg-[#F0EEED]">
              <Image
                src={imageUrl}
                alt={name}
                width={295}
                height={298}
                objectFit="cover"
                className="w-auto h-full"
              />
            </div>

            <div className="text-base font-bold capitalize">{name}</div>
            <StarRating count={rating} />
            <div className="text-2xl font-bold flex flex-row gap-3 items-center pb-4">
              <div>${discount ? discountPrice.toFixed(2) : price}</div>
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
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
