import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "TailwindCSS", "JavaScript", "React"];

  const backendSkills = ["JavaScript", "Python", "MySQL"];

  const programmingLanguages = ["C", "C++", "Python", "Java"];

  const cyberSecurity = ["Linux", "Networking"];

  const gameEngines = ["Godot Engine", "GDScript", "Unity", "C#"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a dedicated student with a solid understanding of web
              technologies and programming languages like C, C++, and Java. I
              enjoy learning new tools and building projects that solve
              real-world problems. My goal is to grow as a full-stack developer
              and contribute to impactful tech solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <SkillSection title="Frontend" skills={frontendSkills} />

              {/* Backend */}
              <SkillSection title="Backend" skills={backendSkills} />

              {/* Programming Languages */}
              <SkillSection
                title="Programming Languages"
                skills={programmingLanguages}
              />

              {/* Cyber Security */}
              <SkillSection title="Cyber Security" skills={cyberSecurity} />

              {/* Game Engines */}
              <SkillSection title="Game Engines" skills={gameEngines} />
            </div>
          </div>

          {/* Education & Certification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏛 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BCA (Hons) in Cyber Security</strong> — Lovely
                  Professional University (Since Aug 2023)
                </li>
                <li>
                  <strong>Intermediate</strong> — Vig English School (Apr 2021 –
                  Mar 2023)
                </li>
                <li>
                  <strong>Matriculation</strong> — Vig English School (Apr 2020 –
                  Mar 2021)
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📜 Certifications</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Artificial Intelligence Essentials | Coursera</li>
                <li>CISCO Networking Certification | CISCO</li>
                <li>Responsive Web Design Certification | FreeCodeCamp</li>
                <li>CompTIA Security+ Certification | CompTIA</li>
                <li>Introduction to Generative AI | Google</li>
                <li>CSS (Basic) Skill Certification | HackerRank</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// ✅ Small reusable component for skill sections
const SkillSection = ({ title, skills }) => (
  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((tech, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);
