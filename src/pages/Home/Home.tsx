import { useEffect, useState } from "react"
import { Hero } from "../../components/UI/Hero/Hero"
import styles from './Home.module.css'
import { CardProduct } from "../../components/CardProduct"
import { getProducts } from "../../service"
import { Products } from "../../interfaces"

export const Home = () => {

  const [products, setProducts] = useState<Products[]>([])
  const [error, setError] = useState(false);
const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
      setIsLoading(false)
    }).catch((error) => {
      setError(true)
      
    }).finally(() =>{
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Hero />
      {
        isLoading && <p>Loading...</p>
      }
      {
        error && <p>There was an error</p>
      }
      <div className={styles.container}>
        {
          products.map((product) => (
            <CardProduct key={product.tail} product={product} />
          ))
        }
      </div>
    </>
  )
}
