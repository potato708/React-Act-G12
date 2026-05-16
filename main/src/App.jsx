import React, { useState } from "react";
import Activity1 from "./pages/Activity1";
import Activity2 from "./pages/Activity2";
import Activity3 from "./pages/Activity3";
import Activity4 from "./pages/Activity4";

function App() {
  const [page, setPage] = useState("home");
  const [isNightMode, setIsNightMode] = useState(false);

  const teamMembers = [
    {
      name: "Jun Mark M. Cabulong",
      role: "The Architect",
      characterCode: (
        <div className="chibi-avatar avatar-blue">
          <div className="head"><div className="eyes"></div></div>
          <div className="laptop-icon">💻</div>
        </div>
      ),
      borderColor: "#7dd3fc",
      badgeBg: "#e0f2fe",
      badgeText: "#0369a1",
      desc: "Crafting logic, crushing bugs, and turning abstract ideas into beautiful, seamless realities."
    },
    {
      name: "Kate S. Comonical",
      role: "The Visualizer",
      characterCode: (
        <div className="chibi-avatar avatar-pink">
          <div className="head"><div className="eyes-sparkle">✨</div></div>
          <div className="wand-icon">🎨</div>
        </div>
      ),
      borderColor: "#f472b6",
      badgeBg: "#fce7f3",
      badgeText: "#be185d",
      desc: "Splashing vibrant aesthetics, designing fluid animations, and keeping everything cute and neat."
    },
    {
      name: "Joemarie Valentino",
      role: "The Optimizer",
      characterCode: (
        <div className="chibi-avatar avatar-purple">
          <div className="head"><div className="eyes"></div></div>
          <div className="rocket-mini">🚀</div>
        </div>
      ),
      borderColor: "#c084fc",
      badgeBg: "#f3e8ff",
      badgeText: "#6b21a8",
      desc: "Connecting pieces together, optimizing performance, and bringing maximum energy to the crew."
    }
  ];

  const activities = [
    { id: 1, bubble: "🏠", title: "Activity 1: Team Intro", desc: "Our original classic landing page introduction for the Group 12 crew.", fromColor: "#ff9aa2" },
    { id: 2, bubble: "⚓", title: "Activity 2: Hooks & Logic", desc: "Diving deep into state management, conditional triggers, and interactive reactivity.", fromColor: "#ffdac1" },
    { id: 3, bubble: "📊", title: "Activity 3: JSON Display", desc: "Parsing structured datasets into dynamic custom UI layouts seamlessly.", fromColor: "#b5ead7" },
    { id: 4, bubble: "🥷", title: "Activity 4: Naruto API", desc: "The grand finale! Fetching live shinobi data using real-world asynchronous API calls.", fromColor: "#c7ceea" }
  ];

  const renderBackButton = () => (
    <button 
      onClick={() => setPage("home")}
      style={{
        position: "fixed", top: "20px", left: "20px", zIndex: 9999,
        padding: "12px 24px", background: "#ff758f", color: "white",
        border: "3px solid #fff", borderRadius: "30px", cursor: "pointer",
        fontWeight: "bold", fontSize: "14px", fontFamily: "'Fredoka', sans-serif",
        boxShadow: "0 8px 0 #db2777, 0 15px 20px rgba(0,0,0,0.15)", transition: "transform 0.1s"
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = "translateY(4px)"}
      onMouseUp={(e) => e.currentTarget.style.transform = "translateY(0px)"}
    >
      🎒 Back to Dashboard
    </button>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&display=swap');
        
        .cute-universe {
          font-family: 'Quicksand', sans-serif;
          background: ${isNightMode 
            ? "linear-gradient(180deg, #090d16 0%, #111827 50%, #1e1b4b 100%)" 
            : "linear-gradient(180deg, #b5c6e0 0%, #ebf4f6 40%, #fbe3e6 100%)"
          };
          color: ${isNightMode ? "#f8fafc" : "#2d3748"};
          min-height: 100vh;
          padding: 3rem 2rem;
          position: relative;
          overflow-x: hidden;
          box-sizing: border-box;
          transition: background 0.6s ease, color 0.6s ease;
        }

        /* Top-Left Banner Text */
        .project-banner-text {
          position: absolute;
          top: 30px;
          left: 30px;
          font-family: 'Fredoka', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
          color: ${isNightMode ? "#cbd5e1" : "#4a5568"};
          text-shadow: ${isNightMode ? "2px 2px 0px #000" : "2px 2px 0px #fff"};
          z-index: 90;
          user-select: none;
        }

        .theme-toggle-btn {
          position: absolute;
          top: 25px;
          right: 25px;
          padding: 10px 20px;
          border: 4px solid #2d3748;
          border-radius: 20px;
          cursor: pointer;
          font-family: 'Fredoka', sans-serif;
          font-weight: bold;
          font-size: 0.9rem;
          background: ${isNightMode ? "#f59e0b" : "#4f46e5"} !important;
          color: white;
          box-shadow: 4px 4px 0px #2d3748;
          transition: all 0.2s ease;
          z-index: 100;
        }
        .theme-toggle-btn:hover { transform: translateY(-2px); }
        .theme-toggle-btn:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0px #2d3748; }

        /* Floating Astronaut */
        .astronaut-container {
          position: relative;
          width: 100px;
          height: 130px;
          margin: 0 auto 1.5rem auto;
          animation: floatAstronaut 4.5s ease-in-out infinite;
        }
        .astro-suit {
          width: 80px;
          height: 85px;
          background: #ffffff;
          border: 4px solid #334155;
          border-radius: 40px 40px 30px 30px;
          position: absolute;
          top: 10px; left: 10px;
        }
        .astro-visor {
          width: 54px;
          height: 38px;
          background: linear-gradient(135deg, #38bdf8, #0369a1);
          border: 4px solid #334155;
          border-radius: 20px;
          margin: 12px auto 0 auto;
          position: relative;
          overflow: hidden;
        }
        .astro-visor::after {
          content: ''; position: absolute; top: 4px; left: 6px; width: 15px; height: 6px; background: rgba(255,255,255,0.6); border-radius: 10px;
        }
        .astro-pack { width: 20px; height: 60px; background: #e2e8f0; border: 4px solid #334155; border-radius: 8px; position: absolute; left: -10px; top: 25px; }
        .astro-boots { position: absolute; bottom: 22px; width: 84px; left: 8px; display: flex; justify-content: space-between; }
        .boot { width: 22px; height: 16px; background: #ef4444; border: 4px solid #334155; border-radius: 8px; }

        @keyframes floatAstronaut {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }

        /* Ambient Scenery */
        .scenery-item { position: absolute; user-select: none; pointer-events: none; z-index: 1; }
        .cloud-left { top: 12%; left: 4%; font-size: 5rem; opacity: 0.4; animation: floatCloud 35s linear infinite; display: ${isNightMode ? "none" : "block"}; }
        .cloud-right { top: 28%; right: 4%; font-size: 4rem; opacity: 0.4; animation: floatCloudReverse 40s linear infinite; display: ${isNightMode ? "none" : "block"}; }
        
        @keyframes floatCloud { 0% { transform: translateX(-60px); } 100% { transform: translateX(105vw); } }
        @keyframes floatCloudReverse { 0% { transform: translateX(60px); } 100% { transform: translateX(-105vw); } }

        /* Night Mode Star Sparkles */
        .sparkle-star {
          font-size: 2.2rem;
          opacity: ${isNightMode ? "1" : "0"};
          animation: sparkleAnim 2.5s ease-in-out infinite;
          transition: opacity 0.5s ease;
        }
        @keyframes sparkleAnim {
          0%, 100% { transform: scale(0.6) rotate(0deg); opacity: 0.3; filter: drop-shadow(0 0 2px rgba(255,255,255,0)); }
          50% { transform: scale(1.3) rotate(90deg); opacity: 1; filter: drop-shadow(0 0 12px #fef08a); }
        }

        /* Cartoon Rocket Ship Styling & Animation */
        .rocket-ship {
          font-size: 3.5rem;
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }
        .rocket-1 {
          bottom: -100px;
          left: 12%;
          animation: rocketLaunchOne 14s linear infinite;
        }
        .rocket-2 {
          bottom: -100px;
          right: 15%;
          animation: rocketLaunchTwo 18s linear infinite;
          animation-delay: 4s;
        }

        @keyframes rocketLaunchOne {
          0% { transform: translateY(0) rotate(15deg) scale(0.7); bottom: -100px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-120vh) rotate(-5deg) scale(1.1); bottom: 100%; opacity: 0; }
        }
        @keyframes rocketLaunchTwo {
          0% { transform: translateY(0) rotate(-25deg) scale(0.6); bottom: -100px; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(-120vh) rotate(5deg) scale(1); bottom: 100%; opacity: 0; }
        }

        /* Chibi Characters */
        .chibi-avatar { width: 100px; height: 100px; margin: 0 auto 1rem auto; position: relative; }
        .chibi-avatar .head { width: 85px; height: 85px; border-radius: 50%; border: 4px solid #2d3748; background: #ffe3e3; margin: 0 auto; position: relative; }
        .avatar-blue .head { background: #e0f2fe; }
        .avatar-pink .head { background: #ffe4e6; }
        .avatar-purple .head { background: #f3e8ff; }
        .chibi-avatar .eyes { width: 8px; height: 12px; background: #2d3748; border-radius: 50%; position: absolute; top: 40px; left: 24px; box-shadow: 28px 0 0 #2d3748; }
        .eyes-sparkle { position: absolute; top: 32px; left: 16px; font-size: 1.2rem; display: flex; gap: 12px; color: #f59e0b; }
        .laptop-icon, .wand-icon, .rocket-mini { position: absolute; bottom: 5px; right: 0px; font-size: 1.8rem; animation: bounceTool 2s infinite; }
        @keyframes bounceTool { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

        /* Comic Structural Layouts */
        .comic-card {
          background: ${isNightMode ? "#111827" : "#ffffff"} !important; 
          border: 4px solid #2d3748; 
          border-radius: 28px; 
          padding: 2rem; 
          text-align: center;
          box-shadow: 8px 8px 0px #2d3748; 
          transition: transform 0.2s ease, background-color 0.5s ease;
        }
        .comic-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0px #2d3748;
        }

        .comic-btn {
          width: 100%; border: 3px solid #2d3748; border-radius: 16px; padding: 0.75rem; color: #2d3748;
          font-weight: bold; font-family: 'Fredoka', sans-serif; cursor: pointer; font-size: 1rem;
          box-shadow: 0 5px 0 #2d3748; transition: all 0.1s; margin-top: 1.5rem;
        }
        .comic-btn:active {
          transform: translateY(4px);
          box-shadow: 0 1px 0 #2d3748;
        }
      `}</style>

      {page === "home" && (
        <div className="cute-universe">
          {/* Top Left Title Indicator */}
          <div className="project-banner-text">
            Group-12 FINAL MCO
          </div>

          {/* Day/Night Theme Button Toggle */}
          <button className="theme-toggle-btn" onClick={() => setIsNightMode(!isNightMode)}>
            {isNightMode ? "☀️ Day Mode" : "🌙 Night Mode"}
          </button>

          {/* 🌟 HARD CONDITIONAL TOGGLE: Rockets only mount when isNightMode is True */}
          {isNightMode && (
            <>
              <div className="rocket-ship rocket-1">🚀</div>
              <div className="rocket-ship rocket-2">🚀</div>
            </>
          )}

          {/* Day Time Drifting Clouds */}
          <div className="scenery-item cloud-left">☁️</div>
          <div className="scenery-item cloud-right">☁️</div>

          {/* Twinkling Sparkle Stars */}
          <div className="scenery-item sparkle-star" style={{ top: '14%', left: '8%' }}>✨</div>
          <div className="scenery-item sparkle-star" style={{ top: '38%', right: '11%', animationDelay: '0.6s' }}>✨</div>
          <div className="scenery-item sparkle-star" style={{ bottom: '25%', left: '6%', animationDelay: '1.3s' }}>✨</div>
          <div className="scenery-item sparkle-star" style={{ bottom: '45%', right: '7%', animationDelay: '1.9s' }}>✨</div>

          {/* Space Center Header Frame */}
          <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="astronaut-container">
              <div className="astro-pack"></div>
              <div className="astro-boots"><div className="boot"></div><div className="boot"></div></div>
              <div className="astro-suit"><div className="astro-visor"></div></div>
            </div>

            <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '4rem', margin: '0 0 0.5rem 0', textShadow: isNightMode ? "4px 4px 0px #000" : "4px 4px 0px #fff" }}>
              GROUP 12
            </h1>
            <p style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.2rem', maxWidth: '480px', margin: '0 auto', color: isNightMode ? "#9ca3af" : "#4a5568" }}>
              Welcome to our animated universe! Explore our characters and projects below.
            </p>
          </header>

          {/* Team Profile Grid Container */}
          <section style={{ maxWidth: '1100px', margin: '0 auto 5rem auto' }}>
            <h2 style={{ fontFamily: "'Fredoka', sans-serif", textAlign: 'center', fontSize: '2.2rem', marginBottom: '3rem' }}>
              👾 Crew Profiles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', padding: '0 1rem' }}>
              {teamMembers.map((member, index) => (
                <div key={index} className="comic-card">
                  {member.characterCode}
                  <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.4rem', margin: '10px 0 0 0' }}>{member.name}</h3>
                  <span style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 'bold', padding: '4px 14px', borderRadius: '20px', marginTop: '6px', border: '2px solid #2d3748', backgroundColor: member.badgeBg, color: member.badgeText }}>
                    {member.role}
                  </span>
                  <p style={{ fontSize: '0.95rem', marginTop: '1.2rem', lineHeight: '1.5', color: isNightMode ? "#9ca3af" : "#4a5568" }}>{member.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Folder Assignments Collection */}
          <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Fredoka', sans-serif", textAlign: 'center', fontSize: '2.2rem', marginBottom: '3rem' }}>
              📦 Work Collection
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', padding: '0 1rem' }}>
              {activities.map((act) => (
                <div key={act.id} className="comic-card">
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '2.2rem', marginBottom: '4px' }}>{act.bubble}</div>
                    <h4 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.2rem', margin: '0', lineHeight: '1.3' }}>{act.title}</h4>
                    <p style={{ fontSize: '0.85rem', marginTop: '8px', lineHeight: '1.4', color: isNightMode ? "#9ca3af" : "#718096" }}>{act.desc}</p>
                  </div>
                  <button 
                    onClick={() => setPage("activity" + act.id)}
                    className="comic-btn"
                    style={{ backgroundColor: act.fromColor }}
                  >
                    Launch Mission 🚀
                  </button>
                </div>
              ))}
            </div>
          </section>

          <footer style={{ textAlign: 'center', marginTop: '6rem', fontFamily: "'Fredoka', sans-serif", color: '#718096', fontSize: '0.9rem' }}>
            🛸 Group 12 Mission Hub • 2026
          </footer>
        </div>
      )}

      {page === "activity1" && <>{renderBackButton()}<Activity1 /></>}
      {page === "activity2" && <>{renderBackButton()}<Activity2 /></>}
      {page === "activity3" && <>{renderBackButton()}<Activity3 /></>}
      {page === "activity4" && <>{renderBackButton()}<Activity4 /></>}
    </>
  );
}

export default App;