import Link from "next/link";


const Card = ({ animal}) => {

  
  
 
  return (
    <section
      key={animal.id }
      className="relative max-w-xs h-72 overflow-hidden rounded-3xl 
             bg-white/5  border border-white/10
             shadow-lg transition-all duration-500
             hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40"
    >
      <img
        src={animal.image}
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute bottom-0 w-full p-4 text-white space-y-2">
        <h2 className="text-xl font-extrabold tracking-wide drop-shadow-md">
          {animal.name}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-200">
          <p className="font-semibold text-white text-base">৳{animal.price}</p>
          <p className="bg-white/10 px-2 py-0.5 rounded-full text-xs backdrop-blur">
            Age: {animal.age}
          </p>
        </div>

        <Link href={`/allanimals/${animal.id}`}>
          <button
            className="mt-3 w-full py-2 rounded-xl  border
                   text-black text-sm font-semibold
                   hover:border-black  hover:text-black
                   transition-all duration-300 bg-white
                   cursor-pointer
                  "
          >
            View Details →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Card;
