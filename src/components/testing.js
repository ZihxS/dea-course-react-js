// children component

// kalo untuk penulisan comp itu bisa disebut PascalCase ya untuk var itu camelCase ya

import React from "react"

const Testing = ({ title, description }) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <p>{description}</p>
    </React.Fragment>
  )
}

export default Testing