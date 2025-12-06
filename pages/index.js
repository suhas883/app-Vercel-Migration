import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/health');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="#">Replit to Vercel Migration</a>
        </h1>

        <p className="description">
          Successfully migrated from Replit to Vercel with Neon database integration
        </p>

        <div className="grid">
          <div className="card">
            <h2>Status &rarr;</h2>
            {loading ? (
              <p>Checking status...</p>
            ) : error ? (
              <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
              <p>Database: {data?.status || 'Connected'}</p>
            )}
          </div>

          <div className="card">
            <h2>Documentation &rarr;</h2>
            <p>Learn how this migration was accomplished</p>
          </div>

          <div className="card">
            <h2>Neon &rarr;</h2>
            <p>PostgreSQL database powered by Neon</p>
          </div>

          <div className="card">
            <h2>Vercel &rarr;</h2>
            <p>Deployed on Vercel Edge Network</p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          border-radius: 10px;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .title {
            font-size: 2rem;
          }

          .description {
            font-size: 1.25rem;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
