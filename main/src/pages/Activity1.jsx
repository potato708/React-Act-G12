import "./Activity1.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Group 12 Landing Page</h1>
        <p>
          Welcome to our group page! We are passionate IT students who enjoy
          learning web development and building creative projects using React.
        </p>
      </header>

      <section className="members">
        <h2>Meet Our Team</h2>

        <div className="card">
          <h3>JOEMARIE G. VALENTINO</h3>
          <p>
            Joemarie is a dedicated student who enjoys exploring programming
            concepts and improving his coding skills.
          </p>
        </div>

        <div className="card">
          <h3>JUN MARK M. CABULONG</h3>
          <p>
            Jun Mark is passionate about web development and teamwork. He loves
            creating simple and functional designs.
          </p>
        </div>

        <div className="card">
          <h3>KATE S. COMONICAL</h3>
          <p>
            Kate is creative and detail-oriented, bringing ideas to life through
            design and collaboration.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Group 12 | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;