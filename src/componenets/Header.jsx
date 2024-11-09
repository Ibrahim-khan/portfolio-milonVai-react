import Image from "next/image";

const Header = () => {
  return (
    <header className=" text-white p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          {/* Welcome Message */}
          <div className="mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Welcome to My World
            </h2>
          </div>

          {/* Title and Subtitle */}
          <div className="mb-4 md:mb-8">
            <h1 className="text-3xl md:text-5xl font-bold">
              <span className="text-indigo-400">Hi, I am</span> Mahbubur Rahman
            </h1>
            <p className="text-lg md:text-xl mt-5">
              <span className="text-indigo-400">Passionate</span> Web Developer
            </p>
          </div>

          {/* About Paragraph and Buttons */}
          <div className="max-w-xl mb-8">
            <p className="text-sm md:text-base leading-relaxed">
              My name is Md Mahbubur Rahman Milon, and I am a passionate
              front-end focused full-stack developer with 10 years of
              experience. I have a passion for creating beautiful, responsive,
              and user-friendly websites and web applications.
            </p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <button className="border border-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
                About Me
              </button>
              <button className="border border-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded">
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/mahbubur.png"
            alt="Md Mahbubur Rahman"
            className="md:w-64 mx-auto md:h-64 object-cover"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full md:flex gap-10">
        <div className="text-center mt-12">
          <h1 className="text-2xl md:text-4xl font-semibold text-green-400 mb-4">
            About Me
          </h1>
          <div className="max-w-2xl mx-auto text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Hey, I’m <span className="text-white">Mahbubur</span>
            </h2>
            <p className="mb-4">
              My name is Md Mahbubur Rahman and I’m a passionate front-end
              developer with 10 year of experience. I create beautiful,
              responsive, and user-friendly websites and web applications.
            </p>
            <p className="mb-4">
              My skills include JavaScript, TypeScript, HTML5, CSS3, Bootstrap,
              Tailwind, SASS/LESS, and frameworks such as React and Next.js. I
              am also proficient in state management technologies, including
              Redux and Redux Toolkit.
            </p>
            <p className="mb-4">
              Over the last year, I’ve worked on various websites and
              applications for clients across different industries, including
              e-commerce, healthcare, ERP, banking, education, and more. I enjoy
              contributing to open-source projects.
            </p>
            <p className="mb-4">
              I am committed to delivering high-quality projects on time and
              within budget, always eager to take on new challenges and
              opportunities to learn and grow as a developer.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center mt-12">
          <h1 className="text-2xl md:text-4xl font-semibold mb-8">Skills</h1>
          <div className="max-w-2xl mx-auto text-left">
            <ul className="list-none list-inside space-y-5">
              <li>
                <strong className="text-yellow-600">Frontend Design :</strong>{" "}
                HTML5, CSS3, Tailwind CSS, Bootstrap, SASS, Photoshop
              </li>
              <li>
                <strong className="text-yellow-600">
                  Frontend Development :
                </strong>{" "}
                JavaScript, TypeScript, React, Redux, Next.js
              </li>
              <li>
                <strong className="text-yellow-600">Backend (Basic) :</strong>{" "}
                Node.js
              </li>
              <li>
                <strong className="text-yellow-600">Database (Basic) :</strong>{" "}
                PostgreSQL, MySQL
              </li>
              <li>
                <strong className="text-yellow-600">Code Management :</strong>{" "}
                Git, GitHub
              </li>
              <li>
                <strong className="text-yellow-600">
                  Programming Language (Basic) :
                </strong>{" "}
                C, C++, Java
              </li>
              <li>
                <strong className="text-yellow-600">Deployment :</strong>{" "}
                Windows Server
              </li>
              <li>
                <strong className="text-yellow-600">
                  Tools & Technology :
                </strong>{" "}
                VS Code, Notepad++
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
