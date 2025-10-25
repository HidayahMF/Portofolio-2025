import React from "react";
import "./skills.css";

const skillsRow1 = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", img: "/images/Nextjs.png" },
  { name: "Javascript", icon: "devicon-javascript-plain colored" },
  { name: "Typescript", icon: "devicon-typescript-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "React Native", icon: "devicon-react-original colored" },
  { name: "Debian", icon: "devicon-debian-plain colored" },
];

const skillsRow2 = [
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "Arduino", icon: "devicon-arduino-plain colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "Laravel", icon: "devicon-laravel-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain colored" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 bg-[#0a0f1a]"
    >
      <h2 className="text-3xl font-bold mb-10 text-green-400">
        Tech Stack & Skills
      </h2>

      {/* Baris 1 */}
      <div className="overflow-hidden w-full py-4 relative">
        <div className="scroll-row flex gap-10 sm:gap-16 items-center">
          {[...skillsRow1, ...skillsRow1].map((skill, i) => (
            <div
              key={`row1-${i}`}
              className="flex flex-col items-center justify-center w-20 sm:w-24"
            >
              {skill.img ? (
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain mb-2 hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <i
                  className={`${skill.icon} text-4xl sm:text-6xl mb-2 hover:scale-110 transition-transform duration-300`}
                ></i>
              )}
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Baris 2 */}
      <div className="overflow-hidden w-full py-4 relative">
        <div className="scroll-row-reverse flex gap-10 sm:gap-16 items-center">
          {[...skillsRow2, ...skillsRow2].map((skill, i) => (
            <div
              key={`row2-${i}`}
              className="flex flex-col items-center justify-center w-20 sm:w-24"
            >
              {skill.img ? (
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain mb-2 hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <i
                  className={`${skill.icon} text-4xl sm:text-6xl mb-2 hover:scale-110 transition-transform duration-300`}
                ></i>
              )}
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
