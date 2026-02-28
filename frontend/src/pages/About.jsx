import { Code2, Server } from "lucide-react";
import { SiDotnet } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <Code2 size={20} /> },
    { name: "JavaScript", icon: <Code2 size={20} /> },
    { name: "Node.js", icon: <Server size={20} /> },
    { name: "VB.NET", icon: <SiDotnet size={20} /> },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="max-w-2xl mx-auto leading-relaxed text-gray-200 dark:text-gray-400">
            I design and build scalable web applications and secure IT systems.
            Passionate about modern technologies and solving complex problems
            with clean, efficient solutions.
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-12 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                  backdrop-blur-lg
                  bg-white/10 dark:bg-white/5
                  border border-white/20
                  p-6 rounded-2xl
                  flex flex-col items-center justify-center gap-3
                  hover:scale-105
                  hover:border-indigo-400/50
                  hover:shadow-xl hover:shadow-purple-500/20
                  transition-all duration-300
                "
              >
                <div className="text-indigo-300">{skill.icon}</div>
                <span className="font-medium text-gray-100 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
