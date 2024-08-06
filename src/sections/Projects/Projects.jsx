import styles from './ProjectsStyles.module.css';
import weather from "../../assets/weather.jpg";
import carcare from"../../assets/carcare.png"
import coffeeshop from "../../assets/coffeeshopimg.jpg"
import library from "../../assets/library2.jpg"
import todolist from "../../assets/todolist.png"
import url from '../../assets/url.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

      <ProjectCard
          src={todolist}
          link="https://todolist-five-lyart.vercel.app/"
          h3="TODO LIST"
          p="Fullstack Entry Level project"
        />
<ProjectCard
  src={library}
  link="https://librarymanagement-rct.netlify.app/"
  h3="Library Management"
  p="Fullstack Intermediate Level project"
/>

        
<ProjectCard
  src={coffeeshop}
  link="https://coffee-shop-frontend-vert.vercel.app/"
  h3="Coffee Shop"
  p="Fullstack Professional Level project"
/>
      <ProjectCard
          src={carcare}
          link="https://frontend-capstone-vehiclecare.netlify.app/"
          h3="TS CAR_CARE"
          p="FULLSTACK Company Level PROJECT"
        />

    
      </div>
    </section>
  );
}

export default Projects;
