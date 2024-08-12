import React from 'react';
function ProjectCard({ src, link, h3, p , FE, BE }) {
  return (
    <div data-aos="flip-up">
    <a href={link} target="_blank" >
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
    <div className='FE_BE'>
      <a href={FE} target='_blank'><button type='button' className='FE'>FrontEnd_Repo</button></a>
      <a href={BE} target='_blank'><button type='button' className='BE'>BackEnd_Repo</button></a>
      </div>
    </div>
  );
} 

export default ProjectCard;
