
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
    <div>
      <h1>COLLECTION</h1>
    </div>
  )
}

export default Collection