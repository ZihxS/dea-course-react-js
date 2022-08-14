
import React, {useEffect, useState} from "react"
import Axios from "axios"

const Collection = () => {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    Axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASEURL}/photos`
    }).then((result) => setDatas(result.data))
  }, []);

  console.log(datas[0])
  return (
    <React.Fragment>
      <h1>COLLECTION</h1>
    </React.Fragment>
  )
}

export default Collection