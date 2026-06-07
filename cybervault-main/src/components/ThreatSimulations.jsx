import { useInView } from 'react-intersection-observer';
import { useParallax } from 'react-scroll-parallax';
import { FaShieldVirus, FaLock, FaServer, FaKeyboard } from 'react-icons/fa';

const threats = [
  {
    id: 1,
    title: 'Phishing Attacks',
    description: 'Social engineering attacks that trick users into revealing sensitive information.',
    icon: <FaShieldVirus />,
    color: 'var(--accent-color-1)',
  },
  {
    id: 2,
    title: 'Ransom-ware',
    description: 'Malicious software that encrypts files and demands payment for decryption.',
    icon: <FaLock />,
    color: 'var(--accent-color-2)',
  },
  {
    id: 3,
    title: 'DDoS Attacks',
    description: 'Overwhelming servers with traffic to disrupt services.',
    icon: <FaServer />,
    color: 'var(--accent-color-3)',
  },
  {
    id: 4,
    title: 'Keyloggers',
    description: 'Malware that records keystrokes to steal passwords and sensitive data.',
    icon: <FaKeyboard />,
    color: 'var(--accent-color-4)',
  },
];

const ThreatCard = ({ threat, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: cardRef } = useParallax({
    speed: 5,
    scale: [0.9, 1.1],
    easing: 'easeInQuad',
  });

  return (
    <div
      ref={ref}
      className={`threat-card card ${inView ? 'fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div ref={cardRef} className="card-content">
        <div className="threat-icon" style={{ color: threat.color }}>{threat.icon}</div>
        <h3 style={{ color: threat.color }}>{threat.title}</h3>
        <p>{threat.description}</p>
      </div>
      <style jsx="true">{`
        .threat-card {
          opacity: 0;
          text-align: center;
          transition: transform 0.3s ease;
          display: flex;
          justify-content: center;
        }

        .card-content {
          padding: 2rem;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
        }

        .threat-card:hover .card-content {
          border-color: ${threat.color};
          box-shadow: 0 0 20px ${threat.color}40;
          transform: translateY(-5px);
        }

        .threat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .threat-card:hover .threat-icon {
          transform: scale(1.1);
        }

        h3 {
          margin-bottom: 2.5rem;
          font-size: 2.5rem;
          width: 100%;
        }

        p {
          color: var(--text-color);
          opacity: 0.9;
          line-height: 1.6;
          width: 100%;
        }

        .threat-card.fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const ThreatSimulations = () => {
  const { ref: titleRef } = useParallax({
    speed: -5,
    translateY: [0, 50],
  });

  return (
    <section id="threat-simulations" className="section">
      <div ref={titleRef}>
        <h2>Threat Simulations</h2>
        <p className="section-description">
          Explore common cybersecurity threats and learn how to protect against them.
        </p>
      </div>
      <div className="grid">
        {threats.map((threat, index) => (
          <ThreatCard
            key={threat.id}
            threat={threat}
            delay={index * 200}
          />
        ))}
      </div>
      <style jsx>{`
        #threat-simulations {
          text-align: center;
        }

        h2 {
          margin-bottom: 1rem;
          background: linear-gradient(120deg, var(--primary-color), var(--accent-color-1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-description {
          color: var(--text-color);
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 3rem;
          font-size: 1.2rem;
          padding-bottom: 2rem;
        }

        .grid {
          gap: 2rem;
        }
      `}</style>
    </section>
  );
};

export default ThreatSimulations; 