import React from "react";
import { IoBookOutline } from "react-icons/io5";

const Resume = () => {
  return (
    <>
      <article className="resume active">
        <header>
          <h2 className="h2 article-title mt20">Resume</h2>
        </header>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline color="goldenrod" />
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Bachelor of Science in Computer Science</h4>
              <span>2021 — 2026</span>
              <p className="timeline-text">
                Virtual University, Vehari campus. Currently pursuing BS Computer Science with Grade A+. Skilled in HTML, CSS, JavaScript, PHP, and WordPress alongside academic studies.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Intermediate — Computer Science (ICS)</h4>
              <span>2019 — 2021</span>
              <p className="timeline-text">
                Govt Post Graduate College Vehari. Worked on small web development projects using HTML, CSS, and WordPress. Participated in front-end design projects and explored responsive design techniques.
              </p>
            </li>
          </ol>
        </section>
        <section className="timeline">
  <div className="title-wrapper">
    <div className="icon-box">
      <IoBookOutline color="goldenrod" />
    </div>
    <h3 className="h3">Experience</h3>
  </div>
  <ol className="timeline-list">
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">Custom Website &amp; WordPress Developer</h4>
      <span>2021 — 2026</span>
      <p className="timeline-text">
        Delivered 100+ websites for clients across corporate and freelance industries. Expertise in WordPress, Elementor, WooCommerce, ACF, and theme and plugin customization. Active freelancer on Fiverr delivering web development projects to international clients, specialized in WordPress, WooCommerce, and custom website solutions.
      </p>
    </li>
  </ol>
</section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills after 2021</h3>
          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value={90}>90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">HTML &amp; CSS</h5>
                <data value={85}>85%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "85%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">JavaScript</h5>
                <data value={75}>75%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "75%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">PHP</h5>
                <data value={80}>80%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }} />
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Resume;
