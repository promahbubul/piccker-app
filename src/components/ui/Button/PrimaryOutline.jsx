import React from 'react'

const PrimaryOutline = ({text}) => {
  return (
    <button className="border-primary-main border-2 hover:border-[#686232] hover:text-[#686232] w-full py-3 text-center rounded-md text-primary-main">
      {text}
    </button>
  );
}

export default PrimaryOutline