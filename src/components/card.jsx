import Link from "next/link";

const Card = ({ animal }) => {
  return (
    <div
      key={animal.id}
      className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4">
          <span
            className={`rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg ${
              animal.category === "Large Animal"
                ? "bg-linear-to-r from-sky-400 to-blue-700"
                : "bg-linear-to-r from-emerald-500 to-green-600"
            }`}
          >
            {animal.icon} {animal.type}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 rounded-2xl bg-white/90 px-4 py-2 backdrop-blur-md">
          <p className="text-lg font-black text-amber-600">
            ৳{animal.price.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-2xl font-extrabold text-gray-800">
            {animal.name}
          </h2>

          <p className="mt-1 text-sm font-medium text-gray-500">
            Breed: {animal.breed}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-amber-50 p-3">
            <p className="text-xs text-gray-500">Weight</p>
            <p className="mt-1 font-bold text-gray-800">
              ⚖️ {animal.weight} kg
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-3">
            <p className="text-xs text-gray-500">Age</p>
            <p className="mt-1 font-bold text-gray-800">
              🎂 {animal.age} Years
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 p-3">
            <p className="text-xs text-gray-500">Location</p>
            <p className="mt-1 font-bold text-gray-800">📍 {animal.location}</p>
          </div>

          <div className="rounded-2xl bg-purple-50 p-3">
            <p className="text-xs text-gray-500">Category</p>
            <p className="mt-1 font-bold text-gray-800">
              {animal.icon} {animal.category}
            </p>
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
          {animal.description}
        </p>

        <Link href={`/allanimals/${animal.id}`}>
          <button className=" w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
