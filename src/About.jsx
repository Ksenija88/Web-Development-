import { FaBookOpen, FaPenNib, FaCoffee, FaGamepad, FaLanguage } from "react-icons/fa";
import { FaCode, FaShieldAlt } from "react-icons/fa";

function About() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute bottom-[-40px] left-[-40px] w-64 h-64 bg-blue-500 opacity-55 rounded-full blur-3xl" />
      <div className="absolute top-[-40px] right-[-40px] w-64 h-64 bg-blue-500 opacity-55 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 pt-10">
        <div className="flex flex-col items-center text-center">
          <img
            src="IMG_5131.jpg"
            alt="My picture"
            className="w-72 h-auto rounded-lg"
          />

          <h1 className="text-3xl font-bold mt-6 mb-3 text-white">
            A bit more about me...
          </h1>

          <p className="text-slate-200 max-w-2xl">
            As a cybersecurity student, I am primarily interested in building systems 
            and understanding where and why they fail. Below, I highlight the technical 
            skills I have developed through my education, along with personal interests that 
            shape how I think and work.
          </p>
        </div>

        {/* swapped sections */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Skills */}
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-[32px_1fr] gap-4 items-start">
                <FaCode className="text-4xl text-blue-300" />
                <div>
                  <div className="text-slate-100 font-medium">Programming</div>
                  <p className="mt-2 text-slate-300 text-m leading-snug">
                    Python | JavaScript | HTML | Linux
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[32px_1fr] gap-4 items-start">
                <FaShieldAlt className="text-4xl text-blue-300" />
                <div>
                  <div className="text-slate-100 font-medium">Security</div>
                  <p className="mt-2 text-slate-300 text-m leading-snug">
                    SHA-256 | Security scripting | SIEM tools | Kali Linux
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[32px_1fr] gap-4 items-start">
                <FaLanguage className="text-4xl text-blue-300" />
                <div>
                  <div className="text-slate-100 font-medium">Spoken Languages</div>
                  <p className="mt-2 text-slate-300 text-m leading-snug">
                    Serbo-Croatian | English | Turkish | Arabic
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Interests */}
          <div className="text-left lg:pl-24">
            <h2 className="text-2xl font-semibold text-white mb-5">Interests</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-[32px_1fr] gap-4 items-start">
                <FaBookOpen className="text-4xl text-blue-300" />
                <div>
                  <div className="text-slate-100 font-medium">Reading</div>
                  <div className="text-slate-300 text-m leading-snug">
                    Reading is my favorite hobby, with a particular love for classics.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[32px_1fr] gap-4 items-start">
                <FaPenNib className="text-4xl text-blue-300" />
                <div>
                  <div className="text-slate-100 font-medium">Writing</div>
                  <div className="text-slate-300 text-m leading-snug">
                    Writing helps me channel creative thinking and organize ideas.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[32px_1fr] gap-4 items-start">
                <FaGamepad className="text-4xl text-blue-300" />
                <div>
                  <div className="text-slate-100 font-medium">Gaming</div>
                  <div className="text-slate-300 text-m leading-snug">
                    Mostly RPGs, with Ghost of Yotei as a current favorite.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="h-16" />
      </div>
    </div>
  );
}

export default About;
