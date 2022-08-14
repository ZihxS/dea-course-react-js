// children component

// kalo untuk penulisan comp itu bisa disebut PascalCase ya untuk var itu camelCase ya

import React from "react"
import { Container } from "react-bootstrap"

const Images = (props) => {
  return (
    <React.Fragment>
      <Container>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Container>
    </React.Fragment>
  )
}

export default Images