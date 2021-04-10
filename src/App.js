import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Dog salad";
  const chickens = 50;
  const link = "https://google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>I have {chickens} chickens!</p>
        <a href={link}>Google</a>
        <Home />
      </div>
    </div>
  );
}

export default App;
