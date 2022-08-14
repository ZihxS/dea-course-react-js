// children component

// kalo untuk penulisan comp itu bisa disebut PascalCase ya untuk var itu camelCase ya

import React from "react"
import { Container } from "react-bootstrap"
import Collection from "./collection.albums"

const Albums = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <Collection />
      </Container>
    </React.Fragment>
  )
}

export default Albums