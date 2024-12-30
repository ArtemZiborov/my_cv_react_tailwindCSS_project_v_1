import React from "react";
import ProjectItem from "./ProjectItem";

import stoneImg from "../assets/images/stoneArtDesign.png";
import dataVisImg from "../assets/images/data_visualisation.png";
import three_D_Img from "../assets/images/3d_objects.png";
import musicVisImg from "../assets/images/music_visualisation.png";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="my-2 text-base font-normal text-stone-400 text-center py-8">
        Stone Art Design Website: A professional website for a custom stone
        artwork and design company. It highlights the company’s expertise in
        crafting bespoke stone pieces, including countertops and sculptures. The
        site features a gallery of completed projects, emphasising high-quality
        craftsmanship and customer satisfaction.
      </p>
      <p className="my-2 text-base font-normal text-stone-400 text-center py-8">
        Data Visualisation Dashboard: This comprehensive dashboard presents
        various data-driven visualisations, such as a COVID-19 case-fatality
        ratio heat map. It includes selectable categories like tech diversity,
        climate change, and food attitudes, offering insights through
        interactive geospatial maps.
      </p>
      <p className="my-2 text-base font-normal text-stone-400 text-center py-8">
        {" "}
        3D Objects Visualisation: A dynamic 3D visualisation showcasing multiple
        objects, such as a cylindrical shape and a globe-like structure. The
        interactive interface includes adjustable sliders for customisations,
        allowing users to manipulate object properties like rotation, scaling,
        or position.{" "}
      </p>
      <p className="my-2 text-base font-normal text-stone-400 text-center py-8">
        Music Visualiser: An engaging audio-reactive visualisation tool with
        multiple modes like spectrum, wave patterns, and needles. Each mode
        responds dynamically to sound frequencies, splitting the visualisation
        into quadrants to better represent audio elements like bass, mid-range,
        and treble.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={stoneImg}
          title="Stone Art Design website"
          link="https://mystonemaster.co.uk"
        />
        <ProjectItem
          img={dataVisImg}
          title="Data Visualisation App"
          link="https://www.doc.gold.ac.uk/~azibo001/Data-Vis-Computing-project/data-vis/index.html"
        />
        <ProjectItem
          img={three_D_Img}
          title="3D Objects Visualisation App"
          link="https://www.doc.gold.ac.uk/~azibo001/3D_Scene_Activity/index.html"
        />
        <ProjectItem
          img={musicVisImg}
          title="Music Frequency Visualisation App"
          link="https://www.doc.gold.ac.uk/~azibo001/musicVis/index.html"
        />
      </div>
    </div>
  );
}

export default Projects;
