// children component

// kalo untuk penulisan comp itu bisa disebut PascalCase ya untuk var itu camelCase ya

import React from "react"

const Images = (props) => {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </React.Fragment>
  )
}

export default Images