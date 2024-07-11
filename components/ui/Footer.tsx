import React from "react";
import Container from "../Container";
import Link from "next/link";
import NavFoot from "../NavFoot";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 -translate-y-1/2 w-full">
        <Container>
          <div className="bg-black px-16 py-9 rounded-xl flex flex-col lg:flex-row gap-4 items-center">
            <div className="text-white font-extrabold text-3xl sm:text-4xl flex flex-1">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>
            <div className="flex flex-1 justify-center items-end flex-col gap-4">
              <div className="rounded-full pl-5 w-[350px] h-12 relative flex justify-start items-center bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  opacity="40%"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="absolute left-5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="outline-none pl-10 bg-inherit"
                />
              </div>
              <button className="bg-white rounded-full w-[350px] h-12">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-[120px] pt-[90px] bg-[#F0F0F0]">
        <Container>
          <div className="flex flex-row justify-between py-12 flex-wrap">
            <div className="flex flex-col lg:max-w-[350px] w-full justify-between">
              <div className="flex flex-col">
                <Link href="/" className="text-2xl font-extrabold">
                  SHOP.CO
                </Link>
              </div>

              <div className="text-sm opacity-60">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </div>

              <div className="flex flex-row gap-2">
                {MEDIA.map((media, index) => (
                  <button
                    key={index}
                    className="border rounded-full p-2 border-gray-300 bg-white"
                  >
                    {media.svg}
                  </button>
                ))}
              </div>
            </div>

            <NavFoot title="Company" navigation={COMPANY_NAV} />
            <NavFoot title="help" navigation={HELP_NAV} />
            <NavFoot title="FAQ" navigation={FAQ_NAV} />
            <NavFoot title="RESOURCES" navigation={RESOURCES_NAV} />
          </div>

          <div className="flex flex-1 border-b-2 border-gray-300 mb-5"></div>

          <div className="flex flex-row justify-between items-center pb-20">
            <div className="opacity-60 text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </div>

            <div className="flex flex-row gap-2">
              {PAYMENTS.map((pay, index) => (
                <button
                  key={index}
                  className="h-8 w-12 flex justify-center items-center border border-gray-200 rounded-md bg-white"
                >
                  <Image
                    src={pay.svgUrl}
                    alt={pay.name}
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{
                      width: "auto",
                      height: "100%",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

const MEDIA = [
  {
    name: "twitter",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="#000"
      >
        <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
      </svg>
    ),
    path: "#",
  },
  {
    name: "facebook",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    path: "#",
  },
  {
    name: "instagram",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="#000"
      >
        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
      </svg>
    ),
    path: "#",
  },
];

const COMPANY_NAV = [
  { name: "About", path: "#" },
  { name: "Features", path: "#" },
  { name: "Works", path: "#" },
  { name: "Career", path: "#" },
];

const HELP_NAV = [
  { name: "Customer Support", path: "#" },
  { name: "Delivery Details", path: "#" },
  { name: "Term & Conditions", path: "#" },
  { name: "Privacy Policy", path: "#" },
];

const FAQ_NAV = [
  { name: "Account", path: "#" },
  { name: "Manage Deliveries", path: "#" },
  { name: "Orders", path: "#" },
  { name: "Payments", path: "#" },
];

const RESOURCES_NAV = [
  { name: "Free eBooks", path: "#" },
  { name: "Development Tutorial", path: "#" },
  { name: "How to - Blog", path: "#" },
  { name: "Youtube Playlist", path: "#" },
];

const PAYMENTS = [
  { name: "visa", svgUrl: "/assets/icons/visa-svgrepo-com.svg" },
  {
    name: "mater card",
    svgUrl: "/assets/icons/mastercard-old-svgrepo-com.svg",
  },
  { name: "paypal", svgUrl: "/assets/icons/paypal-svgrepo-com.svg" },
  { name: "apple pay", svgUrl: "/assets/icons/applepay-svgrepo-com.svg" },
  { name: "google pay", svgUrl: "/assets/icons/googlepay-svgrepo-com.svg" },
];
