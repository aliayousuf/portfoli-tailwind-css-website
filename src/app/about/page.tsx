import Image from "next/image";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/aboutbg.jpg')" }}
    >
      <section className="flex flex-col lg:flex-row gap-6 items-center py-10">
        {/* Left Section: Text and List */}
        <div className="flex-1 text-center lg:text-left px-4 lg:px-10">
        {/* Heading with margin-top adjusted */}
        <h1 className="font-bold text-3xl text-purple-500 hover:text-blue-600 transition-all duration-300 ease-in-out mt-[-20px]">
        ABOUT ME
        </h1>
          <p className="text-lg text-blue mt-2">
            I believe in the power of clean code and thoughtful design, and I am always eager to learn new technologies to stay ahead in the fast-evolving world of frontend development. Below are some of the technologies and tools I use to create awesome websites:
          </p>

          <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {/* List Items */}
            <li className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 duration-300 ease-in-out">
                #HTML
              </button>
            </li>
            <li className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 duration-300 ease-in-out">
                #CSS
              </button>
            </li>
            <li className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 duration-300 ease-in-out">
                #JAVASCRIPT
              </button>
            </li>
            <li className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 duration-300 ease-in-out">
                #TYPESCRIPT
              </button>
            </li>
            <li className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 duration-300 ease-in-out">
                #NEXT.JS
              </button>
            </li>
            <li className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 duration-300 ease-in-out">
                #TAILWIND CSS
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 mt-8 lg:mt-0">
          <div className="w-full h-full  relative">
            <Image
              src="/about.png"
              alt="About Image"
              width={400}
              height={400}
              layout="responsive"
              className="object-cover w-full h-full rounded-xl shadow-2xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
