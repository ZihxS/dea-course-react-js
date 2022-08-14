
import React, {useEffect, useState} from "react"
import Axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import { Button, ButtonGroup } from "react-bootstrap";

const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(3)

  useEffect(() => {
    let isCancelled = false

    if (isCancelled === false) {
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
      }).then((result) => setDatas(result.data))
    }

    // clean up render
    return () => { isCancelled = true }
  }, [limit]);

  const handleLimit = (option) => {
    if (option === "+") {
      setLimit((prev) => prev + 1)
    }
    if (option === "-") {
      setLimit((prev) => prev - 1)
    }
  }

  console.log(datas)

  return (
    <React.Fragment>
      <Carousel>
        {/* <h3>{limit} collection</h3> */}
        {/* mapping data start */}
        {/* kiri data singularnya, kanan info untuk data yang keberapa */}
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                height={450}
                width={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item> 
          )
        })}
      </Carousel>
      {/* mapping data end */}
      <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
        <button className="btn btn-outline-primary" onClick={() => handleLimit("+")}>+</button>
        <button className="btn btn-outline-primary" onClick={() => handleLimit("-")}>-</button>
      </ButtonGroup>
    </React.Fragment>
  )
}

export default Collection