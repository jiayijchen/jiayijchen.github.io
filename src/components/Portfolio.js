import React from 'react';
import ProjectCard from './ProjectCard.js';

export default function Portfolio(props) {
  let projects = [...props.projectsData];
  // console.log(projects);

  return (
    <div className="landing">
      <div className="row mx-4 pt-4">
        <div className="col-sm-10 offset-sm-1 pt-2">
        <div className="h1 font2">
          <span className="font-light txt">jacob_chen</span>
          <span className="font-light fw-bold">/portfolio</span>
        </div>
          <div className="row pt-3">
            {projects.length > 0
              ? projects.map((project) => {
                return (
                  <ProjectCard key={project.id} project={project} />
                )
              })
              : console.log("Loading data...")
            }
          </div>
        </div>
      </div>
    </div>
  )
}
