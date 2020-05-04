// react hooks
import {useState, useEffect} from 'react';
// api
import yelp from '../api/yelp';

// yelp api business logic
export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    //helper functions
    const searchApi = async (seachTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    term: seachTerm,
                    location: 'san jose',
                    limit: 50
                }
            })
            setResults(response.data.businesses);
        } catch (err){
            setErrorMessage('Something went wrong :( ')
        }
    };

    //Call searchApi on load with empty []
    useEffect(()=>{
        searchApi('pasta')
    }, [])

    // return these variables
    return [searchApi, results, errorMessage];
};