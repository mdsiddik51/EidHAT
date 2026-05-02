import { Button } from "@heroui/react";

const Card = ({ animal }) => {
  return (
    <div
      key={animal.id}
      className="relative max-w-xs h-72 overflow-hidden rounded-2xl shadow-lg group bg-black/5"
    >
      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-0 w-full p-4 text-white space-y-1">
        <h2 className="text-xl font-bold tracking-wide">{animal.name}</h2>

        <div className="flex items-center justify-between text-sm text-gray-200">
          <p className="font-medium text-white">৳{animal.price}</p>
          <p>Age: {animal.age}</p>
        </div>

        <button
          className="mt-3 p-2 w-full rounded-lg border border-white/60 
                       text-white text-sm font-medium
                       hover:bg-white hover:text-black
                       transition-all duration-300"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
