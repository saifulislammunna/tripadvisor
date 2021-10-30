/* import { useEffect, useState } from "react"

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      
      fetch('https://afternoon-wave-38333.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  },[]);
 
  return [products,setProducts];
}

export default useProducts; */