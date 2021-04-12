import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => { // this function runs for every render
        console.log('use effect ran');
        console.log(name);
    }, [name]); // name added as dependency so only runs at name statechange
                // leave brackets empty to make function run once on page load

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
           <button onClick={() => setName('luigi')}>change name</button>
           <p>{name}</p>
        </div>
     );
}
 
export default Home;