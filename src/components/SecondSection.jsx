function Card({ icon, title, text }) {
  return (
    <div class="p-8 space-y-3 border-4 border-blue-400 border-blue-300 rounded-xl">
      <h2 class="flex flex-row gap-2 items-center text-2xl font-semibold ">
        {/* 
        <span class="inline-block text-blue-500 text-blue-400">{icon}</span> */}
        {icon && <icon />}
        {title}
      </h2>

      <p class="">{text}</p>

      <div class="mt-2">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
  );
}

export default function SecondSection() {
  return (
    <div class="container text-lg px-6 pt-24 max-w-screen-xl mx-auto ">
      <h2 class="mb-4 text-5xl text-gray-50 tracking-tight font-extrabold">
        ESPECIALIDAD
      </h2>

      <p class="w-1/2 mt-4 xl:mt-6">
        Potencia tu contenido con ediciones dinámicas, efectos envolventes y una
        calidad visual que cautiva. Desde YouTube hasta TikTok, llevamos tus
        ideas al siguiente nivel
      </p>

      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div class="p-8 space-y-3 border-4 border-blue-400 border-blue-300 rounded-xl">
          <div className="flex items-center gap-2">
            <img src="../../plubic/clapper-board.png" className="w-10 h-10" />
            <h2 class="flex flex-row gap-2 items-center text-2xl font-semibold ">
              Videos para Youtube
            </h2>
          </div>

          <p class="">
            Dale vida a tus ideas con ediciones dinámicas, transiciones suaves y
            efectos visuales que capturan la atención. Desde vlogs
            cinematográficos hasta contenido educativo, convierto tu visión en
            videos que atrapan y retienen a la audiencia.
          </p>

          <div class="mt-2">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="p-8 space-y-3 border-4 border-blue-400 border-blue-300 rounded-xl">
          <div className="flex items-center gap-2">
            <img src="../../plubic/joystick.png" className="w-10 h-10" />
            <h2 class="flex flex-row gap-2 items-center text-2xl font-semibold ">
              Gameplays
            </h2>
          </div>

          <p class="">
            Haz que cada partida sea una experiencia inmersiva. Con cortes
            precisos, efectos envolventes y una edición que mantiene la emoción
            al máximo, transformo tu gameplay en contenido adictivo que engancha
            a los espectadores.
          </p>

          <div class="mt-2">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="p-8 space-y-3 border-4 border-blue-400 border-blue-300 rounded-xl">
          <div className="flex items-center gap-2">
            <img src="../../plubic/mobile-phone.png" className="w-10 h-10" />
            <h2 class="flex flex-row gap-2 items-center text-2xl font-semibold ">
              Videos Verticales
            </h2>
          </div>

          <p class="">
            ¡Haz que cada segundo cuente! Ediciones rápidas, subtítulos
            llamativos y cortes estratégicos diseñados para TikTok, Instagram y
            Shorts. Convierte cada video en una máquina de engagement y alcanza
            más audiencia.
          </p>

          <div class="mt-2">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="p-8 space-y-3 border-4 border-blue-400 border-blue-300 rounded-xl">
          <div className="flex items-center gap-2">
            <img src="../../plubic/wojack.png" className="w-10 h-12" />
            <h2 class="flex flex-row gap-2 items-center text-2xl font-semibold ">
              Wojack animations
            </h2>
          </div>

          <p class="">
            Memes animados con personalidad. Desde sátira inteligente hasta
            humor absurdo, creo Wojack animations que destacan, divierten y se
            viralizan. Dale vida a tus ideas con un estilo único y expresivo.
          </p>

          <div class="mt-2">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="p-8 space-y-3 border-4 border-blue-400 border-blue-300 rounded-xl">
          <div className="flex items-center gap-2">
            <img src="../../plubic/tools.png" className="w-10 h-10" />
            <h2 class="flex flex-row gap-2 items-center text-2xl font-semibold ">
              Revisiones y ajustes
            </h2>
          </div>

          <p class="">
            ¿Algo no cuadra en tu video? Ajustemos color, ritmo, sonido y
            cualquier detalle necesario para que el resultado final sea
            perfecto. Trabajemos juntos hasta que estés 100% satisfecho con tu
            contenido.
          </p>

          <div class="mt-2">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <svg
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
/> */
}
