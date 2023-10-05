import React from "react";
import InitialInput from "./InitialInput";
import DestinationInput from "./DestinationInput";

const Swap = () => {
  return (
    <div className="flex justify-center items-center mt-16 px-4 xl:px-0">
      <div className="flex flex-col justify-center items-center p-4 backdrop-blur-sm rounded-3xl bg-white-4 max-w-[404px] grow ">
        <div className="relative flex flex-col gap-2 w-full">
          <InitialInput />
          <DestinationInput />
        </div>
      </div>
    </div>
  );
};

export default Swap;
