import { Hero } from "../../components/UI/Hero/Hero"
import styles from './Home.module.css'
import { CardProduct } from "../../components/CardProduct"
import { getProducts } from "../../service"
//import { Product } from "../../interfaces"
import { Toaster } from "sonner"
import { useQuery } from "react-query"
import { useEffect, useState } from "react"


export const Home = () => {

  const [page, setPage] = useState(1);

  console.log('current page', page)

  const { data, isLoading, error, refetch } = useQuery(
    ['products', page],
    () => getProducts(page),
    { keepPreviousData: true,
      staleTime: 0,
      cacheTime: 0
    }
  ) // get products es la funcion que trae los products desde la API, 'products' es el nombre de la query

  useEffect(() => {
    refetch(); // <-- Forza la revalidación cuando cambia `page`
  }, [page, refetch]);
  console.log('data', data)

  return (
    <>
      <Hero />
      <Toaster richColors />
      {
        isLoading && <p>Loading...</p>
      }
      {
        error && <p>There was an error</p>
      }
      <div className={styles.container}>
        {
          data?.data.map((product) => (
            <CardProduct key={product.tail} product={product} />
          ))
        }
      </div>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={styles.paginationButton}
        >Prev Page</button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button
          onClick={() => setPage(page + 1)}
          className={styles.paginationButton}
        >Next Page</button>
      </div>
    </>
  )
}
