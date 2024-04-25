import React from "react";

function Order({ orderText, service, bg }) {
  return (
    <div className={`flex justify-between w-full ${bg}`}>
      <p>{orderText}</p>
      <div className="flex gap-1">
        <p>{service}</p>
        <p>تومان</p>
      </div>
    </div>
  );
}

export default Order;
