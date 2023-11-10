/* eslint-disable react/no-unescaped-entities */

// Import du style
import './Hero.scss';

// Import React
import PropTypes from 'prop-types';

function Hero({
  background,
  name,
  pokemon,
  description,
  attack1,
  attack2,
  attack1Description,
  attack2Description,
  attack1PV,
  attack2PV,
}) {
  return (
    <main className="Hero" style={{ backgroundImage: `url(${background})` }}>
      <section className="Hero-section">
        <div className="Hero-section-left">
          <h2 className="Pokemon-name">{name}</h2>
          <img className="Pokemon-image" src={pokemon} alt={name} />
        </div>
        <div className="Hero-section-separator" />
        <div className="Hero-section-right">
          <h3 className="Pokemon-section">DESCRIPTION</h3>
          <p>{description}</p>
          <div className="Hero-section-line" />
          <h3 className="Pokemon-section">ATTAQUES</h3>
          <div className="Pokemon-attack">
            <h4>{attack1}</h4>
            {attack1PV !== 0 && <span>{attack1PV}</span>}
          </div>
          <p>{attack1Description}</p>
          <div className="Pokemon-attack">
            <h4>{attack2}</h4>
            {attack2PV !== 0 && <span>{attack2PV}</span>}
          </div>
          <p>{attack2Description}</p>
        </div>
      </section>
    </main>
  );
}

Hero.propTypes = {
  pokemon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  attack1: PropTypes.string.isRequired,
  attack1Description: PropTypes.string.isRequired,
  attack1PV: PropTypes.number.isRequired,
  attack2: PropTypes.string.isRequired,
  attack2Description: PropTypes.string.isRequired,
  attack2PV: PropTypes.number.isRequired,
};

export default Hero;
