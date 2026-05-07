"use client";
import { authClient } from "@/lib/auth-client";
import { PersonPencil } from "@gravity-ui/icons";
import {
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Avatar,
  Button,
  InputGroup,
} from "@heroui/react";
import toast from "react-hot-toast";
const Profile = () => {
  const userdata = authClient.useSession();
  const User = userdata.data?.user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const { data, error } = await authClient.updateUser({
      name,
      image,
    });
    if (error) {
      toast.error(error.message || "Something went wrong");
      return;
    }
    toast.success("Account Update successfully. 🎉");

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl text-center bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-bold tracking-wide mb-8">
          My Profile
        </h2>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-[3px] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
            <Avatar className="w-28 h-28 bg-white rounded-full">
              <Avatar.Image alt={User?.name} src={User?.image} />
              <Avatar.Fallback>{User?.name.slice(0, 2)}</Avatar.Fallback>
            </Avatar>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {" "}
              {User?.name}
            </h3>
            <p className="text-gray-500">{User?.email}</p>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Modal>
            <Button variant="secondary">
              <PersonPencil className="size-5" /> Edit Profile
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="auto">
                <Modal.Dialog className="sm:max-w-md">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                      <PersonPencil className="size-5" />
                    </Modal.Icon>
                    <Modal.Heading>Update Information</Modal.Heading>
                  </Modal.Header>
                  <Modal.Body className="p-6">
                    <Surface variant="default">
                      <form onSubmit={onSubmit} className="flex flex-col gap-4">
                        <TextField isRequired name="name" type="text">
                          <Label>Name</Label>
                          <Input name="name" placeholder="Enter your name" />
                        </TextField>
                        <TextField name="image" type="text">
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
                        <Modal.Footer>
                          <Button slot="close" variant="secondary">
                            Cancel
                          </Button>
                          <Button type="submit" slot="close">
                            Update Information
                          </Button>
                        </Modal.Footer>
                      </form>
                    </Surface>
                  </Modal.Body>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
