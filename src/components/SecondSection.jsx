function Card({ title, text }) {
  return (
    <div class="p-8 space-y-3 border-4 border-blue-400 border-blue-300 rounded-xl">
      <span class="inline-block text-blue-500 text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      </span>

      <h1 class="text-2xl font-semibold">{title}</h1>

      <p class="">{text}</p>

      <div class="mt-2">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
  );
}

export default function SecondSection() {
  return (
    <div class="container px-6 pt-24 max-w-screen-xl mx-auto ">
      <h2 class="mb-4 text-5xl text-gray-50 tracking-tight font-extrabold">
        ESPECIALIDAD
      </h2>

      <p class="mt-4 xl:mt-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
        voluptatibus
      </p>

      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <Card title={"Gameplays"} text={""} />
        <Card title={"Videos verticales"} text={""} />
        <Card title={"Wojack animations"} text={""} />
        <Card title={"Revisiones y ajustes"} text={""} />
      </div>
    </div>
  );
}
