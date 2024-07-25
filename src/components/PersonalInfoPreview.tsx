import React from "react";
import PersonalInfoData from "../types/PersonalInfoData";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const PersonalInfoPreview: React.FC<{ info: PersonalInfoData }> = ({
  info,
}) => {
  return (
    <>
      <h1 className="text-lg font-bold capitalize">
        {info?.name || "Your Name"}
      </h1>
      <h2 className="text-gray-500 mb-4">{info?.jobTitle || "Job Title"}</h2>

      <div className="flex mb-2">
        <EnvelopeIcon className="size-6" />
        <p className="ml-2">{info?.email || "Email"}</p>
      </div>

      <div className="flex mb-2">
        <PhoneIcon className="size-6" />
        <p className="ml-2">{info?.phoneNumber || "Phone Number"}</p>
      </div>

      <div className="flex">
        <MapPinIcon className="size-6" />
        <p className="ml-2">{info?.address || "Address"}</p>
      </div>
    </>
  );
};

export default PersonalInfoPreview;
