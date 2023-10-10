import React from "react";

const SwapSkeleton = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center p-4 gap-4 backdrop-blur-sm rounded-3xl bg-opacity-0 sm:bg-white-4 max-w-[404px] w-screen`}
    >
      <div className="relative flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-4 rounded-2xl border border-white-8 bg-white-4 sm:bg-transparent p-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-white-32 rounded-lg max-w-[332px] w-full h-[70px] animate-pulse" />
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-white-32 rounded-lg max-w-[332px] w-full h-[20px] animate-pulse" />
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-white-32 rounded-lg max-w-[332px] w-full h-[20px] animate-pulse" />
        </div>
        <div className="h-6 w-6 rounded-full border border-white-100 bg-dark-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="flex flex-col gap-4 rounded-2xl border border-white-8 bg-white-4 sm:bg-transparent p-4 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-white-32 rounded-lg max-w-[332px] w-full h-[70px] animate-pulse" />
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-white-32 rounded-lg max-w-[332px] w-full h-[20px] animate-pulse" />
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-white-32 rounded-lg max-w-[332px] w-full h-[20px] animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SwapSkeleton;
