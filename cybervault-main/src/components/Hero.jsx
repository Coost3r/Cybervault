import { useParallax } from 'react-scroll-parallax';
import { Link } from 'react-scroll';

const Hero = () => {
  const { ref: textRef } = useParallax({
    speed: -10,
  });

  const { ref: gridRef } = useParallax({
    speed: 5,
  });

  return (
    <section className="hero section">
      <div className="hero-content fade-in" ref={textRef}>
        <h1 className="hero-title">Welcome to CyberVault</h1>
        <p className="hero-subtitle">Navigate the Threat Matrix</p>
        <div className="hero-buttons">
          <Link
            to="threat-simulations"
            smooth={true}
            duration={500}
            className="button"
          >
            Start the Journey
          </Link>
          <Link
            to="quiz"
            smooth={true}
            duration={500}
            className="button cyan"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
      <div className="hero-background" ref={gridRef}>
        <div className="grid-overlay"></div>
      </div>
      <style jsx="true">{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .hero-content {
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 1rem;
          letter-spacing: 3px;
          background: linear-gradient(
            120deg,
            var(--primary-color),
            var(--accent-color-1),
            var(--accent-color-4)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: textGradient 5s linear infinite;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: var(--accent-color-2);
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(transparent 1px, var(--background-color) 1px),
            linear-gradient(90deg, transparent 1px, var(--background-color) 1px);
          background-size: 30px 30px;
          opacity: 0.1;
        }

        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.8rem;
          }

          .hero-subtitle {
            font-size: 1.4rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .hero-content {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 