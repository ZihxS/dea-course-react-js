// children component

// kalo untuk penulisan comp itu bisa disebut PascalCase ya untuk var itu camelCase ya

import React from "react"

const Testing = (props) => {
  console.log(props.title)
  console.log(props.description)
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </React.Fragment>
  )
}

export default Testing