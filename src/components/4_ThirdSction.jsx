export default function ThirdSction() {
  return (
    <div
      id="Galeria"
      className="pt-36 px-6 sm:px-13 max-w-screen-md mx-auto xl:max-w-screen-xl"
    >
      <div class="sm:w-120 sm:text-lg mb-10">
        <h2 class="text-3xl sm:text-4xl text-gray-50 tracking-tight font-extrabold">
          GALERIA DE TRABAJOS
        </h2>

        <p className="mt-3">
          Esta es una seleccion de proyectos que demuestran mis cualidades y
          dedicación a la hora de trabajar.
        </p>
      </div>
      
      <h2 class="text-xl sm:text-4xl text-gray-50 tracking-tight font-extrabold mb-6">
          Videos
        </h2>
      <h2 class="text-xl sm:text-4xl text-gray-50 tracking-tight font-extrabold mb-6">
          Motion Grapichs
        </h2>
      <div className="grid gap-4 xl:grid-cols-2">
        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738886489/Wojak_eop90k.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />
        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797833/sky_ycvqta.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />
        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797834/Animaci%C3%B3n_Gr%C3%A1fico_1_3D_b6wg2s.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />

        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797832/Animaci%C3%B3n_Gr%C3%A1fico_1_yc69xn.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
}
