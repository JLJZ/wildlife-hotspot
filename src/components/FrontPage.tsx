'use client';

import { useState } from 'react';

export default function FrontPage({ onExploreMap }: { onExploreMap: () => void }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleExploreClick = () => {
    setIsScrolling(true);
    setTimeout(() => {
      onExploreMap();
    }, 500);
  };

  return (
    <div className={`front-page ${isScrolling ? 'scrolling' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-icon">🌍</div>
            <span className="logo-text">Wildlife Hotspot Viewer</span>
          </div>
          <div className="nav-actions">
            <button 
              className="explore-btn"
              onClick={handleExploreClick}
              aria-label="Explore the interactive map"
            >
              Explore Map
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Wildlife
            <br />
            Hotspot
            <br />
            Viewer
          </h1>
          <p className="hero-subtitle">
            Explore Earth's endangered and extinct species through interactive mapping
          </p>
          <button 
            className="cta-btn"
            onClick={handleExploreClick}
            aria-label="Start exploring the wildlife map"
          >
            Start Exploring
          </button>
        </div>
      </main>

      <style jsx>{`
        .front-page {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 9999;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          background: #0d1117;
        }

        .front-page.scrolling {
          transform: translateY(-100%);
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
          z-index: 1;
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 2;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 0%, rgba(88, 166, 255, 0.1), transparent 50%);
          z-index: 3;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 24px 40px;
          z-index: 10;
          backdrop-filter: blur(10px);
          background: rgba(13, 17, 23, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #58a6ff, #3fb950);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 20px rgba(88, 166, 255, 0.3);
        }

        .logo-text {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 600;
          background: linear-gradient(90deg, #f0f6fc, #58a6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-actions {
          display: flex;
          gap: 12px;
        }

        .explore-btn {
          padding: 12px 24px;
          background: linear-gradient(135deg, #58a6ff, #3fb950);
          border: none;
          border-radius: 8px;
          color: white;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(88, 166, 255, 0.4);
        }

        .explore-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(88, 166, 255, 0.6);
        }

        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          padding: 0 40px;
        }

        .hero-title {
          font-size: clamp(48px, 10vw, 96px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          background: linear-gradient(90deg, #f0f6fc, #8b949e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: clamp(16px, 2.5vw, 20px);
          color: #8b949e;
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-btn {
          padding: 16px 32px;
          background: transparent;
          border: 2px solid #58a6ff;
          color: #58a6ff;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-btn:hover {
          background: #58a6ff;
          color: white;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 16px 24px;
          }

          .nav-content {
            padding: 0 20px;
          }

          .logo-text {
            display: none;
          }

          .hero-title {
            font-size: clamp(32px, 8vw, 64px);
            letter-spacing: -1px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .cta-btn {
            padding: 14px 28px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
