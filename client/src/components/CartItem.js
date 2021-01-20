import React from "react";

export default function CartItem() {
  return (
    <div className="flex w-full">
      <div className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-4 w-full justify-between">
        <div className="flex">
          <img
            className="h-16 w-16 rounded-full object-cover mx-1"
            src="https://dummyimage.com/200x200"
            alt="avatar"
          />
          <p className="text-gray-600 text-lg mx-2">
            <span className="font-bold">Name</span> <br />
            Price x Quantity
          </p>
        </div>
        <div>
          <input
            style={{ width: 50 }}
            className="border-solid border-2"
            type="number"
            value={0}
            min={0}
          />
        </div>
      </div>
    </div>
  );
}
