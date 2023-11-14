/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */

// Import du style
import './Hero.scss';

// Import de bibliothèque React
import { useMediaQuery } from 'react-responsive';

// Import React
import PropTypes from 'prop-types';
import { useState } from 'react';

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
  const max1000px = useMediaQuery({ query: '(max-width: 1000px)' });
  const max750px = useMediaQuery({ query: '(max-width: 750px)' });

  const [blockVisible, setBlockVisible] = useState('description');

  return (
    <main className="Hero" style={{ backgroundImage: `url(${background})` }}>
      <section className="Hero-section">
        <div className="Hero-section-left">
          <h2 className="Pokemon-name">{name}</h2>
          <img className="Pokemon-image" src={pokemon} alt={name} />
        </div>

        {!max750px && <div className="Hero-section-separator" />}

        <div className="Hero-section-right">
          <h3
            // prettier-ignore
            className={`Pokemon-section ${ blockVisible === 'description' ? 'active' : '' }`}
            onClick={() => setBlockVisible('description')}
          >
            DESCRIPTION
          </h3>
          <p
            // prettier-ignore
            className={`Pokemon-description ${blockVisible  === 'description' ? 'active' : 'inactive'}`}
          >
            {description}
          </p>

          {!max1000px && <div className="Hero-section-line" />}

          <h3 className="Pokemon-section">ATTAQUES</h3>
          <div
            className="Pokemon-attack"
            onClick={() => setBlockVisible('attack1')}
          >
            <h4>{attack1}</h4>
            {attack1PV !== 0 && <span>{attack1PV}</span>}
          </div>
          <p
            // prettier-ignore
            className={`Pokemon-attack-1 ${blockVisible  === 'attack1' ? 'active' : 'inactive'}`}
          >
            {attack1Description}
          </p>
          <div
            className="Pokemon-attack"
            onClick={() => setBlockVisible('attack2')}
          >
            <h4>{attack2}</h4>
            {attack2PV !== 0 && <span>{attack2PV}</span>}
          </div>
          <p
            // prettier-ignore
            className={`Pokemon-attack-2 ${blockVisible  === 'attack2' ? 'active' : 'inactive'}`}
          >
            {attack2Description}
          </p>
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
