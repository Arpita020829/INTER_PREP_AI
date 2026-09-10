import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Sessions Completed', value: '0', icon: '📋' },
    { label: 'Questions Answered', value: '0', icon: '❓' },
    { label: 'Avg. Score', value: 'N/A', icon: '⭐' },
    { label: 'Practice Streak', value: '0 days', icon: '🔥' },
  ];

  const quickActions = [
    {
      id: 'action-mock-interview',
      icon: '🎤',
      title: 'Start Mock Interview',
      description: 'Practice with AI-generated questions',
      color: 'var(--accent-primary)',
    },
    {
      id: 'action-question-bank',
      icon: '📚',
      title: 'Question Bank',
      description: 'Browse hundreds of interview questions',
      color: 'var(--accent-secondary)',
    },
    {
      id: 'action-analytics',
      icon: '📊',
      title: 'View Analytics',
      description: 'Track your performance over time',
      color: 'var(--accent-green)',
    },
  ];

  return (
    <div className="page-dashboard">
      {/* Welcome Header */}
      <section className="dashboard-header">
        <div>
          <h1>
            Welcome to Dashboard
            {user?.name && (
              <span className="gradient-text">, {user.name}!</span>
            )}
          </h1>
          <p>Ready to ace your next interview? Let&apos;s get started.</p>
        </div>
        <button id="btn-new-session" className="btn btn-primary">
          🎤 New Practice Session
        </button>
      </section>

      {/* Stats Grid */}
      <section className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          {quickActions.map((action) => (
            <button
              key={action.id}
              id={action.id}
              className="action-card"
              style={{ '--card-accent': action.color }}
            >
              <div className="action-icon">{action.icon}</div>
              <div className="action-text">
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </div>
              <span className="action-arrow">→</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recent Activity Placeholder */}
      <section className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h3>No activity yet</h3>
          <p>Complete your first practice session to see your activity here</p>
          <button id="btn-start-first" className="btn btn-primary">
            Start Your First Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
