import { useEffect, useState } from "react"

export const useDebouce = (value,delay)=>{
  const [debouceValue, setDebouceVale] = useState(value)

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouceVale(value)
    },delay);

    return()=>{
      clearTimeout(handler)
    }
  },[value,delay])

  return debouceValue
}

