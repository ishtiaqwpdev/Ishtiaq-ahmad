import React, { useState } from "react";
import { IoMdEye, IoMdClose } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { projectcategories } from "@/public/assets/Data";

const Portfolio = () => {
  const [activeCate, setActiveCate] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);

  // Function to handle category click
  const handleClick = (category) => {
    setActiveCate(category);
  };

  // Function to open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close project modal
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const handleImageLoad = (src) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  // Flatten projects based on active category
  const getFilteredProjects = () => {
    const projects = [];
    projectcategories.forEach((item) => {
      if (activeCate === "All" || item.category === activeCate) {
        if (item.projectDetail) {
          item.projectDetail.forEach((project) => {
            projects.push({ ...project, category: item.category });
          });
        }
      }
    });
    return projects;
  };

  const filteredProjects = getFilteredProjects();
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleProjects.length < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <article className="portfolio active">
        <header>
          <h2 className="h2 article-title mt20">Portfolio</h2>
        </header>

        <section className="projects">
          {/* Category Filter Buttons */}
          <ul className="filter-list">
            {projectcategories.map((item) => (
              <li className="filter-item" key={item.category}>
                <button
                  className={`${item.category === activeCate ? "active" : ""}`}
                  onClick={() => handleClick(item.category)}
                >
                  {item.category}
                </button>
              </li>
            ))}
          </ul>

          {/* Project List */}
          <ul className="project-list">
            {visibleProjects.map((project, index) => (
              <li className="project-item active" key={`${project.name}-${index}`}>
                <div className="project-content">
                  <div className="project-img">
                    <div className="project-item-icon-box">
                      <IoMdEye />
                    </div>
                    <div
                      className={`image-container ${
                        loadedImages[project.src] ? "image-loaded" : "image-loading"
                      }`}
                    >
                      <Image
                        src={project.src}
                        alt={project.name}
                        height={400}
                        width={800}
                        className={`project-image ${
                          loadedImages[project.src] ? "project-image-visible" : "project-image-hidden"
                        }`}
                        onLoadingComplete={() => handleImageLoad(project.src)}
                      />
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-category">{project.category}</p>
                    <div className="project-links">
                      <button
                        onClick={() => openProjectModal(project)}
                        className="view-details-btn"
                      >
                        View Details
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-demo-btn"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {hasMore && (
            <div className="load-more-wrapper">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </section>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeProjectModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeProjectModal}>
                <IoMdClose />
              </button>
              
              <div className="modal-content">
                <h2 className="modal-title">{selectedProject.name}</h2>
                
                <div className="modal-section">
                  <h3>Description</h3>
                  <p>{selectedProject.description || "No description available."}</p>
                </div>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="modal-section">
                    <h3>Key Features</h3>
                    <ul className="features-list">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies?.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    )) || "No technologies specified."}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Project Links</h3>
                  <div className="project-links">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-demo-btn"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                      >
                        <FaExternalLinkAlt /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .project-content {
            background: var(--eerie-black-2);
            border-radius: 16px;
            overflow: hidden;
            transition: var(--transition-1);
          }

          .project-content:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-3);
          }

          .project-info {
            padding: 1.5rem;
          }

          .image-container {
            position: relative;
            overflow: hidden;
          }

          .image-container::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 0%,
              rgba(255, 255, 255, 0.15) 50%,
              rgba(255, 255, 255, 0.05) 100%
            );
            transform: translateX(-100%);
            animation: shimmer 1.2s infinite;
            opacity: 0;
            pointer-events: none;
          }

          .image-loading::before {
            opacity: 1;
          }

          .project-image {
            width: 100%;
            height: auto;
            transition: opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease;
            display: block;
          }

          .project-image-hidden {
            opacity: 0;
            transform: scale(1.03);
            filter: blur(8px);
          }

          .project-image-visible {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .project-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }

          .view-details-btn,
          .live-demo-btn,
          .github-btn {
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: var(--fs-6);
            font-weight: var(--fw-500);
            transition: var(--transition-1);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            border: none;
          }

          .view-details-btn {
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
          }

          .live-demo-btn,
          .github-btn {
            background: var(--jet);
            color: var(--light-gray);
            text-decoration: none;
          }

          .view-details-btn:hover,
          .live-demo-btn:hover,
          .github-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
          }

          /* Modal Styles */
          .project-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            padding: 1rem;
          }

          .project-modal {
            background: var(--eerie-black-2);
            border-radius: 16px;
            width: 100%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            padding: 2rem;
          }

          .modal-close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--jet);
            border: none;
            color: var(--light-gray);
            width: 32px;
            height: 32px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition-1);
          }

          .modal-close-btn:hover {
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
          }

          .modal-content {
            color: var(--light-gray);
          }

          .modal-title {
            color: var(--white-2);
            font-size: var(--fs-2);
            font-weight: var(--fw-500);
            margin-bottom: 1.5rem;
          }

          .modal-section {
            margin-bottom: 1.5rem;
          }

          .modal-section h3 {
            color: var(--white-2);
            font-size: var(--fs-4);
            font-weight: var(--fw-500);
            margin-bottom: 0.75rem;
          }

          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .tech-tag {
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            padding: 0.25rem 0.75rem;
            border-radius: 8px;
            font-size: var(--fs-7);
            font-weight: var(--fw-500);
          }

          .features-list {
            list-style: none;
            padding: 0;
          }

          .features-list li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;
          }

          .features-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--orange-yellow-crayola);
          }

          .load-more-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
          }

          .load-more-btn {
            padding: 0.75rem 1.75rem;
            border-radius: 999px;
            border: none;
            cursor: pointer;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            font-size: var(--fs-6);
            font-weight: var(--fw-500);
            box-shadow: var(--shadow-2);
            transition: var(--transition-1);
          }

          .load-more-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-3);
          }

          @media (max-width: 640px) {
            .project-links {
              flex-direction: column;
            }

            .project-modal {
              padding: 1.5rem;
            }
          }
        `}</style>
      </article>
    </>
  );
};

export default Portfolio;
