import styles from './ProjectsStyles.module.css';
import weather from "../../assets/weather.jpg";
import carcare from"../../assets/carcare.png"
import coffeeshop from "../../assets/coffeeshopimg.jpg"
import library from "../../assets/library2.jpg"
import todolist from "../../assets/todolist.png"
import ai_receipe from"../../assets/ai_receipe_maker.png"
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
          FE="https://github.com/nareshselvan6/Todolist"
          BE="https://github.com/nareshselvan6/TodoBackend"
        />
<ProjectCard
  src={library}
  link="https://librarymanagement-rct.netlify.app/"
  h3="Library Management"
  p="Fullstack Intermediate Level project"
  FE="https://github.com/nareshselvan6/Library_managament_FrontEnd"
  BE="https://github.com/nareshselvan6/Library_managament_BackEnd"
/>

        
<ProjectCard
  src={coffeeshop}
  link="https://coffee-shop-frontend-vert.vercel.app/"
  h3="Coffee Shop"
  p="Fullstack Professional Level project"
  FE="https://github.com/nareshselvan6/coffee_shop_frontend"
  BE="https://github.com/nareshselvan6/coffee_shop_backend"
/>
      <ProjectCard
          src={carcare}
          link="https://frontend-capstone-vehiclecare.netlify.app/"
          h3="TS CAR_CARE"
          p="FULLSTACK Company Level PROJECT"
          FE="https://github.com/nareshselvan6/FrontEnd_CapStone_VehicleCare"
          BE="https://github.com/nareshselvan6/BackEnd_CapStone_VehicleCare"
        />
<ProjectCard
  src={ai_receipe}
  link="https://a-ireceipe-maker.vercel.app/"
  h3="AI Culinary Companion "
  p="Fullstack Professional Level project"
  FE="https://github.com/nareshselvan6/AIreceipe_maker"
  BE="https://github.com/nareshselvan6/AIreceipe_maker-Backend_gemini"
/>
    
      </div>
    </section>
  );
}

export default Projects;
