import { useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css'
import { useEffect } from 'react'

const Dashboard = () => {

const navigate = useNavigate()

useEffect(() => {
    const userDataLogin = localStorage.getItem('userLogin')

    if(!userDataLogin){
        navigate('/login')
    }
}, [])

  return (
    <div className={styles.container}>
        <div>
            <h1>Dashboard</h1>
            <button>Logout</button>
        </div>

        <form>
            <div className={styles.formControlLogin}>
                <label htmlFor="amiiboSeries">Amiibo Series</label>
                <input
                    type="text"
                    id="amiiboSeries"
                    name="amiiboSeries"
                    value={''}
                    onChange={() => {}}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="character">Character</label>
                <input
                    type="text"
                    id="character"
                    name="character"
                    value={''}
                    onChange={() => {}}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="gameSeries">Game Series</label>
                <input
                    type="text"
                    id="gameSeries"
                    name="gameSeries"
                    value={''}
                    onChange={() => {}}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="head">head</label>
                <input
                    type="text"
                    id="head"
                    name="head"
                    value={''}
                    onChange={() => {}}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    id="image"
                    name="image"
                    value={''}
                    onChange={() => {}}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={''}
                    onChange={() => {}}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="release">release</label>
                <input
                    type="date"
                    id="release"
                    name="release"
                    value={''}
                    onChange={() => {}}
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="tail">tail</label>
                <input
                    type="text"
                    id="tail"
                    name="tail"
                    value={''}
                    onChange={() => {}}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="type">type</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={''}
                    onChange={() => {}}
                    required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="price">price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={''}
                    onChange={() => {}}
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