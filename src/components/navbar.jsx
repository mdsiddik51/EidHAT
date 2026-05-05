"use client";
import { useState } from "react";
import { Button, Link, Spinner, Avatar } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data, ispanding } = useSession();

  if (ispanding) {
    return (
      <div className="flex items-center gap-4">
        <Spinner />
      </div>
    );
  }

  const user = data?.user;

  




  return (
    <div className="sticky top-4 z-40 w-11/12 mx-auto pb-6">
    
      <nav className="px-5 shadow-md  rounded-md bg-transparent border-2 backdrop-blur-md border-green-500">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div className="font-bold font-3xl">EIDHAT</div>
          </div>

          <div>
            <ul className="hidden items-center text-white gap-4 md:flex">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/allanimals">All Animals</Link>
              </li>
            </ul>
          </div>

          <div>
            {user ? (
              <div className="flex gap-4 ">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <Avatar.Image
                      alt={user.name}
                      src={user.image}
                    />
                    <Avatar.Fallback>{user.name.slice(0, 2)}</Avatar.Fallback>
                  </Avatar>
                </div>
                <div>
                  <Button onClick={() => signOut()}>SignOut</Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 ">
                <Link href="/auth/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="tertiary"
                    className="hover:text-white hover:bg-green-500 transition-all duration-300"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/auth/signup" style={{ textDecoration: "none" }}>
                  <Button
                    variant="tertiary"
                    className="hover:text-white  hover:bg-green-500 transition-all duration-300"
                  >
                    register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </header>

        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/allanimals">All Animals</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
