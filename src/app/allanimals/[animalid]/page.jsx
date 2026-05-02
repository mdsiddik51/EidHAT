import { getData } from "@/library/data";
import { Spinner } from "@heroui/react";


const AnimalDetails = async ({ params }) => {
  const { animalid } = await params;

  const Animals = await getData();

  const data = Animals.find((data) => data.id === parseInt(animalid));
  console.log(data);

  if (!data) {
    return (
      <div className="flex items-center gap-4">
        <Spinner />
      </div>
    );
  } else {
    return (
      <section className="w-11/12 mx-auto py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative bg-linear-to-r from-green-50 to-white p-5 flex items-center justify-center">
              <div className="w-full h-90 overflow-hidden rounded-xl shadow-md relative">
                <span className="absolute top-4 left-4 z-10 bg-green-600/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full capitalize shadow-md">
                  {data.category}
                </span>

                <img
                  src={data.image}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="p-6 lg:p-8 flex flex-col justify-center space-y-5">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {data.name}
                </h1>

                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  {data.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Type:</span>{" "}
                    <span className="text-gray-900">{data.type}</span>
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Breed:</span>{" "}
                    <span className="text-gray-900">{data.breed}</span>
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Age:</span>{" "}
                    <span className="text-gray-900">{data.age} Years</span>
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Weight:</span>{" "}
                    <span className="text-gray-900">{data.weight} Kg</span>
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 col-span-2">
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Location:</span>{" "}
                    <span className="text-gray-900">{data.location}</span>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-3xl font-extrabold text-green-600">
                  ৳ {data.price.toLocaleString()}
                </p>
              </div>

              <button className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-black hover:scale-102  duration-500  text-white py-3 rounded-xl font-medium">
                Booking
              </button>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default AnimalDetails;
