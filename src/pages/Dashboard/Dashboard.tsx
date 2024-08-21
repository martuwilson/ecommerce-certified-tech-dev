import { useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css'
import { useEffect, useState } from 'react'
import { Product } from '../../interfaces/product';

const Dashboard = () => {

    const [product, setProduct] = useState({
        amiiboSeries: '',
        character: '',
        gameSeries: '',
        head: '',
        image: '',
        name: '',
        releaseDate: '',
        tail: '',
        type: '',
        price: 0
    })

    const navigate = useNavigate()

    useEffect(() => {
        const userDataLogin = localStorage.getItem('userLogin')

        if(!userDataLogin){
            navigate('/login')
        }
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('userLogin')
        navigate('/login')
    }

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <div className={styles.container}>
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>Logout</button>
        </div>

        <form onSubmit={handleSubmit}>
            <div className={styles.formControlLogin}>
                <label htmlFor="amiiboSeries">Amiibo Series</label>
                <input
                    type="text"
                    id="amiiboSeries"
                    name="amiiboSeries"
                    value={product.amiiboSeries}
                    onChange={handleChangeValue}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="character">Character</label>
                <input
                    type="text"
                    id="character"
                    name="character"
                    value={product.character}
                    onChange={handleChangeValue}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="gameSeries">Game Series</label>
                <input
                    type="text"
                    id="gameSeries"
                    name="gameSeries"
                    value={product.gameSeries}
                    onChange={handleChangeValue}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="head">head</label>
                <input
                    type="text"
                    id="head"
                    name="head"
                    value={product.head}
                    onChange={handleChangeValue}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    id="image"
                    name="image"
                    value={product.image}
                    onChange={handleChangeValue}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleChangeValue}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="releaseDate">release</label>
                <input
                    type="date"
                    id="releaseDate"
                    name="releaseDate"
                    value={product.releaseDate}
                    onChange={handleChangeValue}
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="tail">tail</label>
                <input
                    type="text"
                    id="tail"
                    name="tail"
                    value={product.tail}
                    onChange={handleChangeValue}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="type">type</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={product.type}
                    onChange={handleChangeValue}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="price">price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={handleChangeValue}
                    required
                />
            </div>

            <div className={styles.formControlLogin}>
                <button type='submit'>
                    Add product
                </button>
            </div>
        </form>
    </div>
  )
}

export default Dashboard