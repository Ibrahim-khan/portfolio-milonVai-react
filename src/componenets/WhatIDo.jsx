const WhatIDo = () => {
  return (
    <div className="text-white py-12">
      {/* What I Do Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 mb-10">
          What I Do
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center px-6">
          {/* Web Design */}
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Web Design</h2>
            <p>
              I'm a passionate web designer, weaving creativity into every
              pixel. With a keen eye for aesthetics and user-centric design, I
              transform visions into stunning websites.
            </p>
          </div>

          <div className="max-w-md border-l-2 border-gray-600 pl-4">
            <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
            <p>
              I'm a dedicated web developer, crafting digital experiences one
              line of code at a time. I turn ideas into functional,
              user-friendly websites.
            </p>
          </div>

          <div className="max-w-md border-l-2 border-gray-600 pl-4">
            <h2 className="text-2xl font-semibold mb-2">Digital Marketing</h2>
            <p>
              As a digital marketer, I boost brands and drive results. From SEO
              to social media, I navigate the digital landscape to elevate your
              online presence.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-center px-6 mt-12">
          {/* Graphics Design */}
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Graphics Design</h2>
            <p>
              I'm a versatile graphics designer, transforming ideas into visual
              masterpieces. I bring your vision to life through captivating
              designs.
            </p>
          </div>

          <div className="max-w-md border-l-2 border-gray-600 pl-4">
            <h2 className="text-2xl font-semibold mb-2">Consultancy</h2>
            <p>
              As a web consultant, I help businesses navigate the online
              landscape and make informed decisions.
            </p>
          </div>

          <div className="max-w-md border-l-2 border-gray-600 pl-4">
            <h2 className="text-2xl font-semibold mb-2">Office Networking</h2>
            <p>
              I'm skilled in office network configuration, ensuring efficient
              and secure digital workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="text-center my-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 mb-6">
          Experience
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
          <div className="max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">AR Trade International</h2>
            <h3 className="text-lg text-gray-300">Hardware Engineer</h3>
            <p className="text-gray-400">
              Shantinagar, Dhaka-1217
              <br />
              September 2017 - January 2018
            </p>
          </div>
          <div className="max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Shadhin Online Public Ltd</h2>
            <h3 className="text-lg text-gray-300">IT Support Engineer</h3>
            <p className="text-gray-400">
              Malibagh, Dhaka-1217
              <br />
              February 2018 - Present
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIDo;
