import BookingButton from "@/components/Button";
import { getData } from "@/lib/data";
import { Skeleton } from "@heroui/react";

const AnimalDetails = async ({ params }) => {
  const { animalid } = await params;
  const Animals = await getData();

  const data = Animals.find((data) => data.id === parseInt(animalid));

  if (!data) {
    return (
      <div className="flex items-center w-full min-w-screen justify-center min-h-screen px-4">
        <div className="shadow-panel rounded-lg bg-transparent p-4 h-full max-h-lg w-full max-w-lg space-y-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <Skeleton className="h-24 w-full sm:w-24 sm:h-24 rounded-lg" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-4 w-3/4 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-5/6 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <section className="w-11/12 mx-auto py-8">
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-[1fr_1.1fr] items-center">
            <div className="relative p-4 lg:p-5">
              <div className="relative h-[300px] sm:h-[380px] lg:h-[500px] overflow-hidden rounded-2xl">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4">
                  <span
                    className={`rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg ${
                      data.type === "Cow"
                        ? "bg-linear-to-r from-sky-400 to-blue-700"
                        : data.type === "Camel" ? "bg-linear-to-r from-yellow-200 via-amber-300 to-orange-400" : "bg-linear-to-r from-emerald-500 to-green-600"
                    }`}
                  >{data.type}</span>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-8 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
                  Premium Qurbani Animal
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  {data.name}
                </h1>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xl">
                  {data.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs text-gray-500 mb-1">Category</p>
                  <h3 className="font-bold text-gray-900">{data.category}</h3>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs text-gray-500 mb-1">Breed</p>
                  <h3 className="font-bold text-gray-900">{data.breed}</h3>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs text-gray-500 mb-1">Weight</p>
                  <h3 className="font-bold text-gray-900">{data.weight} Kg</h3>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <h3 className="font-bold text-gray-900">{data.location}</h3>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Price</p>

                  <h2 className="text-4xl font-black text-green-600">
                    ৳ {data.price.toLocaleString()}
                  </h2>
                </div>

                <div className="w-full sm:w-auto">
                  <BookingButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default AnimalDetails;
