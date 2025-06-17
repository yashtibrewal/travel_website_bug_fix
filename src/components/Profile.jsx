// src/components/Profile.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user ? user.name : "Guest"}</h2>
      <button
        onClick={() => setUser({ name: "Ayushi Jain" })}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login as Ayushi
      </button>
    </div>
  );
};

export default Profile;
