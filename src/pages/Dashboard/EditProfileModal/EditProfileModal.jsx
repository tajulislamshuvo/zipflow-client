import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import { toast } from "react-toastify";
import { auth } from "../../../firebase/firebase.init";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EditProfileModal = ({ setIsEditing }) => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const [editProfileLoading, setEditProfileLoading] = useState(false);
  const { user, loading, updateUserProfile, setUser } = useAuth();
  const changeProfile = async (data) => {
    setEditProfileLoading(true);
    try {
      let photoURL = user?.photoURL;
      if (data.photo[0]) {
        const imageFile = data.photo[0];
        const formData = new FormData();
        formData.append("image", imageFile);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;

        const res = await axios.post(image_API_URL, formData);

        photoURL = res.data.data.url;
      }

      const userProfile = {
        displayName: data?.name,
        photoURL: photoURL,
      };
      await updateUserProfile(userProfile);
      await auth.currentUser.reload();

      setUser({ ...auth.currentUser });
      toast.success("User profile updated.");

      await axiosSecure.patch(`/updateUser/${user?.email}`, {
        name: data.name,
        photoURL,
      });

      setIsEditing(false);
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setEditProfileLoading(false);
    }
  };
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>

        <form className="space-y-5" onSubmit={handleSubmit(changeProfile)}>
          {/* Image */}
          <div>
            <label className="font-medium">Profile Photo</label>

            <label className="mt-2 flex items-center gap-3 border rounded-xl p-3 cursor-pointer">
              <FaCamera />
              {/* <span>Choose Image</span> */}

              <input type="file" className="" {...register("photo")} />
            </label>
          </div>

          {/* Name */}
          <div>
            <label className="font-medium">Full Name</label>

            <input
              type="text"
              className="input input-bordered w-full mt-2"
              defaultValue={user?.displayName}
              placeholder="Enter name"
              {...register("name")}
            />
          </div>

          {/* Bio */}
          <div>
            <label className="font-medium">Bio</label>

            <textarea
              className="textarea textarea-bordered w-full mt-2"
              rows={4}
              placeholder="Write something..."
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="btn"
            >
              Cancel
            </button>

            <button type="submit" className="btn btn-primary text-gray-900">
              {editProfileLoading ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
