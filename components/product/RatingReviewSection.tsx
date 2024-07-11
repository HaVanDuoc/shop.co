import React from "react";
import ReviewCard from "../ReviewCard";

const TABS_LIST = [
  { name: "Product Details", id: "product-tab", tabTarget: "#product_details" },
  { name: "Rating & Reviews", id: "review-tab", tabTarget: "#rating_reviews" },
  { name: "FAQs", id: "faqs-tab", tabTarget: "#faqs" },
];

const TAB_CONTENT = [
  { id: "product_details", labelledby: "product-tab" },
  { id: "rating_reviews", labelledby: "review-tab" },
  { id: "faqs", labelledby: "faqs-tab" },
];

const RatingReviewSection = () => {
  return (
    <div className="mt-[80px]">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="tab-product-review"
          data-tabs-toggle="#tab-product-review-content"
          role="tablist"
        >
          {TABS_LIST.map((tab, index) => (
            <li
              className="me-2 flex flex-1 items-center justify-center text-[20px]"
              role="presentation"
              key={index}
            >
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id={tab.id}
                data-tabs-target={tab.tabTarget}
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center my-8">
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="font-bold text-3xl">All Reviews</div>
          <div className="text-base opacity-60">(451)</div>
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          <button className="bg-gray-200 p-3 rounded-full ">
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

          <button className="flex flex-row items-center justify-center text-black gap-2 bg-gray-200 rounded-full py-3 px-5">
            <span className="text-sm">Latest</span>
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

          <button className="bg-black text-sm text-white rounded-full py-3 px-5">
            Write a Review
          </button>
        </div>

        {/* <div className="flex">
          {REVIEWS.map((review, index) => (
            <ReviewCard
              user={review.user}
              countRating={review.rating}
              review={review.comment}
              timePosted={review.timePosted}
              key={index}
            />
          ))}
        </div> */}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {REVIEWS.map((review, index) => (
          <ReviewCard
            user={review.user}
            countRating={review.rating}
            review={review.comment}
            timePosted={review.timePosted}
            key={index}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-16">
        <button className="border rounded-full bg-gray-200 text-gray-700 font-semibold w-[230px] h-[52px]">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default RatingReviewSection;

const REVIEWS = [
  {
    user: "Sarah M.",
    comment: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
    timePosted: "August 14, 2024",
  },
  {
    user: "Alex K.",
    comment: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    rating: 5,
    timePosted: "August 14, 2024",
  },
  {
    user: "James L.",
    comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    rating: 5,
    timePosted: "August 14, 2024",
  },
  {
    user: "James L.",
    comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    rating: 5,
    timePosted: "August 14, 2024",
  },
  {
    user: "James L.",
    comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    rating: 5,
    timePosted: "August 14, 2024",
  },
  {
    user: "James L.",
    comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    rating: 5,
    timePosted: "August 14, 2024",
  },
];
