import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const NAVIGATION = [
    { name: "Shop", path: "/shop" },
    { name: "On Sale", path: "/sale" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Brands", path: "/brands" },
  ];

  return (
    <div className="w-screen flex flex-col justify-center items-center text-base">
      <div className="container max-w-screen px-24 py-3  bg-black text-white flex items-center justify-between">
        <span className="text-sm flex-1 text-center">
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline">
            Sign Up Now
          </a>
        </span>
        <button className="text-white">
          <Image
            src="/assets/icons/close.svg"
            alt="Close"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div
        className="px-24 py-6 w-full flex items-center justify-between"
        style={{ gap: "40px" }}
      >
        <Link href="/" className="text-2xl font-extrabold">
          SHOP.CO
        </Link>

        <nav>
          <ul className="flex justify-between items-center gap-6">
            {NAVIGATION.map((nav, index) => (
              <li key={index}>
                <Link href={nav.path} className="text-base">
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={
            "flex flex-1 items-center bg-gray-200 rounded-full py-3 pl-4"
          }
        >
          <Image
            src="/assets/icons/search.svg"
            alt="icon-search"
            width={24}
            height={24}
          />
          <input
            placeholder="Search for products..."
            className="bg-inherit outline-none pl-3 w-full mr-5"
          />
        </div>

        <div className="flex justify-center items-center gap-4">
          <Image
            src={"/assets/icons/cart.svg"}
            alt="icon-cart"
            width={24}
            height={24}
          />
          <Image
            src={"/assets/icons/user.svg"}
            alt="icon-user"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
