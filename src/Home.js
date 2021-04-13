import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); // initial data is null so conditional evaluator is needed below

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data) // this wont cause an infinite loop b/c it only runs at the start
            });
    }, []);

    return ( 
        <div className="home">
            {/* added conditional evaluator below */}
           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;