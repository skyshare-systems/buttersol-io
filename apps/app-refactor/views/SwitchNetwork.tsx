import React from "react";
import Switch from "public/icons/swap/switch-icon.svg";

const SwitchNetwork = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-dark-100 border border-white-8 rounded-full cursor-pointer">
      <Switch />
    </div>
  );
};

export default SwitchNetwork;
