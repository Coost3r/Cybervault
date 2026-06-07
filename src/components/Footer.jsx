import { FaGithub, FaLock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="simulations" smooth={true} duration={500}>
              Threat Simulations
            </Link>
            <Link to="hygiene" smooth={true} duration={500}>
              Cyber Hygiene
            </Link>
            <Link to="quiz" smooth={true} duration={500}>
              Quiz
            </Link>
            <Link to="hackers" smooth={true} duration={500}>
              Hacker Profiles
            </Link>
            <Link to="community" smooth={true} duration={500}>
              Community
            </Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Made by -</h4>
        <h5>23BRS1358 - Soumil Gandhi</h5>
        <h5>23BRS1403 - Krishna Patri</h5>
        </div>

        <div className="footer-section">
          <h4>Disclaimer</h4>
          <p className="disclaimer">
This is a website created for web programming DA by Soumil Gandhi and Krishna Patri.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <FaLock className="lock-icon" /> CyberVault &copy; {new Date().getFullYear()} | All Rights Reserved
        </p>
      </div>

      <style jsx="true">{`
        .footer {
          background: rgba(10, 10, 15, 0.95);
          border-top: 1px solid var(--primary-color);
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }

        .footer-section h4 {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-nav a {
          color: var(--text-color);
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-nav a:hover {
          color: var(--primary-color);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .social-links a {
          color: var(--text-color);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: var(--primary-color);
        }

        .disclaimer {
          font-size: 0.9rem;
          opacity: 0.8;
          line-height: 1.6;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom p {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .lock-icon {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer {
            padding: 3rem 0 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 