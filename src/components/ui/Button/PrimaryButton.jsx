import React from 'react'

const PrimaryButton = ({text}) => {
  return (
    <button className="bg-primary-main hover:bg-[#686232] w-full py-3 text-center rounded-md text-white text-h2">
      {text}
    </button>
  );
}

export default PrimaryButton