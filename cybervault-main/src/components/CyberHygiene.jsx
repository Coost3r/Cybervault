import { useInView } from 'react-intersection-observer';
import { FaCheck, FaLock, FaShieldAlt, FaUserSecret, FaWifi, FaDatabase, FaEnvelope, FaMobile } from 'react-icons/fa';

const tips = [
  {
    id: 1,
    icon: <FaLock />,
    title: 'Strong Passwords',
    description: 'Use complex passwords with numbers, symbols, and mixed case letters.',
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: 'Two-Factor Authentication',
    description: 'Enable 2FA on all your important accounts for extra security.',
  },
  {
    id: 3,
    icon: <FaUserSecret />,
    title: 'Privacy Settings',
    description: 'Regularly review and update privacy settings on social media.',
  },
  {
    id: 4,
    icon: <FaWifi />,
    title: 'Secure Networks',
    description: 'Avoid using public Wi-Fi without a VPN connection.',
  },
  {
    id: 5,
    icon: <FaDatabase />,
    title: 'Regular Backups',
    description: 'Keep important data backed up in secure, encrypted storage.',
  },
  {
    id: 6,
    icon: <FaEnvelope />,
    title: 'Email Security',
    description: 'Be cautious of unexpected attachments and verify sender addresses.',
  },
  {
    id: 7,
    icon: <FaMobile />,
    title: 'Device Updates',
    description: 'Keep all devices and software updated with security patches.',
  },
];

const TipCard = ({ tip, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`tip-card card ${inView ? 'fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="tip-icon">{tip.icon}</div>
      <div className="tip-content">
        <h3>{tip.title}</h3>
        <p>{tip.description}</p>
      </div>
      <div className="checkmark">
        <FaCheck />
      </div>
      <style jsx="true">{`
        .tip-card {
          opacity: 0;
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          padding: 2rem;
          min-height: 160px;
          background: rgba(10, 10, 15, 0.9);
          border: 1px solid var(--primary-color);
          transition: all 0.3s ease;
        }

        .tip-card:nth-child(1) {
          border-color: var(--primary-color);
        }

        .tip-card:nth-child(2) {
          border-color: var(--accent-color-1);
        }

        .tip-card:nth-child(3) {
          border-color: var(--accent-color-2);
        }

        .tip-card:nth-child(4) {
          border-color: var(--accent-color-3);
        }

        .tip-card:nth-child(5) {
          border-color: var(--accent-color-4);
        }

        .tip-card:nth-child(6) {
          border-color: var(--primary-color);
        }

        .tip-card:nth-child(7) {
          border-color: var(--accent-color-1);
        }

        .tip-icon {
          font-size: 2.8rem;
          flex-shrink: 0;
          transition: color 0.3s ease;
        }

        .tip-card:nth-child(1) .tip-icon { color: var(--primary-color); }
        .tip-card:nth-child(2) .tip-icon { color: var(--accent-color-1); }
        .tip-card:nth-child(3) .tip-icon { color: var(--accent-color-2); }
        .tip-card:nth-child(4) .tip-icon { color: var(--accent-color-3); }
        .tip-card:nth-child(5) .tip-icon { color: var(--accent-color-4); }
        .tip-card:nth-child(6) .tip-icon { color: var(--primary-color); }
        .tip-card:nth-child(7) .tip-icon { color: var(--accent-color-1); }

        .tip-content {
          flex-grow: 1;
          text-align: left;
        }

        .tip-content h3 {
          font-size: 1.8rem;
          margin-bottom: 0.8rem;
          transition: color 0.3s ease;
        }

        .tip-card:nth-child(1) h3 { color: var(--primary-color); }
        .tip-card:nth-child(2) h3 { color: var(--accent-color-1); }
        .tip-card:nth-child(3) h3 { color: var(--accent-color-2); }
        .tip-card:nth-child(4) h3 { color: var(--accent-color-3); }
        .tip-card:nth-child(5) h3 { color: var(--accent-color-4); }
        .tip-card:nth-child(6) h3 { color: var(--primary-color); }
        .tip-card:nth-child(7) h3 { color: var(--accent-color-1); }

        .tip-content p {
          font-size: 1.2rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .tip-card:hover {
          transform: translateX(10px);
          box-shadow: 0 0 20px rgba(0, 255, 157, 0.2);
        }

        .tip-card:nth-child(1):hover { box-shadow: 0 0 20px var(--primary-color-40); }
        .tip-card:nth-child(2):hover { box-shadow: 0 0 20px var(--accent-color-1-40); }
        .tip-card:nth-child(3):hover { box-shadow: 0 0 20px var(--accent-color-2-40); }
        .tip-card:nth-child(4):hover { box-shadow: 0 0 20px var(--accent-color-3-40); }
        .tip-card:nth-child(5):hover { box-shadow: 0 0 20px var(--accent-color-4-40); }
        .tip-card:nth-child(6):hover { box-shadow: 0 0 20px var(--primary-color-40); }
        .tip-card:nth-child(7):hover { box-shadow: 0 0 20px var(--accent-color-1-40); }

        .checkmark {
          color: var(--primary-color);
          font-size: 2rem;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .tip-card:hover .checkmark {
          opacity: 1;
          transform: scale(1);
        }

        .tip-card.fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin: 0 auto;
          width: 100%;
          max-width: 1600px;
        }

        @media (max-width: 768px) {
          .tip-card {
            padding: 2rem;
          }

          .tip-icon {
            font-size: 2.5rem;
          }

          .tip-content h3 {
            font-size: 1.8rem;
          }

          .tip-content p {
            font-size: 1.2rem;
          }

          .checkmark {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

const CyberHygiene = () => {
  return (
    <section id="cyber-hygiene" className="section">
      <h2>Cyber Hygiene Tips</h2>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <TipCard
            key={tip.id}
            tip={tip}
            delay={index * 100}
          />
        ))}
      </div>
      <style jsx="true">{`
        #cyber-hygiene {
          text-align: center;
        }

        h2 {
          margin-bottom: 3rem;
        }
      `}</style>
    </section>
  );
};

export default CyberHygiene; 