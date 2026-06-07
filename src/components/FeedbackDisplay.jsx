import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const FeedbackDisplay = () => {
  const [feedbackEntries, setFeedbackEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const q = query(
          collection(db, 'feedback'),
          orderBy('timestamp', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedbackEntries(data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  if (loading) {
    return (
      <div className="feedback-display card">
        <h3>Loading Feedback...</h3>
      </div>
    );
  }

  return (
    <div ref={ref} className={`feedback-display ${inView ? 'fade-in' : ''}`}>
      <h3>Community Feedback</h3>
      <div className="feedback-grid">
        {feedbackEntries.map((entry) => (
          <div key={entry.id} className="feedback-card card">
            <div className="feedback-header">
              <div className="user-info">
                <h4>{entry.name}</h4>
                <span className="email">{entry.email}</span>
              </div>
              <div className="timestamp">
                {new Date(entry.timestamp?.toDate()).toLocaleDateString()}
              </div>
            </div>
            <div className="feedback-content">
              <FaQuoteLeft className="quote-icon left" />
              <p>{entry.feedback}</p>
              <FaQuoteRight className="quote-icon right" />
            </div>
            {entry.threat && (
              <div className="threat-report">
                <h5>Reported Threat:</h5>
                <p>{entry.threat}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx="true">{`
        .feedback-display {
          padding: 3rem 0;
          width: 100%;
        }

        h3 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--accent-color-2);
          font-size: 2.2rem;
        }

        .feedback-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .feedback-card {
          background: rgba(10, 10, 15, 0.9);
          border: 1px solid var(--accent-color-1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          padding: 1.5rem 2rem;
          width: 100%;
        }

        .feedback-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 15px var(--accent-color-1);
        }

        .feedback-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .user-info h4 {
          color: var(--primary-color);
          margin: 0;
          font-size: 1.4rem;
          margin-bottom: 0.3rem;
        }

        .email {
          font-size: 1rem;
          opacity: 0.7;
        }

        .timestamp {
          font-size: 0.9rem;
          opacity: 0.6;
          font-family: 'Orbitron', sans-serif;
        }

        .feedback-content {
          position: relative;
          padding: 1rem 0;
          font-size: 1.2rem;
        }

        .quote-icon {
          position: absolute;
          font-size: 1.2rem;
          opacity: 0.3;
          color: var(--accent-color-1);
        }

        .quote-icon.left {
          top: 0;
          left: 0.5rem;
        }

        .quote-icon.right {
          bottom: 0;
          right: 0.5rem;
        }

        .feedback-content p {
          padding: 0 2rem;
          line-height: 1.5;
          text-align: left;
        }

        .threat-report {
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .threat-report h5 {
          color: var(--accent-color-2);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .threat-report p {
          font-size: 1rem;
          opacity: 0.8;
          text-align: left;
          padding: 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .feedback-grid {
            grid-template-columns: 1fr;
            padding: 0;
          }

          .feedback-card {
            margin: 0 1rem;
          }

          h3 {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .user-info h4 {
            font-size: 1.3rem;
          }

          .feedback-content {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FeedbackDisplay;