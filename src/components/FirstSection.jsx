export default function Navbar() {
  return (
    <>
      <div class="gap-16 items-center pt-24 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="sm:text-lg">
          <h2 class="text-5xl text-gray-50 tracking-tight font-extrabold">
            SOBRE MI
          </h2>
          <div class="w-full h-1 bg-gray-400 mt-2 mb-4"></div>

          <p class="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
          />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 mx-auto max-w-screen-xl text-xl mt-16 mb-24">
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
          <p>Davinci Resolv</p>
        </div>
      </div>
    </>
  );
}

/* 
        <p>After Effects</p>
        <p>Davinci Resolve</p>

agrega esta imagen "https://i.pinimg.com/originals/01/5c/ae/015cae4e521337140707c25761f1f7b5.png" como logo a la altura y del tamaño del texto

*/
