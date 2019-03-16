import React from 'react'

const HowCard = props => {
  const { title, children } = props

  return (
    <div className="howcard-wrapper">
      <div className="card-content">
        <h5>{title}</h5>
        {children}
      </div>
    </div>
  )
}

export default HowCard;