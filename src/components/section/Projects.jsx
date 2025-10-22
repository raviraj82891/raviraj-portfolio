import { RevealOnScroll } from "../RevealOnScroll";
import image1 from "../../assets/images/image.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";

export const Projects = () => {
  const projects = [
    {
      title: "HearMeOut Ai",
      description:
        "Built an interactive chatbot using HTML, CSS, JavaScript, and APIs, hosted on Netlify. Showcased expertise in API integration and responsive design for seamless user interactions.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      url: "https://hearmeoutv2-raviraj.netlify.app/",
      image: image3,
    },
    {
      title: "Chess Engine with AI",
      description:
        "Developed a fully functional chess engine using Python and Pygame, capable of human vs AI gameplay. Integrated advanced decision-making algorithms including Minimax, Alpha-Beta Pruning, and Greedy evaluation for optimal move prediction.",
      technologies: ["Python", "Pygame"],
      url: "https://github.com/raviraj82891/chess-with-ai",
      image: image1,
    },
    {
      title: "EdLearn",
      description:
        "Developed a full-featured e-learning platform with interactive courses and real-time learning resources. Showcased expertise in web development by integrating responsive design, allowing seamless navigation and learning on multiple devices.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      url: "https://learnravi.netlify.app/",
      image: image2,
    },
    {
      title: "Sustainable Development",
      description:
        "Developed a web project showcasing sustainable solutions using HTML, CSS, and JavaScript. Focused on clean UI, accessibility, and educational impact for environmental awareness.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://aquamarine-malabi-87c9c7.netlify.app/",
      image: image4,
    },
  ];

  return (
   <section
  id="projects"
  className="min-h-screen w-full flex justify-center items-center py-20 bg-black"
>
  <RevealOnScroll>
    <div className="w-full max-w-6xl px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] p-6 rounded-2xl border border-white/10 
                       hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] 
                       transition w-full max-w-md"
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="mb-4 rounded-xl w-full h-52 object-cover"
            />
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 justify-center">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm 
                             hover:bg-blue-500/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project 👉
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </RevealOnScroll>
</section>
  );
};