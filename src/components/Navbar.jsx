export default function Navbar() {
  return (
    <nav class="backdrop-blur-md py-2.5 top-0 p-4 z-40 fixed w-full">
      <div class="py-2 flex flex-row max-w-screen-xl px-4 mx-auto">
        <span class="basis-1/3 self-center text-xl font-semibold whitespace-nowrap">
          Portfolio Web
        </span>

        <div class="basis-1/3 justify-center gap-6 w-full flex lg:w-auto lg:order-1">
          <a href="#" class="text-lg hover:text-purple-600">Item</a>
          <a href="#" class="text-lg hover:text-purple-600">Item</a>
          <a href="#" class="text-lg hover:text-purple-600">Item</a>
          <a href="#" class="text-lg hover:text-purple-600">Item</a>
        </div>

        <div class="basis-1/3 text-right lg:order-2">
          <a class="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr- p-4 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
            Contactame
          </a>
        </div>
      </div>
    </nav>
  );
}
