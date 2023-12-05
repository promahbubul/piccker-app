import React from "react";
import Header from "../Header/Header";
import welcomeImage from  '../../../assets/images/welcome-screen/welcome-3.png'
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/ui/Button/PrimaryButton";

const Welcome3 = () => {
  return (
    <>
      <button className="text-primary-main text-right w-full  p-4 ">
        Skip
      </button>
      <div className={`bg-primary-main w-full h-1`}></div>
      <div className="w-full flex flex-col  h-[calc(100vh-110px)] p-4 justify-between">
        <Header
          width="w-28"
          title1="Saving your"
          title2="time"
          subtitle="You can send package anytime."
          image={welcomeImage}
        />
        <Link to="/welcome">
          <PrimaryButton text="Continue" />
        </Link>
      </div>
    </>
  );
};

export default Welcome3;
