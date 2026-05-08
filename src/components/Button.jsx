"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function BookingButton() {
  const userdata = authClient.useSession();
  const User = userdata?.data?.user;
  const router = useRouter();

  const bookClick = () => {
    if (!User) {
      toast.error("Please log in first to make a booking.");
      setTimeout(() => {
        router.push("/auth/login");
      }, 1200);
      return;
    }

    router.push("/booking");
  };

  return (
    <div>
      <Button
        onClick={bookClick}
        className="bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-6 font-bold px-8 w-full rounded-lg shadow-md transition-all duration-300"
      >
        Booking
      </Button>
    </div>
  );
}

export default BookingButton;
