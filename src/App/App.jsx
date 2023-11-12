// Import du style
import './App.scss';

// Import React
import { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Posts from '../components/Posts/Posts';

// Import des datas
import data from '../assets/data';

function App() {
  // Gestion de la pagination
  const [pagination, setPagination] = useState(6);
  const handleNextPokemons = () => {
    setPagination(pagination + 5);
  };

  // Récupération du nombre total de Pokémons disponible
  const totalPokemons = data.length;

  // Trie des Pokémons par ID décroissant
  const sortedData = data.sort((a, b) => b.id - a.id);

  // Récupération des 6 Pokémons les plus récents (Hero + 5 plus récents)
  const initialPokemons = sortedData.slice(0, pagination);
  const heroPokemon = initialPokemons[0];
  const latestPokemons = initialPokemons.slice(1);

  return (
    <div className="App">
      <h1 className="App-title">POKÉRINI</h1>
      <Hero {...heroPokemon} />
      <Posts
        pokemons={latestPokemons}
        functionNextPokemons={handleNextPokemons}
        totalPokemons={totalPokemons}
      />
    </div>
  );
}

export default App;
