import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import { db } from '../config/firebase';
import FeedbackDisplay from './FeedbackDisplay';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    threat: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'feedback'), {
        ...formData,
        timestamp: new Date(),
      });
      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        feedback: '',
        threat: '',
      });
      // Show success message temporarily
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
      console.error('Error submitting feedback:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="section">
      <div className="feedback-section">
        <h2>Submit Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form card">
          <div className="form-group">
            <label htmlFor="feedback-name">Name</label>
            <input
              type="text"
              id="feedback-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="feedback-email">Email</label>
            <input
              type="email"
              id="feedback-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="feedback-text">Feedback</label>
            <textarea
              id="feedback-text"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows="4"
              autoComplete="off"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="feedback-threat">Report a Threat (Optional)</label>
            <textarea
              id="feedback-threat"
              name="threat"
              value={formData.threat}
              onChange={handleChange}
              rows="3"
              placeholder="Describe any security threats or vulnerabilities you've encountered..."
              autoComplete="off"
            ></textarea>
          </div>

          {error && <div className="error-message">{error}</div>}
          {isSubmitted && (
            <div className="success-message fade-in">
              <FaCheck /> Feedback submitted successfully!
            </div>
          )}

          <button type="submit" className="button submit-button" disabled={isSubmitting}>
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                Submit Feedback <FaPaperPlane className="button-icon" />
              </>
            )}
          </button>
        </form>

        <FeedbackDisplay />
      </div>
      <style jsx="true">{`
        .feedback-section {
          max-width: 1200px;
          margin: 0 auto;
        }

        .feedback-form {
          max-width: 600px;
          margin: 0 auto 4rem;
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
        }

        .error-message {
          color: #f44336;
          margin-bottom: 1rem;
        }

        .success-message {
          color: var(--accent-color-1);
          background: rgba(0, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .submit-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .button-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .feedback-form {
            padding: 1.5rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeedbackForm; 