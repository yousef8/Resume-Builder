import React, { useState } from "react";
import IEducation from "../../types/Education";
import { PencilIcon } from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

interface EducationProps {
  educations: IEducation[];
  setEducations: (educations: IEducation[]) => void;
  className?: string;
}
const EducationC2: React.FC<EducationProps> = ({ className, educations }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={`divide-y-2 divide-gray-200  ${className}`}>
      <div
        className="flex justify-between items-center text-lg font-bold cursor-pointer mb-2"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="flex justify-start items-center">
          <AcademicCapIcon className="size-5 mr-2" />
          Education
        </div>
        <ChevronDownIcon
          className={`size-5 transition ease-out duration-500 ${openMenu ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {openMenu &&
        educations.map((education) => (
          <div className="font-bold capitalize py-2 relative flex justify-between cursor-pointer">
            {education.school}
            <PencilIcon className="size-4" />
          </div>
        ))}

      {openMenu && (
        <div className="flex justify-center">
          <button className="mt-2 flex justify-center items-center border rounded-full py-2 px-4 cursor-pointer hover:opacity-80 active:scale-95">
            {" "}
            <PlusIcon className="size-5 mr-2" /> Education
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationC2;
