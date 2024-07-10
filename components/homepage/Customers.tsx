import React from "react";
import HeadTitle from "../HeadTitle";
import Container from "../Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "../StarRating";

const Customers = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="flex flex-col mt-[80px] pb-20">
      <Container>
        <div className="flex justify-between items-center mb-[40px]">
          <HeadTitle content="OUR HAPPY CUSTOMERS" />
          <div className="flex gap-3">
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
                <path d="M19 12H6M12 5l-7 7 7 7" />
              </svg>
            </button>

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
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-row gap-3 cursor-pointer">
          {CUSTOMERS.map((cus, index) => (
            <div
              className="flex flex-col py-7 px-8 gap-3 border border-gray-300 rounded-xl bg-white"
              key={index}
            >
              <StarRating count={cus.rating} hiddenCount />

              <div className="flex flex-col items-start justify-center gap-2 ">
                <div className="flex flex-row justify-center items-center gap-2">
                  <div className="font-semibold text-base">{cus.name}</div>
                  <div className="bg-green-600 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="opacity-60">{cus.comment}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Customers;

const CUSTOMERS = [
  {
    name: "Sarah M.",
    comment: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
  },
  {
    name: "Alex K.",
    comment: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    rating: 5,
  },
  {
    name: "James L.",
    comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    rating: 5,
  },
];
