const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('hello' + name);
    }

    return ( 
        <div className="home">
            <h2>homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                console.log('hello')
                }
            }>Click me again</button>
        </div>
     );
}
 
export default Home;