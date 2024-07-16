import styles from './ProjectsStyles.module.css';
import weather from "../../assets/weather.jpg";
import carcare from"../../assets/carcare.png"
import url from '../../assets/url.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        
      <ProjectCard
          src={carcare}
          link="https://frontend-capstone-vehiclecare.netlify.app/"
          h3="TS CAR_CARE"
          p="FULLSTACK PROJECT"
        />

        <ProjectCard
          src={weather}
          link="https://weatherapi-kappa.vercel.app/"
          h3="Weather-API"
          p="FRONTEND PROJECT_WITH_API"
        />
      
        <ProjectCard
          src={url}
          link="https://url-shortner-frontend-three-eta.vercel.app/"
          h3="URL_SHORTNER"
          p="FRONTEND_WITH_BACKEND PROJECT"
        />

      </div>
    </section>
  );
}

export default Projects;
