import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Divide from "@/components/Divide";
import FilterRange from "@/components/FilterRange";
import Pagination from "@/components/product/Pagination";
import ProductList from "@/components/ProductList";
import { IProduct } from "@/types";
import React from "react";

const ProductCategory = () => {
  return (
    <Container>
      <div className="flex flex-col">
        <Breadcrumb links={LINKS} />

        <div className="flex flex-row gap-4">
          {/* Filter */}
          <div>
            <div className="w-72 border border-gray-300 rounded-2xl py-5 px-6">
              <div className="flex flex-row justify-between items-center">
                <div className="font-semibold text-lg">Filters</div>
                <button className="opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                </button>
              </div>

              <div className="border-b-2 border-gray-200 my-4"></div>

              <div className="flex flex-col gap-3">
                {TYPES.map((type, index) => (
                  <div
                    className="flex flex-row justify-between items-center opacity-70 hover:opacity-100 cursor-pointer"
                    key={index}
                  >
                    <div>{type.name}</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="border-b-2 border-gray-200 my-4"></div>

              {/* Price */}
              <div className="mb-10">
                <div className="flex flex-row justify-between items-center mb-4">
                  <div className="font-semibold text-lg">Filters</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </div>

                <FilterRange />
              </div>

              <div className="border-b-2 border-gray-200 my-4"></div>

              {/* Filter Color */}
              <div>
                <div className="flex flex-row justify-between items-center mb-4">
                  <div className="font-semibold text-lg">Colors</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </div>

                <div className="flex flex-row flex-wrap justify-between items-center gap-2">
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

              <div className="border-b-2 border-gray-200 my-4"></div>

              {/* Filter Size */}
              <div>
                <div className="flex flex-row justify-between items-center mb-4">
                  <div className="font-semibold text-lg">Sizes</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </div>

                <div className="flex flex-row flex-wrap gap-3">
                  {sizes.map((size, index) => (
                    <div
                      className={`${
                        size.selected
                          ? "bg-black text-white"
                          : " bg-[#F0F0F0] text-black"
                      } flex justify-center items-center border rounded-full py-2 px-5 cursor-pointer`}
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

              <div className="border-b-2 border-gray-200 my-4"></div>

              {/* Filter Style */}
              <div>
                <div className="flex flex-row justify-between items-center mb-4">
                  <div className="font-semibold text-lg">Dress Style</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </div>

                <div className="flex flex-col gap-3">
                  {STYLES.map((type, index) => (
                    <div
                      className="flex flex-row justify-between items-center opacity-70 hover:opacity-100 cursor-pointer"
                      key={index}
                    >
                      <div>{type.name}</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-black w-full text-white rounded-full py-3 mt-5">
                Apply Filter
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col flex-1">
            {/*  */}
            <div className="flex justify-between items-center">
              <div className="font-bold text-3xl my-3">Casual</div>
              <div className="flex flex-row gap-3">
                <div className="opacity-60">Showing 1-10 of 100 Products</div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <div className="opacity-60">Sort by: </div>
                  <button className="flex flex-row justify-between items-center">
                    Most Popular
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* List products */}
            <ProductList products={products} cols={3} />

            <div className="flex justify-center items-center my-16">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductCategory;

const LINKS = [
  { name: "home", path: "/" },
  { name: "Casual", path: "#" },
];

const TYPES = [
  { name: "T-shirts" },
  { name: "Shorts" },
  { name: "Shirts" },
  { name: "Hoodie" },
  { name: "Jeans" },
];

const colors = [
  { color: "#00C12B", selected: false },
  { color: "#F50606", selected: false },
  { color: "#F5DD06", selected: false },
  { color: "#F57906", selected: false },
  { color: "#06CAF5", selected: false },
  { color: "#063AF5", selected: true },
  { color: "#7D06F5", selected: false },
  { color: "#F506A4", selected: false },
  { color: "#FFFFFF", selected: false },
  { color: "#000000", selected: false },
];

const sizes = [
  { size: "XX-Small", selected: false },
  { size: "X-Small", selected: false },
  { size: "Small", selected: false },
  { size: "Medium", selected: false },
  { size: "Large", selected: true },
  { size: "X-Large", selected: false },
  { size: "XX-Large", selected: false },
  { size: "3X-Large", selected: false },
  { size: "4X-Large", selected: false },
];

const STYLES = [
  { name: "Casual" },
  { name: "Formal" },
  { name: "Party" },
  { name: "Gym" },
];

const products: IProduct[] = [
  {
    id: 1,
    name: "t-shirt with tape details",
    price: 120,
    imageUrl: "/assets/images/image 8 (4).png",
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
    imageUrl: "/assets/images/image 10 (2).png",
    rating: 4,
  },
  {
    id: 4,
    name: "sleeve striped t-shirt",
    price: 160,
    imageUrl: "/assets/images/image 8 (2).png",
    rating: 4,
    discount: 30,
  },
  {
    id: 5,
    name: "sleeve striped t-shirt",
    price: 160,
    imageUrl: "/assets/images/image 9 (1).png",
    rating: 4,
    discount: 30,
  },
  {
    id: 6,
    name: "sleeve striped t-shirt",
    price: 160,
    imageUrl: "/assets/images/image 10 (1).png",
    rating: 4,
    discount: 30,
  },
  {
    id: 7,
    name: "sleeve striped t-shirt",
    price: 160,
    imageUrl: "/assets/images/image 7 (3).png",
    rating: 4,
    discount: 30,
  },
  {
    id: 8,
    name: "sleeve striped t-shirt",
    price: 160,
    imageUrl: "/assets/images/image 8 (3).png",
    rating: 4,
    discount: 30,
  },
  {
    id: 9,
    name: "sleeve striped t-shirt",
    price: 160,
    imageUrl: "/assets/images/image 9 (2).png",
    rating: 4,
    discount: 30,
  },
];
