/* eslint-disable react/prop-types */
// Import React
import PropTypes from 'prop-types';

// Import de bibliothèque React
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import React
import { useEffect } from 'react';

// Gestion des couleurs dynamique avec StyledComponents
const ColorDiv = styled.div`
  background-color: ${(props) => props.color};
  height: 19px;
  width: 39px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    background-color: transparent;
    transition: 0.3s;
    cursor: auto;
    pointer-events: none;
  }

  &::after {
    content: '${(props) => props.color}';
    left: calc(-50% - 1px);
    top: -31px;
    width: calc(200% + 1px);
    height: 21px;
    color: transparent;
    text-transform: uppercase;
    line-height: 21px;
    text-align: center;
    transform: translateY(5px);
  }
  &::before {
    content: '';
    left: calc(50% - 3px);
    top: -13px;
    width: 6px;
    aspect-ratio: 1;
    transform: translateY(5px) rotate(45deg);
  }

  &:hover::after {
    background-color: #1e1e1e;
    color: white;
    transform: translateY(0);
  }
  &:hover::before {
    background-color: #1e1e1e;
    transform: translateY(0) rotate(45deg);
  }
`;

function Post({
  pokemon,
  name,
  description,
  background,
  color1,
  color2,
  color3,
  color4,
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="Post"
      data-aos="fade-up"
      data-aos-offset="60"
      data-aos-once="true"
    >
      <div className="Post-container">
        <div className="Post-container-image">
          <img src={pokemon} alt={name} />
        </div>
        <div className="Post-container-separator" />
        <div className="Post-container-infos">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="Post-container-colors">
            <ColorDiv color={color1} />
            <ColorDiv color={color2} />
            {color3 && <ColorDiv color={color3} />}
            {color4 && <ColorDiv color={color4} />}
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
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string,
  color4: PropTypes.string,
};

Post.defaultProps = {
  color3: null,
  color4: null,
};

export default Post;
