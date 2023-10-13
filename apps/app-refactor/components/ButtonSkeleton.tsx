import React from "react";

const ButtonSkeleton = () => {
  return (
    <div className="w-full px-4 sm:px-0">
      <button className="px-[18px] py-[19px] rounded-lg bg-white-4 w-full title text-white-50 font-bold hover:opacity-50 duration-150 animate-pulse">
        Loading...
      </button>
    </div>
  );
};

export default ButtonSkeleton;
