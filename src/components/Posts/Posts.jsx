/* eslint-disable react/prop-types */

// Import du style
import './Posts.scss';

// Import React
import Post from './Post';

function Posts({ pokemons }) {
  return (
    <div className="Posts">
      <section>
        <h2 className="Posts-title">DERNIERS POKÉMONS</h2>
        <div className="Posts-separator" />
        {pokemons.map((item) => (
          <Post key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
}

export default Posts;
