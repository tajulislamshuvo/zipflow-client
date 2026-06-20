import React, { useState } from "react";
import { FaCamera, FaEdit } from "react-icons/fa";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useRole from "../../../hooks/useRole";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { role, isPending } = useRole();
  const { user, loading } = useAuth();

  // const user = {
  //   displayName: "John Doe",
  //   email: "john@gmail.com",
  //   photoURL: "https://i.ibb.co/5x5K4kB/avatar.png",
  //   bio: "Parcel enthusiast and logistics manager. Managing deliveries with ZipFlow.",
  // };

  if (loading || isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="max-w-5xl mx-auto p-1 md:p-6">
      {/* Banner */}
      <div className="h-48 rounded-3xl bg-gradient-to-r from-primary to-secondary shadow-lg"></div>

      {/* Profile Card */}
      <div className="bg-base-100 shadow-xl rounded-3xl rounded-t-none p-8 -mt-20 relative">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={user.photoURL}
              alt=""
              className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>

          <h2 className="text-3xl font-bold mt-4">{user.displayName}</h2>

          <p className="text-gray-500">{user.email}</p>

          {/* <p className="max-w-xl text-center mt-4 text-gray-600">{user.bio}</p> */}

          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary mt-6 gap-2 text-gray-900"
          >
            <FaEdit />
            Edit Profile
          </button>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div className="bg-base-200 p-5 rounded-2xl">
            <h3 className="font-semibold mb-2">Full Name</h3>
            <p>{user.displayName}</p>
          </div>

          <div className="bg-base-200 p-5 rounded-2xl">
            <h3 className="font-semibold mb-2">Email Address</h3>
            <p>{user.email}</p>
          </div>

          <div className="bg-base-200 p-5 rounded-2xl">
            <h3 className="font-semibold mb-2">Account Type</h3>
            <p>
              {role
                ? role.trim().toLowerCase().charAt(0).toUpperCase() +
                  role.trim().slice(1).toLowerCase()
                : ""}
            </p>
          </div>

          <div className="bg-base-200 p-5 rounded-2xl">
            <h3 className="font-semibold mb-2">Status</h3>
            <p>Active</p>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && <EditProfileModal setIsEditing={setIsEditing} />}
    </div>
  );
};

export default Profile;
