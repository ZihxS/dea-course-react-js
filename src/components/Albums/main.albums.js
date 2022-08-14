// children component

// kalo untuk penulisan comp itu bisa disebut PascalCase ya untuk var itu camelCase ya

import React from "react"
import { Container } from "react-bootstrap"
import Collection from "./collection.albums"

const Albums = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h3>{props.title}</h3>
        <i>{props.description}</i>
        <Collection />
      </Container>
    </React.Fragment>
  )
}

export default Albums