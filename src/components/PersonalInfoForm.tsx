import React from "react";
import PersonalInfoData from "../types/PersonalInfoData";

interface FormProps {
  save: (info: PersonalInfoData) => void;
}

const PersonalInfoForm: React.FC<FormProps> = ({ save }) => {
  return (
    <>
      <p>Form to enter personal info</p>
      <button
        onClick={() => save({})}
        className="grad-bg py-2.5 px-5 rounded-full text-white"
      >
        Save
      </button>
    </>
  );
};

export default PersonalInfoForm;
