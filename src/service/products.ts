import {Products} from '../interfaces';

export const getProducts = async ():Promise<Products[]> => {
    try {
      const response = await fetch('http://localhost:3000/products')

      if(response.ok){
        const data = await response.json()
        return data;
      }else{
        throw new Error('Error fetching products')
      }

    } catch (error) {
      throw new Error('Network error: ' + error)
    }
  }