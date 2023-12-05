import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import welcomeImage from "../../../assets/images/welcome-screen/welcome-2.png";
import PrimaryButton from "../../../components/ui/Button/PrimaryButton";

const Welcome2 = () => {
  return (
    <>
      <button className="text-primary-main text-right p-4  w-full ">
        Skip
      </button>
      <div className={`bg-primary-main w-64 h-1`}></div>
      <div className="w-full flex flex-col  h-[calc(100vh-110px)] p-4 justify-between">
        <Header
          width="w-28"
          title1="Delivering your"
          title2="package quickly"
          subtitle="Your package will arrive on time."
          image={welcomeImage}
        />
        <Link to="/welcome-3">
          <PrimaryButton text="Continue" />
        </Link>
      </div>
    </>
  );
};

export default Welcome2;
