// Import du style
import './Footer.scss';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="Footer">
      <div className="Footer-separator" />
      <div className="Footer-container">
        <p className="copyright">© PokéRini 2023</p>
        <button
          className="anchor-top"
          type="button"
          onClick={() => scrollToTop()}
        >
          Haut de page
        </button>
      </div>
    </div>
  );
}

export default Footer;
