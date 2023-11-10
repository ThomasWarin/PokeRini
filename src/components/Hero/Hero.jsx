/* eslint-disable react/no-unescaped-entities */

// Import du style
import './Hero.scss';

// Import d'images
import bulbizarreBackground from '../../assets/background/bulbizarre-background.png';
import carapuceBackground from '../../assets/background/carapuce-background.png';
import osselaitBackground from '../../assets/background/osselait-background.png';
import salamecheBackground from '../../assets/background/salameche-background.png';

import bulbizarre from '../../assets/pokemon/bulbizarre.webp';
import carapuce from '../../assets/pokemon/carapuce.webp';
import osselait from '../../assets/pokemon/osselait.webp';
import salameche from '../../assets/pokemon/salameche.webp';

function Hero() {
  return (
    <div
      className="Hero"
      style={{ backgroundImage: `url(${carapuceBackground})` }}
    >
      <div className="Hero-section">
        <div className="Hero-section-left">
          <h2 className="Pokemon-name">CARAPUCE</h2>
          <img className="Pokemon-image" src={carapuce} alt="Carapuce" />
        </div>
        <div className="Hero-section-separator" />
        <div className="Hero-section-right">
          <h3 className="Pokemon-section">DESCRIPTION</h3>
          <p>
            Ce petit pokémon est connu pour son agilité et sa rapidité en
            nageant dans l'eau. Il est un excellent choix de compagnon
            aquatique.
          </p>
          <div className="Hero-section-line" />
          <h3 className="Pokemon-section">ATTAQUES</h3>
          <h4 className="Pokemon-attack">Jet d'Eau Cotonneux</h4>
          <p>
            Lancez une pièce. Si c'est face, cette attaque fait 10 dégâts
            supplémentaires. L'adversaire est maintenant trempé d'eau et de
            douceur.
          </p>
          <h4 className="Pokemon-attack">Armure Lanugineuse</h4>
          <p>
            Carapuce se recroqueville dans sa carapace douce, réduisant de 10
            les dégâts des attaques reçues lors du prochain tour de votre
            adversaire.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
