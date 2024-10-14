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
import Link from "next/link";
import { cn } from "@/lib/utils";
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
      <CardContent className="space-y-4">
        <CardDescription>
          Here are all the registered users. Click on a user&apos;s name to view
          their details.
        </CardDescription>
        <div className="grid grid-cols-2 grid-rows-1">
          <h4 className="font-bold text-xl text-primary">Name</h4>
          <h4 className="font-bold text-xl text-primary">Email</h4>
        </div>
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-2">
            <div>{user.name}</div>
            <div>
              <Link
                className={cn({
                  "text-sky-800 font-bold": true,
                  "dark:text-border ": true,
                  "hover:underline": true,
                })}
                href={`mailto:${user.email}`}
              >
                {user.email}
              </Link>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ListUsers;
