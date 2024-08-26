import React, { useState } from "react";
import IEducation from "../../types/Education";
import { PencilIcon } from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import EducationForm from "./EducationForm";
import { v4 as uuidv4 } from "uuid";

interface EducationProps {
  educations: IEducation[];
  setEducations: (educations: IEducation[]) => void;
  className?: string;
}

const EducationC2: React.FC<EducationProps> = ({
  className,
  educations,
  setEducations,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [eduToBeEdit, setEduToBeEdit] = useState<IEducation | null>(null);

  function handleEduDelete(eduToDelete: IEducation) {
    const updatedEdus = educations.filter((edu) => edu.id !== eduToDelete.id);
    setEducations(updatedEdus);
    setEduToBeEdit(null);
  }

  function handleEduFormChange(eduChanged: IEducation) {
    const updatedEdus = educations.map((edu) =>
      edu.id === eduChanged.id ? eduChanged : edu,
    );
    setEducations(updatedEdus);
  }

  function handleEduFormSubmission(eduChanged: IEducation) {
    const updatedEdus = educations.map((edu) =>
      edu.id === eduChanged.id ? eduChanged : edu,
    );
    setEducations(updatedEdus);
    setEduToBeEdit(null);
  }

  return (
    <div className={`divide-y-2 divide-gray-200  ${className}`}>
      {/* TODO: Modularize section header */}
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
      {openMenu && eduToBeEdit && (
        <EducationForm
          education={eduToBeEdit}
          onSubmit={handleEduFormSubmission}
          onChange={handleEduFormChange}
          onDelete={handleEduDelete}
        />
      )}
      {openMenu &&
        !eduToBeEdit &&
        educations.map((education) => (
          <div
            className="font-bold capitalize py-2 relative flex justify-between cursor-pointer"
            onClick={() => setEduToBeEdit(education)}
            key={education.id}
          >
            {education.school}
            <PencilIcon className="size-4" />
          </div>
        ))}

      {openMenu && !eduToBeEdit && (
        <div className="flex justify-center">
          <button
            className="mt-2 flex justify-center items-center border rounded-full py-2 px-4 cursor-pointer hover:opacity-80 active:scale-95"
            onClick={() => {
              const id = uuidv4();
              setEducations([...educations, { id }]);
              setEduToBeEdit({ id });
            }}
          >
            {" "}
            <PlusIcon className="size-5 mr-2" /> Education
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationC2;
