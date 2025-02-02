import React from "react";
import Button from "./Button";

function Product({ data }) {
  const color = data.color;
//   console.log(color);
  return (
    <div
      className={`w-full text-white py-10  h-[15rem] `}
      style={{hover: { backgroundColor: color } }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="font-satoshi text-5xl font-semibold">{data.name}</h1>
        <div className="details w-1/3">
          <p className="text-md mb-10 font-satoshi ">{data.description}</p>
          <div className="flex gap-8 ">
            {data.live && <Button text={`Live Website`} />}
            {data.case && <Button text={`Case Study`} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
