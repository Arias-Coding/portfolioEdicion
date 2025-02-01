export default function SecondSection() {
  return (
    <div
      id="Especialidad"
      class="container text-lg px-6 pt-24 max-w-screen-xl mx-auto "
    >
      <h2 class="mb-4 text-5xl text-gray-50 tracking-tight font-extrabold">
        ESPECIALIDAD
      </h2>

      <p class="w-1/2 mt-4 xl:mt-6">
        Potencia tu contenido con ediciones dinámicas, efectos envolventes y una
        calidad visual que cautiva. Desde YouTube hasta TikTok, llevamos tus
        ideas al siguiente nivel
      </p>

      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div class="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 text-gray-300">
          <div class="flex flex-col h-full bg-gray-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://images.emojiterra.com/microsoft/fluent-emoji/15.1/512px/1f3ac_color.png"
                className="w-10 h-10"
              />
              <h2 class="text-2xl font-semibold ">Videos para Youtube</h2>
            </div>

            <p>
              Dale vida a tus ideas con ediciones dinámicas, transiciones suaves
              y efectos visuales que capturan la atención.{" "}
            </p>
            <p>
              Desde vlogs cinematográficos hasta contenido educativo, convierto
              tu visión en videos que atrapan y retienen a la audiencia.
            </p>
          </div>
        </div>
        <div class="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div class="flex flex-col h-full bg-gray-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://images.emojiterra.com/google/android-12l/512px/1f3ae.png"
                className="w-10 h-10"
              />
              <h2 class="text-2xl font-semibold ">
                Gameplays
              </h2>
            </div>

            <p className="text-gray-300">
              Haz que cada partida sea una experiencia inmersiva. Con cortes
              precisos, efectos envolventes y una edición que mantiene la
              emoción al máximo.
            </p>
            <p className="text-gray-300">
              Transformo tu gameplay en contenido adictivo que engancha a los
              espectadores.
            </p>
          </div>
        </div>
        <div class="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div class="flex flex-col h-full bg-gray-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f4f1.png"
                className="w-10 h-10"
              />
              <h2 class="text-2xl font-semibold ">
                Videos Verticales
              </h2>
            </div>

            <p className="text-gray-300">
              ¡Haz que cada segundo cuente! Ediciones rápidas, subtítulos
              llamativos y cortes estratégicos diseñados para TikTok, Instagram
              y Shorts.
            </p>
            <p className="text-gray-300">
              Convierte cada video en una máquina de engagement y alcanza más
              audiencia.
            </p>
          </div>
        </div>
        <div class="rounded-md bg-gradient-to-r from-teal-400 to-gray-300 p-1">
          <div class="flex flex-col h-full bg-gray-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://pnghq.com/wp-content/uploads/2023/02/npc-wojak-npc-meme-png-1447.png"
                className="w-10 h-12"
              />
              <h2 class="text-2xl font-semibold ">
                Wojack animations
              </h2>
            </div>

            <p class="text-gray-300">
              Memes animados con personalidad. Desde sátira inteligente hasta
              humor absurdo, creo Wojack animations que destacan, divierten y se
              viralizan. Dale vida a tus ideas con un estilo único y expresivo.
            </p>
          </div>
        </div>
        <div class="rounded-md bg-gradient-to-r from-teal-400 to-gray-300 p-1">
          <div class="flex flex-col h-full bg-gray-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://vectorified.com/images/tools-icon-png-23.png"
                className="w-10 h-10"
              />
              <h2 class="text-2xl font-semibold ">
                Revisiones y ajustes
              </h2>
            </div>

            <p class="text-gray-300">
              ¿Algo no cuadra en tu video? Ajustemos color, ritmo, sonido y
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
