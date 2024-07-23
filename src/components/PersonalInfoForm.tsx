import React, { useState } from "react";
import PersonalInfoData from "../types/PersonalInfoData";

interface FormProps {
  curInfo: PersonalInfoData;
  save: (info: PersonalInfoData) => void;
}

const PersonalInfoForm: React.FC<FormProps> = ({ curInfo, save }) => {
  const [name, setName] = useState<string>(curInfo.name || "");
  const [jobTitle, setJobTitle] = useState<string>(curInfo.jobTitle || "");
  const [email, setEmail] = useState<string>(curInfo.email || "");
  const [phoneNumber, setPhoneNumber] = useState<string>(
    curInfo.phoneNumber || "",
  );
  const [address, setAddress] = useState<string>(curInfo.address || "");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const info: PersonalInfoData = {
      name,
      jobTitle,
      email,
      phoneNumber,
      address,
    };
    save(info);
  };
  return (
    <>
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-lg font-bold">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-lg font-bold">
            Job Title
          </label>
          <input
            id="jobTitle"
            type="text"
            placeholder="Your job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-lg font-bold">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Your Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-lg font-bold">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Your location"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400"
          />
        </div>
        <button
          type="submit"
          className="grad-bg py-2.5 px-5 rounded-full text-white"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default PersonalInfoForm;
