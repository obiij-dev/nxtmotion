import { opties } from '@/data/opties1';

export default function OptionsTable1() {
  return (
    <div className="flex flex-col p-6 mx-auto w-full text-center text-gray-100 bg-transparent h-full">
      <h3 className="mb-6 text-2xl font-semibold sm:block hidden text-white">
        Comfort & Gebruiksgemak
      </h3>
      {/* List */}
      <div className="flex justify-center w-full">
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left flex-grow w-full max-w-4xl"
        >
          {opties.map((optie) => (
            <li
              key={optie.functie}
              className="p-3 rounded-lg transition-all hover:bg-white/5"
            >
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-[#e76e7b] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <span className="font-medium text-white">{optie.functie}</span>
                  <p className="text-sm text-gray-400 mt-1">
                    {optie.omschrijving}
                  </p>
                  <p className="text-sm font-medium mt-1 bg-gradient-to-r from-[#e76e7b] to-[#eec0a8] text-transparent bg-clip-text">
                    {optie.prijs}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
