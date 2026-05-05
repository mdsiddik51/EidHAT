"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
  Link,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
    });

    if (error) {
      toast.error(error.message || "Something went wrong");
      return;
    }

    toast.success("Account created successfully. 🎉");
    router.push("/auth/login");
  };
  return (
    <div className=" flex justify-center min-h-screen items-center ">
      <div className="shadow-sm p-10 flex justify-center ">
        <Form onSubmit={onSubmit} className="flex w-90 flex-col gap-4">
          <div className="text-center mb-6 flex gap-4 flex-col">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              EIDHAT
            </span>
            <span className="text-2xl text-whit/30">Create Your Account</span>
          </div>
          <TextField isRequired className="w-full " name="name" type="text">
            <Label>Name</Label>
            <Input name="name" placeholder="Enter your name" />
          </TextField>
          <TextField name="image" className="w-full" type="text">
            <Label>Image Link</Label>
            <InputGroup>
              <InputGroup.Input
                name="image"
                required
                placeholder="https://"
                className="w-full"
              />
            </InputGroup>
          </TextField>
          <TextField
            isRequired
            type="email"
            name="email"
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
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Register
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
          <hr className="w-ful py-2" />
          <div className="text-center">
            <span>
              Already have an account?
              <Link className="pl-2" href="/auth/login">
                {" "}
                Log in
              </Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
