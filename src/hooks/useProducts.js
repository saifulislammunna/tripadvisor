 import { useEffect, useState } from "react"

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      
      fetch('https://polar-lowlands-07923.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  },[]);
 
  return [products,setProducts];
}

export default useProducts; 