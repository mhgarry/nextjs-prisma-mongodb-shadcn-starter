"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { fetchUsers } from "@/lib/userApi";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };

    getUsers();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>List of Users</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Here are all the registered users. Click on a user&apos;s name to view
          their details.
        </CardDescription>
        <div className="grid grid-cols-2">
          <h4 className="font-bold text-xl text-primary">Name</h4>
          <h4 className="font-bold text-xl text-primary">Email</h4>
        </div>
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-2">
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ListUsers;
