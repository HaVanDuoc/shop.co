import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container";

const Header = () => {
  const NAVIGATION = [
    // { name: "Shop", path: "/shop" },
    { name: "On Sale", path: "/sale" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Brands", path: "/brands" },
  ];

  return (
    <div className="text-base">
      {/* Top Header Start */}
      <div className="bg-black flex flex-col justify-center items-center">
        <Container>
          <div className="bg-black text-white flex items-center justify-between py-2">
            <span className="text-sm flex-1 text-center">
              Sign up and get 20% off to your first order.{" "}
              <a href="#" className="underline">
                Sign Up Now
              </a>
            </span>
            <button className="text-white hidden md:block">
              <Image
                src="/assets/icons/close.svg"
                alt="Close"
                width={20}
                height={20}
              />
            </button>
          </div>
        </Container>
      </div>
      {/* Top Header End */}

      {/* Main Header Start */}
      <Container>
        <div
          className="py-6 flex items-center justify-between"
          style={{ gap: "40px" }}
        >
          <div className="flex items-center justify-center gap-4">
            {/* Button Toggle Menu */}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="text-2xl font-extrabold">
              SHOP.CO
            </Link>
          </div>

          {/* Navigation */}
          <nav
            className="hidden md:block w-full  md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex justify-between items-center gap-6">
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:border-0  md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Shop
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              {NAVIGATION.map((nav, index) => (
                <li key={index}>
                  <Link href={nav.path} className="text-base">
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search Bar */}
          <div
            className={
              "hidden lg:flex flex-1 items-center rounded-full py-3 pl-4"
            }
            style={{ backgroundColor: "#F0F0F0" }}
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

          {/* Nav Buttons */}
          <div className="flex justify-center items-center gap-5">
            <button type="button" className="lg:hidden text-base">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <button type="button" className=" text-base">
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
                <circle cx="10" cy="20.5" r="1" />
                <circle cx="18" cy="20.5" r="1" />
                <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
              </svg>
              <span className="sr-only">Cart</span>
            </button>
            <button type="button" className="text-base">
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="sr-only">User</span>
            </button>
          </div>
        </div>
      </Container>
      {/* Main Header End */}
    </div>
  );
};

export default Header;
