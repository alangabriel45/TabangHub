import Navbar from "../navbar/page";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <div className="flex-grow bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="/images/build.png"
                  alt="Tabang Build"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="./details">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Tabang Build
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Tabang mong tanan</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="/images/help.png"
                  alt="Tabang Nurse"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Tabang Nurse
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Donate mog dugo</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="/images/healthy-cooking.png"
                  alt="Luto Humba"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Luto Humba
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Kanang lami</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="/images/images.png"
                  alt="Hatag Please"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Hatag Please
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Bisag peso lang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

