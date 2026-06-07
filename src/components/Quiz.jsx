import { useState } from 'react';
import { FaCheck, FaTimes, FaShieldAlt } from 'react-icons/fa';

const questions = [
  {
    id: 1,
    question: 'What is phishing?',
    options: [
      'A type of fishing sport',
      'A social engineering attack to steal information',
      'A computer virus',
      'A network protocol',
    ],
    correct: 1,
    explanation: 'Phishing is a cyber attack that uses disguised emails to steal sensitive information.',
  },
  {
    id: 2,
    question: 'Which of these is NOT a good password practice?',
    options: [
      'Using special characters',
      'Writing it down on a sticky note',
      'Using a password manager',
      'Regular password changes',
    ],
    correct: 1,
    explanation: 'Writing passwords on sticky notes makes them easily accessible to others.',
  },
  {
    id: 3,
    question: 'What is two-factor authentication (2FA)?',
    options: [
      'Using two different passwords',
      'Having two email accounts',
      'A second verification step after password',
      'Double encrypting your data',
    ],
    correct: 2,
    explanation: '2FA adds an extra layer of security by requiring a second form of verification.',
  },
  {
    id: 4,
    question: 'What is ransomware?',
    options: [
      'A type of antivirus',
      'Malware that encrypts files for ransom',
      'A network security tool',
      'A backup system',
    ],
    correct: 1,
    explanation: 'Ransomware encrypts user files and demands payment for decryption.',
  },
  {
    id: 5,
    question: 'Which network is typically more secure?',
    options: [
      'Public Wi-Fi',
      'Home Wi-Fi',
      'Coffee shop Wi-Fi',
      'Airport Wi-Fi',
    ],
    correct: 1,
    explanation: 'Home Wi-Fi networks are typically more secure as you control the security settings.',
  },
  {
    id: 6,
    question: 'What is a VPN used for?',
    options: [
      'Speeding up internet',
      'Storing passwords',
      'Encrypting network traffic',
      'Creating backups',
    ],
    correct: 2,
    explanation: 'VPNs encrypt your internet traffic and hide your real IP address.',
  },
  {
    id: 7,
    question: 'What is social engineering?',
    options: [
      'Building social networks',
      'Manipulating people to reveal information',
      'Creating social media accounts',
      'Network engineering',
    ],
    correct: 1,
    explanation: 'Social engineering exploits human psychology to gain unauthorized access.',
  },
  {
    id: 8,
    question: 'Which is a sign of a potential phishing email?',
    options: [
      'Company logo',
      'Urgent action required',
      'Professional signature',
      'Clear subject line',
    ],
    correct: 1,
    explanation: 'Urgency is often used in phishing emails to pressure victims into making mistakes.',
  },
  {
    id: 9,
    question: 'What is malware?',
    options: [
      'Hardware problem',
      'Network issue',
      'Malicious software',
      'Email service',
    ],
    correct: 2,
    explanation: 'Malware is software designed to damage or gain unauthorized access to systems.',
  },
  {
    id: 10,
    question: 'What should you do if you suspect a security breach?',
    options: [
      'Ignore it',
      'Post about it on social media',
      'Report it immediately',
      'Wait and see',
    ],
    correct: 2,
    explanation: 'Immediate reporting helps minimize damage and prevent further breaches.',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answerIndex) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const getRiskLevel = (score) => {
    if (score >= 8) return { level: 'Low', color: '#4CAF50' };
    if (score >= 5) return { level: 'Medium', color: '#ff9800' };
    return { level: 'High', color: '#f44336' };
  };

  if (showResult) {
    const risk = getRiskLevel(score);
    return (
      <section id="quiz-results" className="section">
        <div className="quiz-result card fade-in">
          <FaShieldAlt className="result-icon" />
          <h3>Quiz Complete!</h3>
          <p className="score">Your Score: {score}/{questions.length}</p>
          <div className="risk-level" style={{ color: risk.color }}>
            Risk Level: {risk.level}
          </div>
          <p className="advice">
            {risk.level === 'Low' 
              ? 'Great job! You have a strong understanding of cybersecurity.'
              : risk.level === 'Medium'
              ? 'Good effort! Consider reviewing some cybersecurity basics.'
              : 'You should focus on learning more about cybersecurity practices.'}
          </p>
        </div>

        <style jsx="true">{`
          .quiz-result {
            text-align: center;
            padding: 2rem;
            max-width: 600px;
            margin: 0 auto 2rem;
          }

          .result-icon {
            font-size: 4rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
          }

          .score {
            font-size: 1.5rem;
            margin: 1rem 0;
          }

          .risk-level {
            font-size: 2rem;
            font-weight: bold;
            margin: 1rem 0;
          }

          .advice {
            opacity: 0.9;
            margin-bottom: 2rem;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section id="quiz" className="section">
      <h2>Cybersecurity Quiz</h2>
      <div className="quiz-container card">
        <div className="question-number">
          Question {currentQuestion + 1}/{questions.length}
        </div>
        <h3 className="question">{questions[currentQuestion].question}</h3>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option ${
                answered
                  ? index === questions[currentQuestion].correct
                    ? 'correct'
                    : index === selectedAnswer
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              onClick={() => handleAnswer(index)}
              disabled={answered}
            >
              {option}
              {answered && index === questions[currentQuestion].correct && (
                <FaCheck className="icon correct-icon" />
              )}
              {answered && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                <FaTimes className="icon incorrect-icon" />
              )}
            </button>
          ))}
        </div>
        {answered && (
          <div className="explanation fade-in">
            <p>{questions[currentQuestion].explanation}</p>
            <button className="button" onClick={nextQuestion}>
              {currentQuestion === questions.length - 1 ? 'Show Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
      <style jsx="true">{`
        .quiz-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .question-number {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .question {
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }

        .options {
          display: grid;
          gap: 1rem;
        }

        .option {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--primary-color);
          color: var(--text-color);
          padding: 1rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .option:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
        }

        .option.correct {
          background: rgba(76, 175, 80, 0.2);
          border-color: #4CAF50;
        }

        .option.incorrect {
          background: rgba(244, 67, 54, 0.2);
          border-color: #f44336;
        }

        .icon {
          font-size: 1.2rem;
        }

        .correct-icon {
          color: #4CAF50;
        }

        .incorrect-icon {
          color: #f44336;
        }

        .explanation {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .explanation p {
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }
      `}</style>
    </section>
  );
};

export default Quiz; 