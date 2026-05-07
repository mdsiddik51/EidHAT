"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Link } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message || "Something went wrong");
      router.push("/auth/signup");
      return;
    }
    toast.success("Welcome to EIDHAT 🎉");
  };

  // gogle auth

  const handelgoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-5 sm:p-7">
        <div className="text-center mb-6 flex gap-4 flex-col">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            EIDHAT
          </span>
          <span className="text-2xl text-whit/30">Login to your account</span>
        </div>

        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type={isVisible ? "text" : "password"}
            className="w-full"
            validate={(value) => {
              if (!value || value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>

            <div className="relative w-full">
              <Input
                className="w-full pr-10"
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </button>
            </div>

            <FieldError />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
          </TextField>

          <div className=" w-full pt-4">
            <Button type="submit" className="w-full ">
              <Check />
              Login
            </Button>
          </div>
          <div className=" relative">
            <hr className="w-full pt-4" />
            <span className=" absolute -top-3 left-50 bg-white">or</span>
          </div>
          <button onClick={handelgoogle}>
            <div className="flex gap-2 border transition-all duration-500 hover:border-black justify-center rounded-md shadow-md bg-white items-center p-3">
              <FcGoogle size={30} />
              <h1> Login with Google</h1>
            </div>
          </button>
          <div className="text-center pt-2">
            <span>
              New here?
              <Link href="/auth/signup">Create an account</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
