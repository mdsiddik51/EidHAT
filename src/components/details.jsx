import AnimalDetails from "@/app/allanimals/[animalid]/page";
import { useSession } from "@/lib/auth-client";

const Details = () => {
  const { data, ispanding } = useSession();
  const user = data?.user;

  return (
    <div>
      <AnimalDetails user={user} ispanding={ispanding} />
    </div>
  );
};

export default Details;
