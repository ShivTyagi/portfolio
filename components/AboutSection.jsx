import "./AboutSection.css";
import Button from "@/components/UI/Button";

export default function AboutSection() {
  return (
    <section className="about-wrapper">
      {/* Title Section */}
      <div className="about-title">
        <h1>
          ABOUT <span className="highlight">ME</span>
        </h1>
        <p className="subtitle">
          I DESIGN AND BUILD SCALABLE APPLICATIONS, AND I LOVE WHAT I DO.
        </p>
      </div>

      {/* Content Section */}
      <div className="about-content">
        
        {/* Left: Profile Image */}
        <div className="about-image-frame">
          <img src="/images/aditya-pic.png" alt="profile" className="about-img"/>
          <div className="frame-border"></div>
        </div>

        {/* Right: Details */}
        <div className="about-details">
          <div className="details-grid">

            <div className="detail-item">
              <strong>First Name:</strong> Aditya
            </div>

            <div className="detail-item">
              <strong>Freelance:</strong> Not Available
            </div>

            <div className="detail-item">
              <strong>Last Name:</strong> Tyagi
            </div>

            <div className="detail-item">
              <strong>Languages:</strong> English, Hindi
            </div>

            <div className="detail-item">
              <strong>Birthdate:</strong> 1989
            </div>

            <div className="detail-item">
              <strong>Phone:</strong> +91 9999810896
            </div>

            <div className="detail-item">
              <strong>Nationality:</strong> Indian
            </div>

            <div className="detail-item">
              <strong>Email:</strong> Sinceretyagi@email.com
            </div>

            <div className="detail-item">
              <strong>Experience:</strong> 10+ years
            </div>

            <div className="detail-item">
              <strong>Address:</strong> Delhi, India
            </div>

            <div className="detail-item">
              <strong>Role:</strong> UI architect/ Full-Stack Developer
            </div>

            <div className="detail-item">
              <strong>LinkedIn:</strong> linkedin.com/in/aditya
            </div>

          </div>

          {/* Download CV Button */}
           <Button variant="primary">⬇DOWNLOAD MY CV</Button>
        </div>

{/* EXPERIENCE SECTION */}
<div className="experience-wrapper">

  <h2 className="section-title">EXPERIENCE</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <p className="year">09/2022 - Present</p>
        <h3>TECH LEAD — <span>Hexaware Technologies</span></h3>
        <p className="desc">
          Leading a team of Angular Developers to deliver enterprise-grade Angular applications for global clients. Recently migrated a large-scale platform from AngularJS to Angular 19, boosting performance by 35% and enhancing security.
Driving UI/UX improvements that increased user engagement by 25%, while closely partnering with clients to define scope, gather requirements, and ensure alignment with business goals.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <p className="year">2014 - 2022</p>
        <h3>TECH LEAD — <span>R Systems International</span></h3>
        <p className="desc">
          Worked on multiple enterprise projects using React, Node.js, Express, and Angular, delivering scalable UI systems and high-performance frontend solutions. Contributed to building design systems, improving application performance, and ensuring clean, maintainable architecture across diverse client applications.

Collaborated with cross-functional teams to deliver reliable, user-focused software that aligned with client requirements and long-term product goals.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <p className="year">2013 - 2013</p>
        <h3>UX/UI Designer— <span>Accreative Health</span></h3>
        <p className="desc">
          DWorked in the healthcare domain as a UI/UX Designer, creating intuitive interfaces and improving user flows for clinical and operational applications. Focused on designing clean, accessible, and user-centric experiences tailored to healthcare professionals and patients.
   Collaborated with product teams to refine requirements, translate ideas into wireframes and prototypes, and support the delivery of reliable, user-friendly healthcare software.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <p className="year">2010 - 2013</p>
        <h3>UX/UI Designer— <span>Velocis Systems</span></h3>
        <p className="desc">
          Started my career as a UX/UI Designer, working across multiple domains and contributing to a variety of web and enterprise applications. Focused on creating clean user interfaces, improving user flows, and supporting the end-to-end design process—from wireframes to final UI assets.

Collaborated with developers and project teams to ensure smooth implementation and maintain consistency across different client projects.
        </p>
      </div>
    </div>

  </div>
</div>


{/* SKILLS SECTION */}
<div className="skills-wrapper">

  <h2 className="section-title">SKILLS</h2>

  <div className="skills-grid">

    <div className="skill-item">
      <div className="skill-header">
        <span>React / Next.js / Redux</span>
        <span>95%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "95%" }}></div>
      </div>
    </div>

 <div className="skill-item">
      <div className="skill-header">
        <span>Angular 18+ / NgRx </span>
        <span>95%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "90%" }}></div>
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-header">
        <span>Node.js / Express</span>
        <span>80%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "80%" }}></div>
      </div>
    </div>

 <div className="skill-item">
      <div className="skill-header">
        <span>REST APIs / Authentication (JWT)</span>
        <span>60%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "80%" }}></div>
      </div>
    </div>


    <div className="skill-item">
      <div className="skill-header">
        <span>JavaScript / TypeScript</span>
        <span>60%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "70%" }}></div>
      </div>
    </div>
    <div className="skill-item">
      <div className="skill-header">
        <span>MongoDB / SQL</span>
        <span>40%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "60%" }}></div>
      </div>
    </div>

     <div className="skill-item">
      <div className="skill-header">
        <span>CSS/ SCSS/ LESS</span>
        <span>60%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "60%" }}></div>
      </div>
    </div>

     <div className="skill-item">
      <div className="skill-header">
        <span>Webpack / Vite</span>
        <span>40%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "40%" }}></div>
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-header">
        <span>CI/CD (Git Actions/Azure DevOps)</span>
        <span>40%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "40%" }}></div>
      </div>
    </div>


    

  </div>
</div>


      </div>


      
    </section>

    
  );
}
