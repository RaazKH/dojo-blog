import { useState, useEffect } from 'react';

const useFetch = (url) => { // must start hook name with "use"
    const [data, setData] = useState(null); // initial data is null so conditional evaluator is needed below
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) { // throw error for catch below
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data) // this wont cause an infinite loop b/c it only runs at the start
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                    console.log(err.message);
                })
        }, 1000);
    }, [url]);

    return { data, isPending, error }
}
export default useFetch;