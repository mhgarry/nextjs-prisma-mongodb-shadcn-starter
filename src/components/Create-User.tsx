"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addUser } from "@/lib/userApi";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await addUser({ name, email });
      alert("User created successfully!");
    } catch (error) {
      alert("Error creating user");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a User</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription>
          Enter your name and email below to register a new user.
        </CardDescription>
        <Input
          type="name"
          placeholder="Your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </CardContent>
      <CardFooter>
        <Button variant="default" onClick={handleSubmit}>
          Create User
        </Button>
      </CardFooter>
    </Card>
  );
};

{
  /* <Card>
  <CardHeader>
    <CardTitle>Create a User</CardTitle>
  </CardHeader>
  <CardContent className="space-y-2">
    <CardDescription>
      Enter your name and email below to register a new user.
    </CardDescription>
    <Input type="name" placeholder="Your name here" />
    <Input type="email" placeholder="Your email here" />
  </CardContent>
  <CardFooter>
    <Button variant="default">Create User</Button>
  </CardFooter>
</Card>; */
}

export default CreateUser;
