import React from "react";
import { CartIcon } from "./Icons";

export default function CartSummary() {
  return (
    <>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <span className="mr-5 hover:text-white flex items-center">
          <CartIcon />
          <span className="ml-3">Total Price (Cart Count)</span>
        </span>
      </nav>
    </>
  );
}
