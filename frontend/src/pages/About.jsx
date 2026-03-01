import { Code2, Server, Database, Wrench, Briefcase, Award } from "lucide-react";
import {
  SiDotnet,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

export default function About() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={22} />,
      skills: [
        { name: "React.js", icon: <SiReact size={20} /> },
        { name: "JavaScript", icon: <SiJavascript size={20} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server size={22} />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={20} /> },
        { name: "Express.js", icon: <SiExpress size={20} /> },
        { name: "RESTful APIs", icon: <Server size={20} /> },
        { name: "VB.NET", icon: <SiDotnet size={20} /> },
      ],
    },
    {
      title: "Database",
      icon: <Database size={22} />,
      skills: [
        { name: "MS SQL Server", icon: <Database size={20} /> },
        { name: "SQL Query Development", icon: <Database size={20} /> },
        { name: "Query Optimization", icon: <Database size={20} /> },
      ],
    },
    {
      title: "Tools & Automation",
      icon: <Wrench size={22} />,
      skills: [
        { name: "QR Code Integration", icon: <Code2 size={20} /> },
        { name: "Excel Report Automation", icon: <Code2 size={20} /> },
        { name: "VBA & MS Access", icon: <Code2 size={20} /> },
      ],
    },
  ];

  const experiences = [
    {
      role: "System Developer",
      company: "Nippon Micrometal Corporation Philippines",
      duration: "Jun 2025 – Present",
      highlights: [
        "Designed and maintained enterprise applications using VB.NET and MS SQL Server.",
        "Built RESTful APIs with Node.js and Express.js for system integrations.",
        "Developed QR-based inventory system reducing manual encoding errors.",
        "Automated Excel reports to streamline business processes.",
        "Optimized SQL queries improving system performance and responsiveness.",
      ],
    },
    {
      role: "System Intern",
      company: "Nippon Micrometal Corporation Philippines",
      duration: "Mar 2025 – Jun 2025",
      highlights: [
        "Assisted in developing and maintaining internal applications.",
        "Performed SQL query optimization and database updates.",
        "Supported macro-based file and system enhancements.",
      ],
    },
    {
      role: "IT Developer Intern",
      company: "Creotec Philippines Inc.",
      duration: "Feb 2021 – Mar 2021",
      highlights: [
        "Developed calculator and scanner mobile application using MIT App Inventor.",
        "Collaborated with IT team on automation initiatives.",
      ],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* About Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="max-w-3xl mx-auto leading-relaxed text-gray-200 dark:text-gray-400">
            I'm a Full-Stack Software Developer specializing in building secure
            and scalable enterprise applications using VB.NET, MS SQL Server,
            React.js, Node.js, and Express.js.
            <br /><br />
            I design and implement RESTful APIs, enhance database performance
            through advanced SQL optimization, and develop automation solutions
            that streamline business operations.
          </p>
        </div>

        {/* Civil Service */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6 text-indigo-300">
            <Award size={22} />
            <h3 className="text-2xl font-semibold text-white">
              Civil Service Eligibility
            </h3>
          </div>

          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl text-gray-200">
            <p>
              <span className="font-semibold text-white">
                Honor Graduate Eligibility (HGE)
              </span>{" "}
              – Civil Service Commission
            </p>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 text-indigo-300">
            <Briefcase size={22} />
            <h3 className="text-3xl font-semibold text-white">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl"
              >
                <h4 className="text-xl font-semibold text-white">
                  {exp.role}
                </h4>
                <p className="text-indigo-300 text-sm mb-4">
                  {exp.company} | {exp.duration}
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-16 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6 text-indigo-300">
                  {category.icon}
                  <h4 className="text-xl font-semibold text-white">
                    {category.title}
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:scale-105 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      <div className="text-indigo-300">{skill.icon}</div>
                      <span className="text-sm font-medium text-gray-100 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}