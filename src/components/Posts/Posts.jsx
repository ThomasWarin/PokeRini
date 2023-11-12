/* eslint-disable react/prop-types */

// Import du style
import './Posts.scss';

// Import React
import Post from './Post';

function Posts({ pokemons, functionNextPokemons, totalPokemons }) {
  // Gestion de la disparition du bouton
  const limitPokemons = pokemons.length === totalPokemons - 1;

  return (
    <div className="Posts">
      <section>
        <h2 className="Posts-title">DERNIERS POKÉMONS</h2>
        <div className="Posts-separator" />
        {pokemons.map((item) => (
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
    </div>
  );
}

export default Posts;
