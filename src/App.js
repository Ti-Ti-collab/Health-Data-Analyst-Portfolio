import React from 'react';
import './index.css'; // Keep your existing CSS import

function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="nav-links">
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Titilayo Afolabi</h1>
          <div className="hero-subtitle">HEALTH DATA ANALYST</div>
          <p className="hero-text">
            Translating complex healthcare data into insights that improve patient outcomes and organizational efficiency
          </p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a health data analyst with a patient-centered perspective, inspired by my personal experience as a chronically ill individual. I am passionate about translating complex clinical and operational data to reveal insights that improve public health and help healthcare organizations run smarter, making their finances and operations healthier and even smoother.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Skilled in SQL, Python, and Power BI, I have a solid foundation in data analysis, visualization, and statistical modeling. By combining quantitative methods with genuine empathy and a deep appreciation for all aspects of healthcare, I deliver practical, data-driven solutions that benefit patients, support clinicians, and contribute to the operational success of hospitals and health systems.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <h2 id="services" className="section-title">What I Do</h2>
          <div className="service-grid">
            {/* Service cards */}
            <div className="service-card">
              <h3>Data Wrangling & Preprocessing</h3>
              <p>
                I transform raw healthcare data into clean, structured formats ready for analysis. This includes cleaning and standardizing clinical terminology, creating robust data pipelines, and ensuring data quality throughout the analytical process.
              </p>
            </div>
            <div className="service-card">
              <h3>Analyzing & Visualization</h3>
              <p>
                I turn complex health data into clear visual insights through interactive dashboards and reports. My analysis identifies population health trends, operational inefficiencies, and opportunities for clinical intervention.
              </p>
            </div>
            <div className="service-card">
              <h3>Reporting & Communication</h3>
              <p>
                I translate technical findings into actionable healthcare recommendations, create data-driven narratives for stakeholders, and develop meaningful performance metrics that drive positive change in healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {/* Project cards */}
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">ER Patient Flow Analysis</h3>
                <p className="project-desc">
                  Developed a comprehensive Power BI dashboard using DAX to analyze emergency room admission patterns, helping hospital administration identify bottlenecks, optimize staff allocation, and reduce patient wait times.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Power BI</span>
                  <span className="tech-tag">DAX</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">Healthcare Analytics</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">Lung Cancer Risk Prediction</h3>
                <p className="project-desc">
                  Built a machine learning model using Python, pandas, and scikit-learn to predict lung cancer risk based on patient data. The model assists healthcare providers in early detection and intervention planning.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">pandas</span>
                  <span className="tech-tag">scikit-learn</span>
                  <span className="tech-tag">Predictive Analytics</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">Bioinformatics Tool</h3>
                <p className="project-desc">
                  Developed a tool to identify open reading frames using sequence alignment logic. This solution supports genomic research and enables more personalized approaches to medicine and treatment planning.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Bioinformatics</span>
                  <span className="tech-tag">Sequence Analysis</span>
                  <span className="tech-tag">Genomics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <div className="contact-item">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:afolabititilayo09@gmail.com" className="contact-link">afolabititilayo09@gmail.com</a>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <a href="https://www.linkedin.com/in/-titilayo-afolabi" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <a href="https://github.com/Ti-Ti-collab" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
              </div>
            </div>
            <div className="contact-message">
              <h3>Working Together</h3>
              <p>
                I'm always interested in new healthcare data projects and collaborations. Whether you're looking to improve your organization's data strategy, optimize clinical operations, or need help turning your healthcare data into actionable insights, I'd love to hear from you.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Feel free to reach out through any of the channels listed to discuss how we can work together to improve healthcare outcomes through data-driven approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Titilayo Afolabi. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;