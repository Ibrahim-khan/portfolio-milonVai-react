import Image from "next/image";

const Contact = () => {
  return (
    <div className="text-white mb-20">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 mb-16">
          Contact With Me
        </h1>
        <div className="gap-8 place-items-center px-6">
          <Image
            src="/mahbubur.png"
            width={150}
            height={150}
            className="rounded-full shadow-lg mb-10"
            alt="Mahbubur Rahman"
          />
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold text-green-500">
              Md Mahbubur Rahman
            </h2>
            <p className="text-gray-300">Full Stack Developer</p>
            <p className="text-gray-400">
              I am available for freelance work. Connect with me via email or
              phone.
            </p>
            <p className="text-gray-400">
              +880 1714 256 538
              <br />
              milonmahbub2004@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
