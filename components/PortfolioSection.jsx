import "./PortfolioSection.css";

export default function PortfolioSection() {
  return (
    <section className="portfolio-wrapper">

      {/* Title */}
      <div className="portfolio-title">
        <h1>
          MY <span className="highlight">PORTFOLIO</span>
        </h1>

        <p className="subtitle-line">
          <span className="line" />
          A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.
          <span className="line" />
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">

        {/* Project 1 */}
        <div className="portfolio-item">
          <img src="/images/project-1.jpg" alt="Project" />
        </div>

        {/* Project 2 */}
        <div className="portfolio-item">
         <img src="/images/project-2.jpg" alt="Project" />
        </div>

        {/* Project 3 */}
        <div className="portfolio-item">
          <img src="/images/project-3.jpg" alt="Project" />
        </div>


      </div>

    </section>
  );
}
