export default function Navbar() {
  return (
    <nav class="backdrop-blur-xl py-2.5 top-0 p-4 z-40 fixed w-full">
      <div class="py-2 flex flex-row flex-wrap justify-between max-w-screen-xl px-4 mx-auto">
        <span class="basis-1/4 self-center text-xl font-semibold whitespace-nowrap">
          Portfolio Web
        </span>

        <div class="basis-3/4 flex flex-row flex-wrap justify-end gap-6 w-full flex lg:w-auto lg:order-1">
          <a href="#Sobre mi" class="text-lg text-gray-300 hover:text-white">Sobre mi</a>
          <a href="#Especialidad" class="text-lg text-gray-300 hover:text-white">Especialidad</a>
          <a href="#Softwares" class="text-lg text-gray-300 hover:text-white">Softwares</a>
          <a href="#Trabajos" class="text-lg text-gray-300 hover:text-white">Galeria</a>
        </div>
      </div>
    </nav>
  );
}
