import React from 'react'

const Welcome = ({title, subtitle, nextPage, image}) => {
  return (
    <div>
        <button className="text-primary-main text-right">Skip</button>
        <h1 className="text-h1 text-primary-main text-left">{title}</h1>
        <p className="text-base-dark text-h3">{subtitle}</p>
        <img src={image} alt="" />
    </div>
  )
}

export default Welcome