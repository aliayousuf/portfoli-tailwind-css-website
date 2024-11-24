
import { FaGithub, FaLinkedin, FaGoogle, FaInstagram } from 'react-icons/fa'; // FontAwesome Icons
import Image from 'next/image';
import Link from 'next/link';

export default function HOME() {
  return (
    <main>
      {/* Video Section */}
      <section className="absolute top-0 left-0 w-full h-full ">
        <video 
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          <source src="bgvideo.mp4" type="video/mp4" />
        </video>

        {/* Centered Image */}
        <Image
          src="/bglogo.png"  
          alt="Centered Image"
          width={400}
          height={400}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* "My Project" Button */}
        <div className="absolute top-[calc(50%+200px)] w-full flex justify-center">
        <button
        className="bg-[#4595eb] py-2 px-5 rounded font-extrabold text-white bg-gradient-to-l from-[#4c6ef5] to-[#9b59b6] relative hover:scale-110 ease-in-out duration-100 group"
          >
          <Link href="/project">My Project</Link>
          </button>

        </div>

        {/* Text and Button on the Left */}
          <div className="absolute left-14 lg:left-32 top-1/2 transform -translate-y-1/2 text-white space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-[#4c6ef5] to-[#9b59b6] bg-clip-text text-transparent">
            ALIA YOUSUF
           </h1>

           <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-gradient-to-l from-[#4c6ef5] to-[#9b59b6] bg-clip-text text-transparent">
            Frontend Developer
            </p>


          {/* "About Me" Button */}
          <div className="w-full flex gap-4">
          <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#4c6ef5] to-[#9b59b6] relative hover:scale-110 ease-in-out duration-100 group">
           <Link href="/about">About Me</Link>
           </button>

          </div>
        </div>

        {/* Sidebar for Icons */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
          {/* GitHub Icon */}
          <Link 
            href="https://github.com/aliayousuf/furniture-website"
            className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition-all duration-200 text-xl"
          >
            <FaGithub className="text-white" />
          </Link>

          {/* LinkedIn Icon */}
          <Link 
            href="https://www.linkedin.com/in/alia-yousuf-a484562b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition-all duration-200 text-xl"
          >
            <FaLinkedin className="text-white" />
          </Link>

          {/* Gmail Icon */}
          <Link 
            href="https://mail.google.com"
            className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition-all duration-200 text-xl"
          >
            <FaGoogle className="text-white" />
          </Link>

          {/* Instagram Icon */}
          <Link 
            href="https://www.instagram.com/alia._izzat/profilecard/?igsh=MWE5emZ3dWpsYmVkdQ=="
            className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition-all duration-200 text-xl"
          >
            <FaInstagram className="text-white" />
          </Link>
        </div>
      </section>
    </main>
  );
}
