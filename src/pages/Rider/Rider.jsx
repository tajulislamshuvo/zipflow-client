import React from "react";
import riderImg from "../../assets/agent-pending.png";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const serviceCenteres = useLoaderData();

  const duplicateRegion = serviceCenteres.map((region) => region.region);
  const regions = [...new Set(duplicateRegion)];
  const riderRegion = useWatch({ control, name: "region" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenteres.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/rider", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Your application has been submitted. We will reach you in 14 days",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="my-8 sm:rounded-2xl p-3 bg-white px-4 py-6 sm:px-7 sm:py-7 md:px-10 md:lg-10 lg:px-15 lg:py-15 space-y-2 md:space-y-3">
      <div className="space-y-4">
        <h2 className="text-[#03373D] text-3xl lg:text-4xl flex font-extrabold  justify-start">
          Be a Rider
        </h2>
        <p className="text-gray-600 text-sm max-w-150">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <hr className="text-gray-400 my-10" />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-[28px] font-extrabold mb-5">
            Tell us about yourself
          </h3>
          <form onSubmit={handleSubmit(handleRiderApplication)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <fieldset className="fieldset w-full">
                <label className="label text-black">Rider Name</label>

                <input
                  type="text"
                  {...register("name")}
                  defaultValue={user?.displayName}
                  className="input w-full input-bordered"
                  placeholder="Sender Name"
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <label className="label text-black">Email</label>
                <input
                  type="text"
                  {...register("email")}
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                  placeholder="Rider email"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Regions</legend>
                <select
                  {...register("region")}
                  defaultValue="Pick a region"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* rider districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Districts</legend>
                <select
                  {...register("district")}
                  defaultValue="Pick a district"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(riderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label text-black">Your Address</label>
                <input
                  type="text"
                  {...register("address")}
                  className="input input-bordered w-full"
                  placeholder="Rider Address"
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label text-black">Driving License</label>
                <input
                  type="text"
                  {...register("license")}
                  className="input input-bordered w-full"
                  placeholder="Driving license"
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label text-black">NID</label>
                <input
                  type="text"
                  {...register("nid")}
                  className="input input-bordered w-full"
                  placeholder="NID"
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label text-black">Phone No.</label>
                <input
                  type="text"
                  {...register("number")}
                  className="input input-bordered w-full"
                  placeholder="+0123456789"
                />
              </fieldset>
            </div>
            <div className="mt-3">
              <fieldset className="fieldset w-full">
                <label className="label text-black">
                  Which wire-house you want to work?
                </label>
                <input
                  type="text"
                  {...register("wireHouse")}
                  className="input input-bordered w-full"
                  placeholder="Wire house name"
                />
              </fieldset>
            </div>
            <button className="w-full bg-primary hover:bg-primary/80 hover:cursor-pointer transition text-gray-800 font-bold py-2 text-sm rounded-md mt-2">
              Apply as a rider
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={riderImg}
            alt="Rider"
            className="w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default Rider;
