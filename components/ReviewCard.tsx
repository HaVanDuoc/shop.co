import React from "react";
import StarRating from "./StarRating";

interface IReviewCard {
  user: string;
  countRating: number;
  review: string;
  timePosted: any;
}

const ReviewCard: React.FC<IReviewCard> = ({
  user,
  countRating,
  review,
  timePosted,
}) => {
  return (
    <div className="flex flex-row gap-3 cursor-pointer relative">
      <div className="absolute top-[10%] right-[5%] opacity-60 hover:bg-gray-300 rounded-full p-2">
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
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </div>

      <div className="flex flex-col py-7 px-8 gap-3 border border-gray-300 rounded-xl bg-white">
        <StarRating count={countRating} hiddenCount />

        <div className="flex flex-col items-start justify-center gap-2 ">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="font-semibold text-base">{user}</div>
            <div className="bg-green-600 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <div className="opacity-60">{review}</div>
        </div>

        <div className="opacity-60">Posted on {timePosted}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
