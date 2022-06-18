import "./App.css";
import Nav from "./components/Nav";
import starwarsimage from "./assets/StarWars.svg";

function App() {
  return (
    <main>
      <Nav />
      <section>
        <img id="starwarsimage" alt="Star Wars Logo" src={starwarsimage} />
        <input id="searchbar" type="search" />
        <div className="button-group">
          <button>Search</button>
          <button>Random</button>
        </div>
      </section>
    </main>
  );
}

export default App;
