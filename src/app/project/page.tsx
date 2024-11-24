
import Image from 'next/image';

import Link from 'next/link';

export default function Project() {
  return (
    <div>
      {/* First Section with Background Image */}
      <div className="relative w-full h-auto min-h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(/projectbg.jpg)' }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-6">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-white text-lg sm:text-xl max-w-lg text-center">
            Here are some of the amazing projects I've worked on. Each one is designed with unique concepts and built to offer exceptional user experiences.
          </p>
        </div>
      </div>

      {/* Second Section with 4 Cards */}
      {/* Flexbox Layout with Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4 bg-purple-300">
  {/* Card 1 */}
  <Link href="https://tailwind-furniture-website.vercel.app/" className="bg-blue-300 mt-12 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4" target="_blank" rel="noopener noreferrer">
    <div className="bg-gray-300 w-32 h-36 rounded-md mb-4">
      <Image src="/p1.jpeg" className='ml-2 mt-2 h-32 w-28' alt="Project 1" width={105} height={84} />
    </div>
    <h2 className="text-xl font-semibold text-center">Furniture Website</h2>
  </Link>

  {/* Card 2 */}
  <Link href="https://web-development-website-bice.vercel.app/" className="bg-blue-300 mt-12 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4" target="_blank" rel="noopener noreferrer">
    <div className="bg-gray-300 w-32 h-36 rounded-md mb-4">
      <Image src="/p2.jpg" className='ml-2 mt-2 h-32 w-28' alt="Project 2" width={105} height={84} />
    </div>
    <h2 className="text-xl font-semibold text-center">Web Development Skill Website</h2>
  </Link>

  {/* Card 3 */}
  <Link href="https://milkshake-website-custom-css.vercel.app/" className="bg-blue-300 mt-12 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4" target="_blank" rel="noopener noreferrer">
    <div className="bg-gray-300 w-32 h-36 rounded-md mb-4">
      <Image src="/sm1.png" className='ml-2 mt-2 h-32 w-28' alt="quiz" width={105} height={84} />
    </div>
    <h2 className="text-xl font-semibold text-center">Milk Shake Website</h2>
  </Link>

  {/* Card 4 */}
  <Link href="https://html-burger-website1.vercel.app/" className="bg-blue-300 mt-12 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4" target="_blank" rel="noopener noreferrer">
    <div className="bg-gray-300 w-32 h-36 rounded-md mb-4">
      <Image src="/home.png" className='ml-2 mt-2 h-32 w-28' alt="Project 4" width={105} height={84} />
    </div>
    <h2 className="text-xl font-semibold text-center">Burger Website</h2>
  </Link>
</div>


    </div>
    
  );
}
