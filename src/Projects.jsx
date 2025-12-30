import {
  FaCode,
  FaShieldAlt,
  FaServer,
  FaChessQueen,
  FaChessRook,
  FaPython,
  FaLock,
  FaGithub,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Rooks and Queens",
      desc: (
        <div className="text-[18px]">
          <p>The system determines how many ways two queens and two rooks</p>
          <p>can be placed on a chess board without attacking each other.</p>
          <p> As there is only one correct answer to this question, the system relies</p>
          <p> on using recursion and backtracking to compute the number.</p>
          </div>
      ),
      icon: <FaPython className="text-4xl text-blue-300" />,
      tags: ["Python", "Recursion", "Backtracking"],
      github: "https://github.com/Ksenija88/Rooks-and-Queens-CIS-163-.git",
      img: null,
    },
    {
      title: "Security tasks with Python",
      desc: (
        <div className="text-[18px]">
          <p>Using the SHA-256 encryption standard, I developed a</p>
          <p>system that encrypts all files within a specified folder while monitoring</p>
          <p>and tracking changes to ensure file integrity. The system also includes a</p>
          <p>password-strength evaluation component.</p>
        </div>
      ),
      icon: <FaLock className="text-4xl text-blue-300" />,
      tags: ["Scripting", "Encryption", "Task Automation"],
      github: "https://github.com/Ksenija88/Security-tasks-with-Python-.git",
      img: null,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute bottom-[-40px] left-[-40px] w-64 h-64 bg-blue-500 opacity-55 rounded-full blur-3xl" />
      <div className="absolute top-[-40px] right-[-40px] w-64 h-64 bg-blue-500 opacity-55 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
            A few things I’ve built to learn cybersecurity, systems, and practical problem solving.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {p.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h2 className="text-xl font-semibold text-white">{p.title}</h2>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors text-xl"
                      aria-label="View on GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>

                  <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-slate-200 border border-white/10 bg-white/5 px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-400 text-sm">
          More projects and write-ups coming soon.
        </p>
      </div>
    </div>
  );
}

export default Projects;
