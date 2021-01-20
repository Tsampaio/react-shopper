import React from "react";

export default function Result() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            Payment Accepted!
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-xl mx-auto">
            Below is your order summary. The items will be shipped to you within
            the next week.
          </p>
          <br />
          <h2 className="text-xl text-indigo-400 tracking-widest font-medium title-font mb-1">
            Order Total: Amount
          </h2>
          <h2 className="text-xl text-indigo-400 tracking-widest font-medium title-font mb-1">
            Email: Email
          </h2>
        </div>
      </div>
    </section>
  );
}
