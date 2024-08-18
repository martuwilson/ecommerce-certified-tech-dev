//import { useEffect, useState } from "react"
import { Hero } from "../../components/UI/Hero/Hero"
import styles from './Home.module.css'
import { CardProduct } from "../../components/CardProduct"
import { getProducts } from "../../service"
//import { Product } from "../../interfaces"
import { Toaster } from "sonner"
import { useQuery } from "react-query"


export const Home = () => {
 const {data, isLoading, error} = useQuery('products', getProducts) // get products es la funcion que trae los products desde la API, 'products' es el nombre de la query

 /*  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
      setIsLoading(false)
    }).catch(() => {
      setError(true)
      
    }).finally(() =>{
      setIsLoading(false)
    })
  }, []) */

  return (
    <>
      <Hero />
      <Toaster richColors/>
      {
        isLoading && <p>Loading...</p>
      }
      {
        error && <p>There was an error</p>
      }
      <div className={styles.container}>
        {
          data?.map((product) => (
            <CardProduct key={product.tail} product={product} />
          ))
        }
      </div>
    </>
  )
}
