"use client";
import { Button } from "@heroui/react";
import Link from "next/link";


export default function Home() {
  const animals = [
    {
      name: "Angus Cow",
      price: "৳180,000",
      img: "/images/angus.png",
    },
    {
      name: "Hereford Bull",
      price: "৳220,000",
      img: "/images/hereford.png",
    },
    {
      name: "Boer Goat",
      price: "৳90,000",
      img: "/images/boer-goat.png",
    },
    {
      name: "Dorper Sheep",
      price: "৳110,000",
      img: "/images/dorper-sheep.png",
    },
  ];

  const breed = [
    {
      name: "Red Chittagong",
      price: "৳80,000 - ৳180,000",
    },
    {
      name: "Pabna / Sirajganj",
      price: "৳90,000 - ৳200,000",
    },
    {
      name: "Mirkadim White",
      price: "৳100,000 - ৳220,000",
    },
    {
      name: "Brahman / Crossbreed",
      price: "৳150,000 - ৳400,000+",
    },
  ];
  return (
    <div className="w-11/12 mx-auto overflow-hidden pt-2 pb-7" >

      {/* =========bannar section ============== */}
      <section >
        <div
          className="hero h-[50vh] md:h-[60vh] lg:h-[70vh] relative  rounded-md"
          style={{
            backgroundImage:
              "url(/images/3.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >

          <div className="hero-overlay bg-black/50"></div>

          <div className="hero-content absolute inset-0 flex items-center justify-center text-center text-neutral-content px-4">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl md:text-4xl font-bold">
                Hello Welcome to EIDHAT
              </h1>

              <p className="mb-5 text-sm md:text-base">
                Buy and sell healthy Eid-ul-Adha animals online with ease. Find trusted cows, goats, sheep, and more at the best prices — only on Eidhat 🐄🐐
              </p>

              <Link href="/allanimals">
                <Button>
                  browse Animals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Feature Animals Section ============ */}
      <section className="grid justify-center">
        <div className="text-center pt-10">
          <h2 className="text-4xl ">Featured Animals </h2>
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
          {
            animals.map((animal) => (
              <div key={animal.name} className="relative max-w-xs h-64 overflow-hidden rounded-2xl shadow-lg group">

                <img
                  src={animal.img}
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-r from-black/60 to-transparent">
                  <div className="p-4 text-white">
                    <h1 className="text-2xl font-bold">{animal.name}</h1>
                    <p>{animal.price}</p>
                  </div>
                </div>

              </div>
            ))
          }
        </div>
      </section>


      {/* =========Qurbani Tips section =========== */}
      <section className=" py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Qurbani Tips</h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold">Healthy Animal</h3>
              <p className="text-sm mt-2">
                Choose active and disease-free animals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold">Proper Age</h3>
              <p className="text-sm mt-2">
                Cow (2+ years), Goat/Sheep (1+ year).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold">No Defects</h3>
              <p className="text-sm mt-2">
                Avoid animals with injuries or illness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= top 3 breed section ============ */}



      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Top Breeds</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {breed.map(
            (breed, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <h3 className="font-semibold">{breed.name}</h3>
                <h4>{breed.price}</h4>
              </div>
            ),
          )}
        </div>
      </section>


    </div >
  );
}