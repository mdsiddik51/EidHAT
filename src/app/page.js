import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { animalData } from "@/lib/data";

const Home = async () => {
  const data = await animalData();

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="w-11/12 mx-auto pt-4 pb-10 relative">
        <section className="relative mb-16 lg:mb-24  ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <span className="text-xl sm:text-2xl">🐐</span>

                <span className="font-semibold text-xs sm:text-sm">
                  Eid-ul-Adha 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Welcome to
                <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent block">
                  EIDHAT
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
                Buy and sell healthy Eid-ul-Adha animals online with ease.
                Find trusted cows, goats, sheep, and more at the best prices —
                only on Eidhat 🐄🐐
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/allanimals">
                  <Button
                    size="lg"
                    className="bg-linear-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-white font-bold px-6 sm:px-8 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Browse Animals →
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                    500+
                  </div>

                  <div className="text-xs sm:text-sm text-gray-500">
                    Happy Customers
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                    1000+
                  </div>

                  <div className="text-xs sm:text-sm text-gray-500">
                    Animals Sold
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                    98%
                  </div>

                  <div className="text-xs sm:text-sm text-gray-500">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">

              <div>
                <img className="rounded-md" src="/images/banner.png" alt="Banner" />
              </div>

            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16" aria-label="Featured animals">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <span>🔥</span>

              <span className="font-semibold text-sm">Best Picks</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              Featured
              <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">

                Animals
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Handpicked healthy animals for your blessed Qurbani
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {data.animals.map((animal, index) => (
              <div
                key={animal.name}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg bg-linear-to-r from-blue-500 to-indigo-600">
                    {animal.tag}
                  </span>
                </div>

                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={animal.img}
                    alt={animal.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 2}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                    {animal.name}
                  </h3>

                  <p className="text-xl sm:text-2xl font-black text-indigo-600 mb-2">
                    {animal.price}
                  </p>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <span>⚖️ {animal.weight}</span>
                    <span>⭐ 4.9</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/allanimals">
              <Button
                variant="bordered"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-blue-50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                View All Animals →
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 sm:py-20 my-10 relative">
          <div className="absolute inset-0 bg-linear-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-3xl -z-10"></div>

          <div className="max-w-6xl mx-auto px-2 sm:px-6">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-lg">
                <span>💡</span>

                <span className="font-semibold text-sm">
                  Expert Advice
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
                Qurbani
                <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">

                  Tips
                </span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Essential guidelines for a blessed and rewarding Qurbani
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.tips.map((tip, index) => (
                <div
                  key={tip.title}
                  className="group relative bg-white/90 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tip.icon}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                      {tip.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {tip.description}
                    </p>

                    <div className="absolute top-0 right-0 text-5xl sm:text-6xl font-black text-gray-200 opacity-30 group-hover:opacity-40 transition-opacity">
                      #{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20" aria-label="Top breeds">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
              <span>🏆</span>

              <span className="font-semibold text-sm">
                Most Popular
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              Top
              <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">

                Breeds
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Most popular and trusted breeds in Bangladesh
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {data.breed.map((breedItem) => (
              <div
                key={breedItem.name}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>

                <div className="relative bg-white p-5 sm:p-6 rounded-2xl">
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {breedItem.icon}
                    </div>

                    <h3 className="font-black text-xl sm:text-2xl text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                      {breedItem.name}
                    </h3>

                    <p className="text-indigo-600 font-bold text-lg sm:text-xl mb-2">
                      {breedItem.price}
                    </p>

                    <p className="text-sm text-gray-500 mb-4">
                      {breedItem.description}
                    </p>

                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Popularity</span>
                        <span>{breedItem.popularity}</span>
                      </div>

                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-[90%] bg-linear-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div >
    </main >
  );
};

export default Home;