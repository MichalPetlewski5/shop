import { useEffect, useState } from 'react'
import Product from './components/Product'

function App() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProduct(data)
      console.log(product)
    })
  }, [])


  return (
    <>
    <div>
      <h1 className="text-red-900">Product list</h1>
      <Product list={product}/>
    </div>
    </>
  )
}

export default App
