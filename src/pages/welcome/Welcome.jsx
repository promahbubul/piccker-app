import React from 'react'
import welcomeImage from '../../assets/images/welcome-screen/welcome.png'
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/ui/Button/PrimaryButton';
import PrimaryOutline from '../../components/ui/Button/PrimaryOutline';

const Welcome = () => {
  return (
    <div className="p-4 flex justify-between flex-col h-full">
      <div className="">
        <div className="w-full flex justify-end">
          <Link to="/">
            <button className="text-primary-main text-right mr-0 block mb-4 ">
              Cancel
            </button>
          </Link>
        </div>
        <h2 className="text-xl text-base-dark-grey font-bold mb-3">
          Welcome to <span className="text-primary-main">PicckR!</span>
        </h2>
        <p className="text-base-dark-grey text-sm">
          Move to the next step to enjoy the features in the application
        </p>
      </div>
      <div className="mx-auto">
        <img src={welcomeImage} alt="" className="" />
      </div>
      <div className="flex gap-2 flex-col">
        <Link to="/signin">
          <PrimaryButton text="Sign in" />
        </Link>
        <Link to="signup">
          <PrimaryOutline text="Sign me up" />
        </Link>
      </div>
    </div>
  );
}

export default Welcome