export default function Navbar() {
  return (
    <>
      <div
        id="SobreMi"
        class="flex flex-col flex-wrap justify-center sm:items-center gap-22 pt-26 px-6 sm:px-13 max-w-screen-md mx-auto xl:max-w-screen-xl xl:flex-row"
      >
        <div class="sm:w-120 sm:text-lg">
          <h2 class="text-3xl sm:text-4xl text-gray-50 tracking-tight font-extrabold">
            SOBRE MI
          </h2>
          <div class="w- h-1 bg-gradient-to-r from-blue-500 to-teal-400 mt-2 mb-4"></div>

          <p class="mb-4">
            Soy un joven entusiasta de la creación de contenido y la edición de
            videos. En cada proyecto busco entregar la mejor calidad manteniendo
            una esencia original.
          </p>
          <p>
            Estoy en constante aprendizaje, explorando nuevas tendencias y
            herramientas para mantener mi trabajo actualizado y ofrecer lo mejor
            en cada Trabajo.
          </p>
        </div>
        <img
          class="object-cover object-center w-full h-content md:w-120 sm:h-80 rounded-lg"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DQ7CCSX88x6IvOEleynHawHaE8%26pid%3DApi&f=1&ipt=bc9ee6a34896c659dc3220a76c23c17f5481a460834ce6e8069d4e0e9032126d&ipo=images"
        />
      </div>

      <div className="mt-10 flex flex-col justify-center items-center gap-6 mx-auto max-w-screen-xl text-lg sm:text-xl sm:flex-row">
        <div className="flex justify-center items-center gap-1">
          <img
            src="https://i.pinimg.com/originals/01/5c/ae/015cae4e521337140707c25761f1f7b5.png"
            alt="Logo"
            className="w-18 h-18 object-contain"
          />
          <p>Premiere Pro</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img
            src="https://logodownload.org/wp-content/uploads/2017/04/adobe-after-effects-logo-0.png"
            alt="Logo"
            className="w-18 h-18 object-contain"
          />
          <p>After Effects</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjackbanstudio.com%2Fwp-content%2Fuploads%2F2020%2F01%2FLogo-Davinci-Resolve.png&f=1&nofb=1&ipt=5433ad49060425c113ebd9690bc1d55d30b14a3e38eb9de96a893717edf35b6f&ipo=images"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <p>Davinci Resolve</p>
        </div>
      </div>
    </>
  );
}
