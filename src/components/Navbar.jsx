export default function Navbar() {
  return (
    <nav class="backdrop-blur-xl py-2.5 top-0 p-4 z-40 fixed w-full">
      <div class="py-2 flex flex-row max-w-screen-xl px-4 mx-auto">
        <span class="basis-1/3 self-center text-xl font-semibold whitespace-nowrap">
          Portfolio Web
        </span>

        <div class="basis-1/3 justify-center gap-6 w-full flex lg:w-auto lg:order-1">
          <a href="#Sobre mi" class="text-lg text-gray-300 hover:text-white">Sobre mi</a>
          <a href="#Especialidad" class="text-lg text-gray-300 hover:text-white">Especialidad</a>
          <a href="#Softwares" class="text-lg text-gray-300 hover:text-white">Softwares</a>
          <a href="#Trabajos" class="text-lg text-gray-300 hover:text-white">Servicios</a>
        </div>

        <div class="basis-1/3 text-right lg:order-2">
          <a class="font-medium rounded-xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr- p-4 bg-indigo-600 hover:bg-purple-700 focus:outline-none focus:ring-purple-800">
            Contactame
          </a>
        </div>
      </div>
    </nav>
  );
}
