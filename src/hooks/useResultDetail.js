import { useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [result, setResult] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
   
    const getResultApi = async (id) => {
        try {//call api
            const response = await yelp.get(`/${id}`);
            setResult(response.data)
        } catch(err){
            setErrorMessage('Fetching details error :( ')
        }
    }

    return [getResultApi, result, errorMessage]
}