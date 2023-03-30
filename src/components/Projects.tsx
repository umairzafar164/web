import React from "react";
import Marquee from "react-fast-marquee";

import shezonga from "../assets/projects/shezonga.png";
import stela from "../assets/projects/stela.png";
import tanoor from "../assets/projects/tanoor.png";
import woodwerx from "../assets/projects/woodwerx.png";
import cloae from "../assets/projects/cloae.png";
import { TrailWrapper } from "./react-sprint-wrappers/Trail";

function Projects() {
  const projects = [
    {
      name: "shezonga",
      thumb: shezonga,
      description:
        "A website for a company with an entrepreneurial mindset, building businesses that redefine industries",
    },
    {
      name: "stela",
      thumb: stela,
      description: "Stela Concept - UI Components",
    },
    {
      name: "tanoor",
      thumb: tanoor,
      description:
        "Client Description: A traditional mud oven bakery (tandoor) with a prime focus on hygiene, health, and freshness",
    },
    {
      name: "woodwerx",
      thumb: woodwerx,
      description:
        "Wookwerx is a furniture store design concept that specializes in wood furniture",
    },
    {
      name: "Cloae",
      thumb: cloae,
      description: "Cloae is a design agency website concept",
    },
  ];

  return (
    <section
      id="projects-section"
      className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"
    >
      <div className="max-w-screen-xl px-4 py-20 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <TrailWrapper height={50} open={true}>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Our Work
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Here are a few examples of products we have developed.
            </p>
          </TrailWrapper>
        </div>
      </div>
      <div>
        <Marquee direction="left" gradient={false}>
          {projects.map((project) => (
            <div
              key={project.name}
              className="w-1/5 h-96 group relative cursor-pointer"
            >
              <div
                className="absolute
                opacity-0
                group-hover:opacity-100
                h-full
                w-full
                bg-gradient-to-t
                from-green-500
                to-transparent
                transition-all
                flex
                items-center
                justify-center"
              ></div>
              <div
                className="absolute
                opacity-0
                group-hover:opacity-100
                bottom-0
                left-0
                p-10
                right-0
                text-white"
              >
                <p className="text-xl font-semibold uppercase mb-2">
                  {project.name}
                </p>
                <p className="text-sm">{project.description}</p>
              </div>
              <img className="h-full" src={project.thumb} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Projects;
