// @ts-nocheck
import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function Product() {
  const { productId } = useParams();

  const { data: product, isLoading, isError, error } = useQuery(
    ['Product', productId],
    () => axios(`/api/products/${productId}`).then(res => res.data.product));

  if(isLoading) return <LoadingSpinner />;
  if(isError) {
    return (
      <div className="text-red-500 font-bold text-center mx-auto">
        Opps! {error.message}
      </div>
    )
  }
  console.log(product);
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt=""
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Category
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-8">
              Name
            </h1>
            <p className="leading-relaxed">Description Long</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                Price
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
