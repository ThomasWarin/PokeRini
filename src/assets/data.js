// Import des backgrounds
import bulbizarreBackground from './background/bulbizarre-background.png';
import salamecheBackground from './background/salameche-background.png';
import carapuceBackground from './background/carapuce-background.png';
import osselaitBackground from './background/osselait-background.png';

// Import des pokémons
import bulbizarre from './pokemon/bulbizarre.webp';
import salameche from './pokemon/salameche.webp';
import carapuce from './pokemon/carapuce.webp';
import osselait from './pokemon/osselait.webp';

export default [
  {
    id: 4,
    background: osselaitBackground,
    pokemon: osselait,
    name: 'Osselait',
    description:
      'En raison de sa rareté, il est exceptionnel de le voir jouer seul avec son crâne ou attaquer ses adversaires en lançant son os.',
    attack1: 'Maille Osseuse',
    attack1Description:
      "Lancez une pièce. Si c'est face, cette attaque fait 10 dégâts supplémentaires. L'adversaire est étonné par la solidité surprenante de ce petit os en laine.",
    attack1PV: 20,
    attack2: 'Armure de Laine',
    attack2Description:
      "Réduit les dégâts reçus de 20 lors du prochain tour. La douceur de sa laine absorbe l'impact.",
    attack2PV: 0,
  },
  {
    id: 3,
    background: carapuceBackground,
    pokemon: carapuce,
    name: 'Carapuce',
    description:
      "Ce petit pokémon est connu pour son agilité et sa rapidité en nageant dans l'eau. Il est un excellent choix de compagnon aquatique.",
    attack1: "Jet d'Eau Cotonneux",
    attack1Description:
      "Lancez une pièce. Si c'est face, cette attaque fait 10 dégâts supplémentaires. L'adversaire est maintenant trempé d'eau et de douceur.",
    attack1PV: 20,
    attack2: 'Douce Sérénité',
    attack2Description:
      'Carapuce se recroqueville dans sa carapace douce, réduisant de 10 les dégâts des attaques reçues lors du prochain tour de votre adversaire.',
    attack2PV: 0,
  },
  {
    id: 2,
    background: salamecheBackground,
    pokemon: salameche,
    name: 'Salamèche',
    description:
      'Son charme et son pouvoir de pyrokinésie en font un compagnon idéal pour les dresseurs intrépides.',
    attack1: 'Flammèche Cotonneuse',
    attack1Description:
      "Les flammes douces mais persistantes de Salamèche peuvent brûler l'adversaire avec une chaleur surprenante.",
    attack1PV: 30,
    attack2: 'Queue Torsadée',
    attack2Description:
      'Retirez un marqueur de dégât de Salamèche. La queue torsadée de Salamèche, crochetée avec soin, lui permet de récupérer rapidement.',
    attack2PV: 0,
  },
  {
    id: 1,
    background: bulbizarreBackground,
    pokemon: bulbizarre,
    name: 'Bulbizarre',
    description:
      "Reconnaissable à sa peau tachetée et à son bulbe, cette peluche stocke l'énergie solaire pour ses attaques.",
    attack1: 'Vrille Chlorophylle',
    attack1Description:
      "Lancez une pièce. Paralyse l'adversaire si vous obtenez face. Les lianes de Bulbizarre, tricotées avec une laine verte éclatante, s'enroulent avec une précision étonnante.",
    attack1PV: 10,
    attack2: 'Douce Sérénité',
    attack2Description:
      "Prévient tous les effets d'attaques, y compris les dégâts, infligés à Bulbizarre lors du prochain tour. La sérénité de son expression apaisante renforce ses défenses.",
    attack2PV: 0,
  },
];
