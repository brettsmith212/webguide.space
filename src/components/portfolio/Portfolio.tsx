import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../auth-context";

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<any[]>();
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const proj = ctx.portfolioTable.map((project) => {
      return (
        <div
          className="flex flex-col items-center w-96 p-8 gap-8 shadow-xl rounded-md"
          key={project.id}
        >
          <h2 className="text-center text-2xl">{project.title}</h2>
          <a href={project.project_link} target="_blank">
            <img
              className="w-auto h-auto rounded-md hover:scale-105"
              src={project.image}
              alt={project.title}
            />
          </a>
          <p className="text-sm">{project.description}</p>
          <a
            href={project.github_link}
            target="_blank"
            className="text-violet-700 hover:text-violet-500"
          >
            Github Repo
          </a>
        </div>
      );
    });

    setProjects(proj);
  }, [ctx.portfolioTable]);

  return (
    <section className="my-16">
      <div className="flex justify-center items-center my-4">
        <h1 className="text-4xl">My Porfolio</h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center my-4">
        <div className="md:w-1/2 flex justify-center p-8">
          <img
            className="rounded-md"
            src="src/assets/portfolio/profilepic.jpeg"
            alt="Brett Smith"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col gap-4">
          <h2 className="text-3xl md:text-2xl lg:text-3xl">Hi, I'm Brett!</h2>
          <p className="text-xl md:text-base lg:text-xl">
            A little about me… I am a web developer skilled in HTML, CSS,
            JavaScript, TypeScript, React, Redux, Node, Express, Supabase and Firebase.
            I have built some cool stuff, so check out my projects! If you want
            to see more be sure to checkout my{" "}
            <a
              className="text-violet-700"
              target="_blank"
              href="https://www.github.com/brettsmith212"
            >
              github
            </a>{" "}
            as well.
          </p>
          <p className="text-xl md:text-base lg:text-xl">
            I'm currently open to work as a front end or full stack software
            engineer.
          </p>
          <p className="text-xl md:text-base lg:text-xl">
            The best place to reach me is Twitter{" "}
            <a
              href="https://twitter.com/brettsmth"
              className="text-violet-700"
              target="_blank"
            >
              @brettsmth
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/brettsmith212/"
              className="text-violet-700"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            or email brettsmith212@gmail.com.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-8">
        {projects ? projects : <p>Loading Projects</p>}
      </div>
    </section>
  );
};

export default Portfolio;
