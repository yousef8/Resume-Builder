import React, { useState } from "react";
import PersonalInfoData from "../types/PersonalInfoData";
import PersonalInfoPreview from "./PersonalInfoPreview";
import PersonalInfoForm from "./PersonalInfoForm";

interface InfoProps {
  info: PersonalInfoData;
  setInfo: (info: PersonalInfoData) => void;
}

const PersonalInfo: React.FC<InfoProps> = ({ info, setInfo }) => {
  // TODO: Load from Local Storage in future;
  const [edit, setEdit] = useState<boolean>(false);

  const updateInfo = (info: PersonalInfoData) => {
    setInfo(info);
    setEdit(false);
  };

  return (
    <div className="bg-white p-4 rounded-3xl shadow-md relative">
      {!edit && (
        <div
          onClick={() => setEdit(true)}
          className="grad-bg rounded-full w-fit p-2 absolute right-4 cursor-pointer hover:opacity-90 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </div>
      )}
      {edit ? (
        <PersonalInfoForm curInfo={info} save={updateInfo} />
      ) : (
        <PersonalInfoPreview info={info} />
      )}
    </div>
  );
};

export default PersonalInfo;
