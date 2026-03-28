// src/pages/About.jsx
import { useEffect, useState } from "react";
import { Briefcase, Code2, Server, Database, Wrench } from "lucide-react";
import {
  SiDotnet,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { fetchBackend } from "../lib/api";

const iconMap = {
  "Programming Languages": <Code2 size={22} />,
  React: <SiReact size={20} />,
  JavaScript: <SiJavascript size={20} />,
  "Tailwind CSS": <SiTailwindcss size={20} />,
  Vite: <SiVite size={20} />,
  "Node.js": <SiNodedotjs size={20} />,
  "Express.js": <SiExpress size={20} />,
  "VB.NET": <SiDotnet size={20} />,
  "C#": <TbBrandCSharp size={20} />,
  Frontend: <Code2 size={22} />,
  Backend: <Server size={22} />,
  Database: <Database size={22} />,
  "Tools & Automation": <Wrench size={22} />,
};

const monthMap = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

const parseEndDate = (duration) => {
  if (!duration) return new Date(0);
  const parts = duration.split(" - ");
  let end = parts[1]?.trim() || parts[0].trim();
  if (end.toLowerCase() === "present") return new Date();
  const [mon, yr] = end.split(" ");
  const month = monthMap[mon] ?? 0;
  const year = parseInt(yr) || 0;
  return new Date(year, month, 1);
};

export default function About() {
  const [aboutInfo, setAboutInfo] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBackend("api/about");

        const sortedExperiences = (data.experiences || [])
          .map(exp => ({ ...exp }))
          .sort((a, b) => parseEndDate(b.duration) - parseEndDate(a.duration));

        setAboutInfo(data.about || []);
        setExperiences(sortedExperiences);

        const groupedSkills = Object.values(
          (data.skills || []).reduce((acc, skill) => {
            if (!acc[skill.category])
              acc[skill.category] = { title: skill.category, skills: [] };

            if (!acc[skill.category].skills.some(s => s.id === skill.id))
              acc[skill.category].skills.push(skill);

            return acc;
          }, {})
        );
        setSkills(groupedSkills);

      } catch (error) {
        console.error("Failed to fetch About data:", error);
      }
    };
    fetchData();
  }, []);

  const skillCategories = [
    "Programming Languages",
    "Frontend",
    "Backend",
    "Database",
    "Tools & Automation"
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About Table */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="overflow-x-auto max-w-3xl mx-auto">
            <table className="min-w-full text-gray-200 bg-white/10 border border-white/20 rounded-2xl">
              <thead>
                <tr className="bg-indigo-300/20 text-left">
                  <th className="px-6 py-3 text-white font-semibold text-center align-middle">Field</th>
                  <th className="px-6 py-3 text-white font-semibold text-center align-middle">Details</th>
                </tr>
              </thead>
              <tbody>
                {aboutInfo?.map((item, idx) => (
                  <tr key={item.id || idx} className="border-t border-white/20 hover:bg-white/5 transition">
                    <td className="px-6 py-3 text-center align-middle">{item.field ?? "-"}</td>
                    <td className="px-6 py-3 text-center align-middle">{item.details ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 text-indigo-300">
            <Briefcase size={22} />
            <h3 className="text-3xl font-semibold text-white">Professional Experience</h3>
          </div>
          <div className="space-y-10">
            {experiences?.map((exp, idx) => (
              <div key={exp.id || idx} className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl">
                <h4 className="text-xl font-semibold text-white">{exp.role ?? "-"}</h4>
                <p className="text-indigo-300 text-sm mb-4">{exp.company ?? "-"} | {exp.duration ?? "-"}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {exp.experience_highlights?.map((h, hIdx) => (
                    <li key={h.id || hIdx}>{h.text ?? "-"}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-16 text-white">My Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((cat) => {
              const category = skills.find((s) => s.title === cat);
              if (!category) return null;

              return (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-6 text-indigo-300">
                    {iconMap[cat] || <Code2 size={22} />}
                    <h4 className="text-xl font-semibold text-white">{cat}</h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {category.skills?.map((skill, idx) => (
                      <div
                        key={skill.id || idx}
                        className="backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:scale-105 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                      >
                        <div className="text-indigo-300">{iconMap[skill.name] || <Code2 size={20} />}</div>
                        <span className="text-sm text-gray-100 text-center">{skill.name ?? "-"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}