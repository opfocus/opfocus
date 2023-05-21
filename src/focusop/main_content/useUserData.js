import { useState, useEffect } from "react"
/*在localStorage或者数据库中获得数据*/

const  useData = (url) => {
  const [data, setData] =  useState(null)

  useEffect(()=> {
    if (typeof(Storage) === 'undefined'){     //是否支持web storage
      console.log("不支持Storage") // 此处输出不支持storage的提示信息
      
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data)) 
    }
    else {
      if (localStorage.data === undefined){
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
              setData(data)
              localStorage.data = JSON.stringify(data)
            })
      }
      else {
        setData(JSON.parse(localStorage.data))
      }
    }
  },[url])
  
  return [data]
}
export default useData

