import { useInView } from 'react-intersection-observer';
import { useParallax } from 'react-scroll-parallax';
import { FaUserNinja, FaUserSecret, FaBuilding, FaGlobe } from 'react-icons/fa';

const hackerProfiles = [
  {
    id: 1,
    title: 'Script Kiddie',
    icon: <FaUserNinja />,
    description: 'Inexperienced hackers who use existing scripts and tools without understanding them.',
    traits: ['Limited technical knowledge', 'Uses pre-made tools', 'Opportunistic attacks'],
    threatLevel: 'Low',
    color: 'var(--accent-color-1)',
  },
  {
    id: 2,
    title: 'Black Hat',
    icon: <FaUserSecret />,
    description: 'Malicious hackers who breach security for personal gain or malicious intent.',
    traits: ['Advanced technical skills', 'Creates custom malware', 'Targets valuable data'],
    threatLevel: 'High',
    color: 'var(--accent-color-2)',
  },
  {
    id: 3,
    title: 'Insider Threat',
    icon: <FaBuilding />,
    description: 'Employees or contractors who misuse their authorized access.',
    traits: ['Has legitimate access', 'Knowledge of systems', 'Internal motivation'],
    threatLevel: 'Medium',
    color: 'var(--accent-color-3)',
  },
  {
    id: 4,
    title: 'Nation-State Actor',
    icon: <FaGlobe />,
    description: 'Government-sponsored groups with sophisticated capabilities.',
    traits: ['Advanced persistent threats', 'Unlimited resources', 'Strategic targets'],
    threatLevel: 'Critical',
    color: 'var(--accent-color-4)',
  },
];

const HackerCard = ({ profile, delay }) => {
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
      className={`hacker-card card ${inView ? 'fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div ref={cardRef} className="card-content">
        <div className="threat-level" style={{ backgroundColor: profile.color }}>
          {profile.threatLevel}
        </div>
        <div className="hacker-icon" style={{ color: profile.color }}>{profile.icon}</div>
        <h3 style={{ color: profile.color }}>{profile.title}</h3>
        <p className="description">{profile.description}</p>
        <div className="traits">
          {profile.traits.map((trait, index) => (
            <span key={index} className="trait" style={{ borderColor: profile.color }}>
              {trait}
            </span>
          ))}
        </div>
      </div>
      <style jsx="true">{`
        .hacker-card {
          opacity: 0;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .card-content {
          padding: 0;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.03);
          height: 100%;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
        }

        .hacker-card:hover .card-content {
          border-color: ${profile.color};
          box-shadow: 0 0 20px ${profile.color}40;
          transform: translateY(-5px);
        }

        .threat-level {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0.4rem 0.8rem;
          color: var(--background-color);
          font-size: 0.9rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hacker-icon {
          position: absolute;
          top: 0.5rem;
          left: 1rem;
          font-size: 2.8rem;
          transition: transform 0.3s ease;
          color: ${profile.color};
        }

        .hacker-card:hover .hacker-icon {
          transform: scale(1.1) rotate(5deg);
        }

        h3 {
          padding-top: 4rem;
          margin-bottom: 1rem;
          font-size: 2.2rem;
          color: ${profile.color};
          text-align: center;
        }

        .description {
          margin-bottom: 1.5rem;
          opacity: 0.9;
          line-height: 1.6;
          font-size: 1.2rem;
          flex-grow: 1;
          padding: 0 1.5rem;
          text-align: center;
        }

        .traits {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
          margin-top: auto;
          padding: 0 1.5rem 1.5rem;
        }

        .trait {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.6rem 1.4rem;
          border-radius: 15px;
          font-size: 1.1rem;
          border: 1px solid;
          transition: all 0.3s ease;
        }

        .hacker-card:hover .trait {
          background: rgba(255, 255, 255, 0.1);
        }

        .hacker-card.fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .grid {
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          max-width: 1600px;
          width: 100%;
          padding: 0 1rem;
        }
      `}</style>
    </div>
  );
};

const HackerProfiles = () => {
  const { ref: titleRef } = useParallax({
    speed: -5,
    translateY: [0, 50],
  });

  return (
    <section id="hacker-profiles" className="section">
      <div ref={titleRef}>
        <h2>Hacker Profiles</h2>
        <p className="section-description">
          Understanding different types of cyber threats and their capabilities.
        </p>
      </div>
      <div className="grid">
        {hackerProfiles.map((profile, index) => (
          <HackerCard
            key={profile.id}
            profile={profile}
            delay={index * 200}
          />
        ))}
      </div>
      <style jsx="true">{`
        #hacker-profiles {
          text-align: center;
        }

        h2 {
          margin-bottom: 1rem;
          background: linear-gradient(120deg, var(--accent-color-4), var(--accent-color-1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-description {
          color: var(--text-color);
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 3rem;
          font-size: 1.2rem;
        }

        .grid {
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
      `}</style>
    </section>
  );
};

export default HackerProfiles; 