// Import React
import PropTypes from 'prop-types';

function Post({ pokemon, name, description, background }) {
  return (
    <div className="Post">
      <div className="Post-container">
        <div className="Post-container-image">
          <img src={pokemon} alt={name} />
        </div>
        <div className="Post-container-separator" />
        <div className="Post-container-infos">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="Post-colors">
            <div className="color" />
          </div>
        </div>
      </div>
      <div
        className="Post-background"
        style={{ backgroundImage: `url(${background})` }}
      />
    </div>
  );
}

Post.propTypes = {
  pokemon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Post;
