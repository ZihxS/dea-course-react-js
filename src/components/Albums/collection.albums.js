
import React, {useEffect, useState} from "react"
import Axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import { Button, ButtonGroup } from "react-bootstrap";

const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    Axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
    }).then((result) => setDatas(result.data))
  }, []);

  console.log(datas)

  return (
    <React.Fragment>
      <Carousel>
        {/* carousel items start */}
        {/* kiri data singularnya, kanan info untuk data yang keberapa */}
        {datas.map((data, i) => {
          console.table(data)
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
      <ButtonGroup>
        <button className="btn btn-outline-primary">+</button>
        <button className="btn btn-outline-primary">-</button>
      </ButtonGroup>
      {/* carousel items end */}
    </React.Fragment>
  )
}

export default Collection