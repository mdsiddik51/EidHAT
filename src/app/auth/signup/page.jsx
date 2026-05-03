"use client";
import { authClient } from "@/library/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
} from "@heroui/react";

const Signup = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
      callbackURL: "/",
    });

    if (error) {
      
      alert(`Error: ${error.message}`);
      return;
    }

   
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };
  return (
    <div className=" flex justify-center min-h-screen items-center ">
      <div className="shadow-sm p-10 flex justify-center">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
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
            <Input  placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
           
            validate={(value) => {
              if (value.length < 8) {
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
            <Input name="password"  placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Signup
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
