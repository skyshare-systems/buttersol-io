import React from "react";

interface IDataDetails {
  title: string;
  subTitle: string;
  value: any;
}

const DataDetails = ({ title, subTitle, value }: IDataDetails) => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full">
      <h1 className="subtext">
        <span className="text-white-72">{title}</span>
        {subTitle !== "" && (
          <span className="text-white-32">( {subTitle} )</span>
        )}
      </h1>

      <h1 className="subtext text-white-72">~$ {value}</h1>
    </div>
  );
};

export default DataDetails;
