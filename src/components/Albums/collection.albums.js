
import React, {useEffect, useState} from "react"
import Axios from "axios"
import Carousel from 'react-bootstrap/Carousel';

const Collection = () => {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    Axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASEURL}/photos?_limit=3`
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
            <div key={i}>
              <h1>{data.url}</h1>
              <p>{data.title}</p>
            </div>
          )
        })}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/600/92c952"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      {/* carousel items end */}
    </React.Fragment>
  )
}

export default Collection