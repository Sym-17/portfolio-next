import React from "react";
import EachProject from "../components/EachProject";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-32 gap-5">
      <EachProject
        title="Todo"
        description="A notepad app where an user can keep his todos and notes."
        tags={["React", "TypeScript", "Tailwind"]}
        gitLink="https://github.com/Sym-17/todo-react"
        deployLink="https://todo-react-theta-eight.vercel.app/"
        isOngit={true}
        isDeployed={true}
      />
      <EachProject
        title="Emporium"
        description="An ecommerce web application. Project building is on going."
        tags={["Next", "Express", "TypeScript", "Tailwind", "PostgreSQL"]}
        gitLink="https://github.com/Sym-17/emporium"
        deployLink="https://emporium-opal.vercel.app/"
        isOngit={true}
        isDeployed={true}
      />
      <EachProject
        title="Link Shorter"
        description="Web app to short URL. Project building is on going"
        tags={["Next", "Express", "TypeScript", "Tailwind"]}
        gitLink="https://github.com/Sym-17/link-shorter"
        deployLink=""
        isOngit={true}
        isDeployed={false}
      />
      <EachProject
        title="Admin Dashboard"
        description="A dashboard of admin panel. Project building is on going"
        tags={["Next", "TypeScript", "Tailwind"]}
        gitLink="https://github.com/Sym-17/admin-dashboard-next"
        deployLink=""
        isOngit={true}
        isDeployed={false}
      />
      <EachProject
        title="Portfolio"
        description="My portfolio"
        tags={["Next", "TypeScript", "Tailwind"]}
        gitLink="https://github.com/Sym-17/portfolio-next"
        deployLink="https://samiullah-sayem.vercel.app/"
        isOngit={true}
        isDeployed={true}
      />
      <EachProject
        title="Login Signup Page"
        description="A simple login signup page by using React state."
        tags={["React", "JavaScript"]}
        gitLink="https://github.com/Sym-17/login-signup-page"
        deployLink=""
        isOngit={true}
        isDeployed={false}
      />
    </div>
  );
};

export default Projects;