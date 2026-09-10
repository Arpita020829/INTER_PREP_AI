import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    navigate(isAuthenticated ? '/dashboard' : '/register');
  };

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Questions',
      description:
        'Get personalized interview questions tailored to your role and experience level.',
    },
    {
      icon: '🎯',
      title: 'Real-Time Feedback',
      description:
        'Receive instant, detailed feedback on your answers to improve faster.',
    },
    {
      icon: '📈',
      title: 'Track Progress',
      description:
        'Monitor your improvement over time with detailed analytics and insights.',
    },
    {
      icon: '💡',
      title: 'Expert Insights',
      description:
        'Learn from curated tips and strategies used by top interview coaches.',
    },
  ];

  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">✨ AI-Powered Interview Prep</div>
          <h1 className="hero-title">
            AI Interview Preparation
            <span className="gradient-text"> Platform</span>
          </h1>
          <p className="hero-subtitle">
            Master your interviews with our intelligent AI coach. Practice,
            improve, and land your dream job — all in one place.
          </p>
          <div className="hero-actions">
            <button
              id="btn-get-started"
              className="btn btn-primary btn-lg"
              onClick={handleGetStarted}
            >
              🚀 Get Started
            </button>
            <button
              id="btn-learn-more"
              className="btn btn-outline btn-lg"
              onClick={() =>
                document
                  .getElementById('features')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <span className="card-dot red" />
              <span className="card-dot yellow" />
              <span className="card-dot green" />
            </div>
            <div className="card-body">
              <p className="card-prompt">🤖 AI Interviewer</p>
              <p className="card-question">
                "Tell me about a challenging project you worked on and how you
                overcame obstacles..."
              </p>
              <div className="card-typing">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-header">
          <h2>Why Choose InterPrep AI?</h2>
          <p>Everything you need to ace your next interview</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to start your journey?</h2>
          <p>Join thousands of candidates who have already leveled up with InterPrep AI</p>
          <button
            id="btn-cta-start"
            className="btn btn-primary btn-lg"
            onClick={handleGetStarted}
          >
            Start Preparing Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
