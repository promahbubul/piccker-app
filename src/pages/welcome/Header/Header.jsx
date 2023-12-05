import React from 'react'

const Header = ({title1, title2, subtitle, image, width}) => {
  return (
    <div>
      <h1
        className="text-[32px] mt-4 font-semibold
       text-primary-main"
      >
        {title1} <br /> {title2}
      </h1>
      <p className="text-base-dark-grey text-h3">{subtitle}</p>
      <div className=" flex mx-auto mb-4">
        <img className=" h-auto mt-14 w-[150px] mx-auto" src={image} alt="" />
      </div>
    </div>
  );
}

export default Header