import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-1">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm">{user.email}</p>
      <p className="text-sm">{user.phone}</p>
      <p className="text-sm italic text-blue-500">{user.website}</p>
      <div className="mt-2 text-sm">
        <p>
          <span className="font-semibold">Address:</span> {user.address.street},{" "}
          {user.address.city}
        </p>
        <p>
          <span className="font-semibold">Company:</span> {user.company.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
