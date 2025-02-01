export default function Navbar() {
  return (
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-200 text-white overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://www.cined.com/content/uploads/2021/06/AdobeM1Mac_Featured-1300x750.jpg"
          alt="Background Image"
          class="object-cover object-center w-full h-full"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 class="mb-2 text-5xl text-gray-50 tracking-tight font-extrabold">
          ORLANDO ARIAS
        </h1>
        <p class="text-xl text-gray-300 mb-8">VIDEO EDITOR</p>
        {/*         <a
          href="#"
          class="bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-purple-800 text-gray py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a> */}
      </div>
    </div>
  );
}
