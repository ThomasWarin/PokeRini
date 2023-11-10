// Import du style
import './App.scss';

// Import React
import Hero from '../components/Hero/Hero';
import Posts from '../components/Posts/Posts';

// Import des datas
import data from '../assets/data';

function App() {
  // Récupération du dernier Pokémon
  const heroPokemon = data.reduce((prev, current) => {
    return prev.id > current.id ? prev : current;
  });

  // Récupération des anciens Pokémons
  const otherPokemons = data.filter((item) => item.id !== heroPokemon.id);

  return (
    <div className="App">
      <h1 className="App-title">POKÉRINI</h1>
      <Hero {...heroPokemon} />
      <Posts pokemons={otherPokemons} />
    </div>
  );
}

export default App;
