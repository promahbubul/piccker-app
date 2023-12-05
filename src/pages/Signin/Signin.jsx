import React from "react";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  return (
    <div className="border-t-[1px] bottom-0 absolute right-0 w-full rounded-t-2xl">
      <h3 className="py-4 px-4 text-primary-main ">Sign in</h3>
      <div className="bg-base-text h-[2px] w-full"></div>
      <div className="p-4 flex flex-col gap-2">
        {/* icon */}
        <Link
          to=""
          className="border-base-text rounded-md items-center text-white flex flex-row px-4 py-2 border-[1px] w-full
           "
        >
          <IoCall className="text-primary-pressed text-xl" />
          <p className="text-center w-full">Use phone number</p>
        </Link>
        <Link
          to=""
          className="border-base-text rounded-md items-center text-white flex flex-row px-4 py-2 border-[1px] w-full
           "
        >
          <FaFacebook className="text-primary-pressed bg-white rounded-full text-xl" />
          <p className="text-center w-full">Use phone number</p>
        </Link>
        <Link
          to=""
          className="border-base-text rounded-md items-center text-white flex flex-row px-4 py-2 border-[1px] w-full
           "
        >
          <FcGoogle className="text-primary-pressed text-xl" />
          <p className="text-center w-full">Use phone number</p>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
