/* eslint-disable react/prop-types */

// Import du style
import './Posts.scss';

// Import React
import Post from './Post';
import Footer from '../Footer/Footer';

function Posts({ pokemonsDisplay, functionNextPokemons, totalPokemons }) {
  // Gestion de la disparition du bouton
  const limitPokemons = pokemonsDisplay.length === totalPokemons - 1;

  return (
    <div className="Posts">
      <section>
        <h2 className="Posts-title">DERNIERS POKÉMONS</h2>
        <div className="Posts-separator" />
        {pokemonsDisplay.map((item) => (
          <Post key={item.id} {...item} />
        ))}
        {!limitPokemons && (
          <button
            className="Posts-button"
            type="button"
            onClick={functionNextPokemons}
          >
            Voir plus de Pokémons
          </button>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Posts;
