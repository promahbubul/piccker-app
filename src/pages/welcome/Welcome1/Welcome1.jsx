import React from "react";
import Header from "../Header/Header";
import welcomeImage from  '../../../assets/images/welcome-screen/welcome-1.png'
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/ui/Button/PrimaryButton";

const Welcome1 = () => {
  return (
    <>
      <Link to="/welcome">
        <button className="text-primary-main text-right  p-4  w-full ">
          Skip
        </button>
      </Link>
      <div className={`bg-primary-main w-28 h-1`}></div>
      <div className="w-full flex flex-col  h-[calc(100vh-110px)] p-4 justify-between">
        <Header
          width="w-28"
          title1="Saving your"
          title2="money"
          subtitle="Affordable cost."
          image={welcomeImage}
        />
        <Link to="/welcome-2">
          <PrimaryButton text="Continue" />
        </Link>
      </div>
    </>
  );
};

export default Welcome1;
