// children component

// kalo untuk penulisan comp itu bisa disebut PascalCase ya untuk var itu camelCase ya

import React from "react"

const x = (a, b) => {
  return a + b
}

const Testing = (props) => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {x(3, 5)}
    </React.Fragment>
  )
}

export default Testing