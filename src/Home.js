import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); // initial data is null so conditional evaluator is needed below
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok) { // throw error for catch below
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setBlogs(data) // this wont cause an infinite loop b/c it only runs at the start
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                    console.log(err.message);
                })
        // }, 1000);
    }, []);

    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {/* added conditional evaluator below */}
           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;