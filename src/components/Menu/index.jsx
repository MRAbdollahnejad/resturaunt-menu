import React from "react";
import { Card } from "./Card/Card";
import Order from "./OrderText/Order";

function Menu() {
  return (
    <div className="flex gap-2 bg-sky-600 h-screen">
      <div className="bg-[#00c8c4] flex flex-col gap-5 w-[70%] p-3 mt-3">
        <h1 className="text-3xl font-bold mx-auto">
          رستوران محمد رضا و محمد مهدی
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="flex flex-col gap-20 h-fit w-[30%] bg-[#00c8c4] p-2 mt-3 ml-3">
        <div className="flex flex-col gap-5">
          <Order orderText={"جمع کل سفارشات"} service={"40000"}></Order>
          <Order orderText={"حق سرویس و کارمزد"} service={"40000"}></Order>
          <Order orderText={"تخفیف"} service={"40000"}></Order>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="کد تخفیف"
              className="w-full p-2 rounded"
            />
            <span className="bg-cyan-500 p-2 m-auto">✓</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between bg-yellow-400 p-2">
            <p>مبلغ قابل پرداخت :</p>
            <p>352 هزار تومان</p>
          </div>

          <Order
            orderText={"مبلغ قابل پرداخت"}
            service={"40000"}
            bg={"bg-yellow-300"}
          ></Order>

          <button className=" bg-red-600 p-2 rounded ">ثبت سفارش</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
