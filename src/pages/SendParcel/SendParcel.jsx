import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const { register, handleSubmit, watch } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const serviceCenteres = useLoaderData();

  const duplicateRegion = serviceCenteres.map((region) => region.region);
  const regions = [...new Set(duplicateRegion)];
  const senderRegion = watch("senderRegion");
  const recieverRegion = watch("recieverRegion");

  const districtByRegion = (region) => {
    const regionDistrict = serviceCenteres.filter((c) => c.region == region);
    const district = regionDistrict.map((d) => d.district);
    return district;
  };

  // console.log(senderRegion);
  // console.log(districtByRegion(senderRegion));

  const handelSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const parcelWeight = data.parcelWeight;
    const isSameDistrict = data.senderDistrict === data.recieverDistrict;

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 90;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    console.log("cost", cost);

    Swal.fire({
      title: "Agree with the cost?",
      text: `You wil be charged ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the percel info to the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
          Swal.fire({
            title: "Success",
            text: "Your parcel is under proceed",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div className="my-8 sm:rounded-2xl p-3 bg-white px-4 py-6 sm:px-7 sm:py-7 md:px-10 md:lg-10 lg:px-15 lg:py-15 space-y-2">
      <h2 className="text-[#03373D] text-2xl sm:text-3xl lg:text-4xl flex font-extrabold  justify-start">
        Send A Parcel
      </h2>
      <div className="space-y-5">
        <div className="">
          <h3 className="text-[#03373D] text-lg sm:text-xl lg:text-xl flex font-bold justify-start mt-5  pt-1 md:pt-3 border-b border-dashed pb-3 border-gray-300">
            Enter your parcel details
          </h3>
        </div>
        <div className="w-full border border-gray-50 rounded-2xl overflow-hidden">
          <form onSubmit={handleSubmit(handelSendParcel)} className="p-2">
            {/* document */}
            <div className="flex gap-4 ">
              <label className="label">
                <input
                  type="radio"
                  {...register("parcelType")}
                  value="document"
                  className="radio"
                  defaultChecked
                />
                Document
              </label>
              <label className="label">
                <input
                  type="radio"
                  {...register("parcelType")}
                  value="non-document"
                  className="radio"
                />
                Non-Document
              </label>
            </div>

            {/* parcel info: name, weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-between ">
              <fieldset className="fieldset">
                <label className="label text-black">Parcel Name</label>
                <input
                  type="text"
                  {...register("parcelName")}
                  className="input w-full"
                  placeholder="Parcel Name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label  text-black">Parcel Weight</label>
                <input
                  type="text"
                  {...register("parcelWeight")}
                  className="input w-full"
                  placeholder="Parcel Weight"
                />
              </fieldset>
            </div>

            <hr className="text-gray-300 border-dashed my-6" />
            {/* two column */}

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 space-y-4 my-6">
              {/* sender */}
              <div className="">
                <h4 className="text-md font-bold">Sender Detailes</h4>
                <div className="space-y-1">
                  {/* sender name */}
                  <fieldset className="fieldset">
                    <label className="label text-black">Sender Name</label>
                    <input
                      type="text"
                      {...register("senderName")}
                      className="input w-full"
                      defaultValue={user?.displayName}
                      placeholder="Sender Name"
                    ></input>
                  </fieldset>

                  {/* sender email */}
                  <fieldset className="fieldset">
                    <label className="label text-black">Sender email</label>
                    <input
                      type="email"
                      {...register("senderEmail")}
                      className="input w-full"
                      defaultValue={user?.email}
                      placeholder="Sender Email"
                    ></input>
                  </fieldset>

                  {/* sender region */}

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Sender region</legend>
                    <select
                      defaultValue="Pick a region"
                      className="select w-full "
                      {...register("senderRegion")}
                    >
                      <option disabled={true} className="">
                        Pick a region
                      </option>
                      {regions.map((region, index) => (
                        <option key={index} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </fieldset>

                  {/* sender district */}
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Sender district</legend>
                    <select
                      defaultValue="Pick a district"
                      className="select w-full "
                      {...register("senderDistrict")}
                    >
                      <option disabled={true} className="">
                        Pick a district
                      </option>
                      {districtByRegion(senderRegion).map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </fieldset>

                  {/* sender Address */}
                  <fieldset className="fieldset">
                    <label className="label text-black">Sender Address</label>
                    <input
                      type="text"
                      {...register("senderAddress")}
                      className="input w-full"
                      placeholder="Sender Address"
                    ></input>
                  </fieldset>

                  {/* sender phoneNumber */}
                  <fieldset className="fieldset">
                    <label className="label text-black">Sender Phone No</label>
                    <input
                      type="text"
                      {...register("senderPhoneNumber")}
                      className="input w-full"
                      placeholder="Sender Phone No"
                    ></input>
                  </fieldset>

                  {/* Pickup Instruction*/}
                  <fieldset className="fieldset">
                    <label className="label text-black">
                      Pickup Instruction
                    </label>

                    <textarea
                      {...register("pickupInstruction")}
                      placeholder="Pickup Instruction"
                      rows="3"
                      className="textarea w-full"
                    ></textarea>
                  </fieldset>
                </div>
              </div>

              {/* reciever */}
              <div className="">
                <h4 className="text-md font-bold">Reciever Detailes</h4>
                <div className="space-y-1">
                  {/* reciever name */}
                  <fieldset className="fieldset">
                    <label className="label text-black">Reciever Name</label>
                    <input
                      type="text"
                      {...register("recieverName")}
                      className="input w-full"
                      placeholder="Reciever Name"
                    ></input>
                  </fieldset>

                  {/* reciever email */}
                  <fieldset className="fieldset">
                    <label className="label text-black">Reciever email</label>
                    <input
                      type="email"
                      {...register("recieverEmail")}
                      className="input w-full"
                      placeholder="Reciever email"
                    ></input>
                  </fieldset>

                  {/* reciever region */}
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Reciever region</legend>
                    <select
                      defaultValue="Pick a region"
                      className="select w-full "
                      {...register("recieverRegion")}
                    >
                      <option disabled={true} className="">
                        Pick a region
                      </option>
                      {regions.map((region, index) => (
                        <option key={index} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </fieldset>

                  {/* reciever district */}
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                      Reciever district
                    </legend>
                    <select
                      defaultValue="Pick a district"
                      className="select w-full "
                      {...register("recieverDistrict")}
                    >
                      <option disabled={true} className="">
                        Pick a district
                      </option>
                      {districtByRegion(recieverRegion).map(
                        (district, index) => (
                          <option key={index} value={district}>
                            {district}
                          </option>
                        ),
                      )}
                    </select>
                  </fieldset>

                  {/* reciever Address */}
                  <fieldset className="fieldset">
                    <label className="label text-black">Reciever Address</label>
                    <input
                      type="text"
                      {...register("recieverAddress")}
                      className="input w-full"
                      placeholder="Reciever Address"
                    ></input>
                  </fieldset>

                  {/* reciever phoneNumber */}
                  <fieldset className="fieldset">
                    <label className="label text-black">
                      Reciever Phone No
                    </label>
                    <input
                      type="text"
                      {...register("recieverPhoneNumber")}
                      className="input w-full"
                      placeholder="Reciever Phone No"
                    ></input>
                  </fieldset>

                  {/* Delivery Instruction*/}
                  <fieldset className="fieldset">
                    <label className="label text-black">
                      Delivery Instruction
                    </label>

                    <textarea
                      {...register("deliveryInstruction")}
                      placeholder="Delivery Instruction"
                      rows="3"
                      className="textarea w-full"
                    ></textarea>
                  </fieldset>
                </div>
              </div>
            </div>

            <input
              type="submit"
              className="btn btn-primary  text-black"
              value="Send parcel"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendParcel;
