// Import des backgrounds
import bulbizarreBackground from './background/bulbizarre-background.webp';
import salamecheBackground from './background/salameche-background.webp';
import carapuceBackground from './background/carapuce-background.webp';
import osselaitBackground from './background/osselait-background.webp';
import noctaliBackground from './background/noctali-background.webp';
import phyllaliBackground from './background/phyllali-background.webp';
import pikachuBackground from './background/pikachu-background.webp';
import flambinoBackground from './background/flambino-background.webp';

// Import des pokémons
import bulbizarre from './pokemon/bulbizarre.webp';
import salameche from './pokemon/salameche.webp';
import carapuce from './pokemon/carapuce.webp';
import osselait from './pokemon/osselait.webp';
import noctali from './pokemon/noctali.webp';
import phyllali from './pokemon/phyllali.webp';
import pikachu from './pokemon/pikachu.webp';
import flambino from './pokemon/flambino.webp';

export default [
  {
    id: 8,
    background: phyllaliBackground,
    pokemon: phyllali,
    name: 'Phyllali',
    description:
      "Connu pour sa capacité à se fondre dans la nature et à utiliser l'énergie du soleil, Phyllali est un allié indispensable pour ceux qui cherchent l'harmonie avec l'environnement.",
    attack1: ' Feuille de Laine ',
    attack1Description:
      "Les feuilles tricotées de Phyllali sont à la fois douces et tranchantes, surprenant l'adversaire avec leur précision.",
    attack1PV: 30,
    attack2: 'Soin Soyeux',
    attack2Description:
      'Retirez deux marqueurs de dégât de Phyllali. Les fibres naturelles de son corps apportent un réconfort et une guérison rapide.',
    attack2PV: 0,
    color1: '#cbc8c0',
    color2: '#668074',
    color3: '#6b4e4d',
  },
  {
    id: 7,
    background: pikachuBackground,
    pokemon: pikachu,
    name: 'Pikachu',
    description:
      "Aussi nommé Grokachu, on raconte que ce Pikachu est tombé dans une marmite de baies lorsqu'il n'était qu'un Pichu.",
    attack1: 'Étincelle Filée ',
    attack1Description:
      "L'électricité parcourt les fils de Pikachu, surprenant l'adversaire avec une attaque vive et pétillante.",
    attack1PV: 30,
    attack2: 'Queue Zigzag',
    attack2Description:
      'Si vous obtenez face, Pikachu esquive la prochaine attaque. Sa queue crochetée en zigzag lui donne une agilité inattendue.',
    attack2PV: 10,
    color1: '#f2d572',
    color2: '#a11e40',
    color3: '#2e3344',
  },
  {
    id: 6,
    background: noctaliBackground,
    pokemon: noctali,
    name: 'Noctali',
    description:
      "En plus d'être un expert en furtivité et en attaques nocturnes, son caractère shiny en fait un allié précieux pour les dresseurs qui apprécient la rareté et la beauté.",
    attack1: 'Regard Lunaire',
    attack1Description:
      "L'adversaire est maintenant confus. Les yeux étincelants de Noctali, accentués par des perles délicates, captivent et désorientent.",
    attack1PV: 0,
    attack2: 'Ombre de Laine',
    attack2Description:
      "Cette attaque passe à travers les défenses, reflétant la capacité de Noctali à se fondre dans l'obscurité.",
    attack2PV: 20,
    color1: '#1d71ab',
    color2: '#37313d',
  },
  {
    id: 5,
    background: flambinoBackground,
    pokemon: flambino,
    name: 'Flambino',
    description:
      "Énergique et fier, il passe ses journées à s'entraîner au ballon et à améliorer ses compétences tactiques.",
    attack1: 'Tir Crocheté',
    attack1Description:
      "Flambino lance une rafale rapide de projectiles enflammés surprenant l'adversaire par leur vitesse et leur précision.",
    attack1PV: 30,
    attack2: 'Feinte Laineuse',
    attack2Description:
      'Flambino utilise son agilité pour esquiver et contre-attaquer, tirant parti de sa structure en laine flexible pour des mouvements rapides et imprévisibles.',
    attack2PV: 20,
    color1: '#f9f3f0',
    color2: '#f6e5a6',
    color3: '#dd8432',
    color4: '#eb7536',
  },
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
    color1: '#d9dbdd',
    color2: '#a99b83',
    color3: '#816766',
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
    color1: '#e1e5e6',
    color2: '#bba58d',
    color3: '#b79490',
    color4: '#8cbcd1',
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
    color1: '#d1c3b4',
    color2: '#cfa23a',
    color3: '#fb794f',
    color4: '#df4f56',
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
    color1: '#85bcc5',
    color2: '#416f78',
    color3: '#4d6561',
  },
];
