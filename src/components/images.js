// children component

// kalo untuk penulisan comp itu bisa disebut PascalCase ya untuk var itu camelCase ya

import React, {useEffect} from "react"
import { Container } from "react-bootstrap"
import Axios from "axios"

const Images = (props) => {

  useEffect(() => {
    console.log(process.env.REACT_APP_BASEURL)
    // Axios({
    //   method: "GET",
    //   url: ""
    // })
  }, []);

  return (
    <React.Fragment>
      <Container className="mt-2">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Container>
    </React.Fragment>
  )
}

export default Images