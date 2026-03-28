import { useState } from "react";
import { Mail, X } from "lucide-react";
import resumePdf from "../assets/Resume.pdf";

export default function Resume() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {/* Section Title */}
      <div className="mt-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume
          </span>
        </h2>
      </div>

      {/* Resume Card */}
      <div
        className="max-w-3xl mx-auto cursor-pointer"
        onClick={() => setResumeOpen(true)}
      >
        <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 rounded-2xl p-8 flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 rounded-full flex items-center justify-center">
            <Mail className="text-white" size={28} />
          </div>
          <h3 className="text-2xl font-semibold text-white">View My Resume</h3>
          <p className="text-gray-300 text-center max-w-lg">
            Click below to open my resume and explore my work experience, skills,
            and projects.
          </p>
          <span className="mt-3 inline-block py-3 px-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            Open Resume
          </span>
        </div>
      </div>

      {/* Resume Modal */}
      {resumeOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/70 px-4 md:pt-24">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setResumeOpen(false)}
              className="absolute top-15 right-5 z-50 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
              aria-label="Close Resume Modal"
            >
              <X size={24} />
            </button>

            {/* PDF Embed */}
            <iframe
              src={resumePdf}
              className="w-full h-full"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}