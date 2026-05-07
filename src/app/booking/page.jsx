"use client";
import { ArrowShapeRight } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
const Booking = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Your booking has been confirmed successfully!");
    e.target.reset();
  };
  return (
    <div className="flex justify-center py-7 md:min-h-screen items-center">
      <div className="flex items-center justify-center rounded-3xl bg-surface p-6 shadow-md">
        <Surface className="w-full">
          <Form onSubmit={onSubmit}>
            <Fieldset className="w-full">
              <div className="text-center">
                <Fieldset.Legend className="text-xl">
                  Booking Form
                </Fieldset.Legend>
                <Description>
                  Please fill in your details to complete the booking.
                </Description>
              </div>
              <Fieldset.Group>
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                    return null;
                  }}
                >
                  <Label>Name</Label>
                  <Input placeholder="Enter Your Name" variant="secondary" />
                  <FieldError />
                </TextField>
                <TextField isRequired name="email" type="email">
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" variant="secondary" />
                  <FieldError />
                </TextField>
                <TextField
                  validate={(value) => {
                    if (value.length < 11) {
                      return "Phone Number be at least 11 characters";
                    }
                    return null;
                  }}
                >
                  <Label>Phone</Label>
                  <Input
                    placeholder="Enter your phon Number"
                    variant="secondary"
                  />
                  <FieldError />
                </TextField>
                <TextField
                  isRequired
                  name="address"
                  validate={(value) => {
                    if (value.length < 10) {
                      return "Bio must be at least 10 characters";
                    }
                    return null;
                  }}
                >
                  <Label>Address</Label>
                  <TextArea
                    placeholder="Enter your address"
                    variant="secondary"
                  />
                  <FieldError />
                </TextField>
              </Fieldset.Group>
              <Fieldset.Actions>
                <Button type="submit">
                  <ArrowShapeRight />
                  Confirm Booking
                </Button>
                <Button type="reset" variant="tertiary">
                  Cancel
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </Surface>
      </div>
    </div>
  );
};

export default Booking;
