export default function SecondSection() {
  return (
    <div
      id="Especialidad"
      class="pt-24 px-6 sm:px-13 max-w-screen-md mx-auto xl:max-w-screen-xl"
    >
      <div class="sm:w-120 sm:text-lg lg:text-center mx-auto mb-16 lg:mb-0">
        <h2 class="text-3xl sm:text-4xl text-gray-50 tracking-tight font-extrabold">
          ESPECIALIDAD
        </h2>

        <p class="mt-4">
          Mis especialidades son los motivos por los que mi trabajo destaca,
          como el dinamismo, los efectos envolventes y las visuales que atraen y
          mantienen al espectador.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div class="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 text-gray-300">
          <div class="flex flex-col h-full bg-gray-800 p-6 pb-9">
            <div className="flex items-center gap-1 mb-4">
              <img
                src="https://www.freeiconspng.com/uploads/youtube-logo-png-picture-13.png"
                className="w-15 h-9"
              />
              <h2 class="text-2xl font-semibold ">Videos para Youtube</h2>
            </div>

            <p className="mb-2">
              Ediciones dinámicas, transiciones suaves y efectos visuales que
              capturan la atención.
            </p>
            <p>
              Desde vlogs cinematográficos hasta contenido educativo, videos que
              atrapan y retienen a la audiencia.
            </p>
          </div>
        </div>
        <div class="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div class="flex flex-col h-full bg-gray-800 p-6 pb-9">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://images.emojiterra.com/google/android-12l/512px/1f3ae.png"
                className="w-10 h-10"
              />
              <h2 class="text-2xl font-semibold ">Gameplays</h2>
            </div>

            <p  className="mb-2 text-gray-300">
              Qué cada partida sea una experiencia inmersiva. Con cortes
              precisos, efectos envolventes y una edición que mantiene la
              emoción al máximo.
            </p>
            <p className="text-gray-300">
              Tu gameplay convertido en contenido adictivo que engancha a los
              espectadores.
            </p>
          </div>
        </div>
        <div class="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div class="flex flex-col h-full bg-gray-800 p-6 pb-9">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f4f1.png"
                className="w-10 h-10"
              />
              <h2 class="text-2xl font-semibold ">Videos Verticales</h2>
            </div>

            <p  className="mb-2 text-gray-300">
              ¡Qué cada segundo cuente! Ediciones rápidas, subtítulos llamativos
              y cortes estratégicos diseñados para la retención.
            </p>
            <p className="text-gray-300">
              Cada video como una máquina de engagement qué alcance más
              audiencia.
            </p>
          </div>
        </div>
        <div class="rounded-md bg-gradient-to-r from-teal-400 to-gray-300 p-1">
          <div class="flex flex-col h-full bg-gray-800 p-6 pb-9">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://pnghq.com/wp-content/uploads/2023/02/npc-wojak-npc-meme-png-1447.png"
                className="w-10 h-12"
              />
              <h2 class="text-2xl font-semibold ">Wojack Animations</h2>
            </div>

            <p class="text-gray-300">
              Memes animados con personalidad. Desde la sátira inteligente hasta
              el humor absurdo. Wojack animations que destacan, divierten y se
              viralizan. Dale vida a tus ideas con un estilo único y expresivo.
            </p>
          </div>
        </div>
        <div class="rounded-md bg-gradient-to-r from-teal-400 to-gray-300 p-1">
          <div class="flex flex-col h-full bg-gray-800 p-6 pb-9">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://vectorified.com/images/tools-icon-png-23.png"
                className="w-10 h-10"
              />
              <h2 class="text-2xl font-semibold ">Revisiones y Ajustes</h2>
            </div>

            <p class="text-gray-300">
              ¿Algo no cuadra en tu video? Ajustemos el color, ritmo, sonido y
              cualquier detalle necesario para que el resultado final sea
              perfecto. Trabajemos juntos hasta que estés 100% satisfecho con tu
              contenido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
