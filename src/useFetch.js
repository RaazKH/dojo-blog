import { useState, useEffect } from 'react';

const useFetch = (url) => { // must start hook name with "use"
    const [data, setData] = useState(null); // initial data is null so conditional evaluator is needed below
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
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
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}
export default useFetch;