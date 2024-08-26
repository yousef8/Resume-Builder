import React, { useState } from "react";
import Experience from "../../types/Experience";
import { PencilIcon } from "@heroicons/react/24/outline";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { v4 as uuidv4 } from "uuid";
import ExperienceForm from "./ExperiencForm";

interface ExperienceC2Props {
  experiences: Experience[];
  setExperiences: (expcations: Experience[]) => void;
  className?: string;
}

const ExperienceC2: React.FC<ExperienceC2Props> = ({
  className,
  experiences,
  setExperiences,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [expToEdit, setExpToEdit] = useState<Experience | null>(null);

  function handleExpDelete(expToDelete: Experience) {
    const updatedExps = experiences.filter((exp) => exp.id !== expToDelete.id);
    setExperiences(updatedExps);
    setExpToEdit(null);
  }

  function handleExpChange(expChanged: Experience) {
    const updatedExps = experiences.map((exp) =>
      exp.id === expChanged.id ? expChanged : exp,
    );
    setExperiences(updatedExps);
  }

  function handleExpSubmission(expChanged: Experience) {
    const updatedexps = experiences.map((exp) =>
      exp.id === expChanged.id ? expChanged : exp,
    );
    setExperiences(updatedexps);
    setExpToEdit(null);
  }

  return (
    <div className={`divide-y-2 divide-gray-200  ${className}`}>
      {/* TODO: Modularize section header */}
      <div
        className="flex justify-between items-center text-lg font-bold cursor-pointer mb-2"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="flex justify-start items-center">
          <BriefcaseIcon className="size-5 mr-2" />
          Experiences
        </div>
        <ChevronDownIcon
          className={`size-5 transition ease-out duration-500 ${openMenu ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {openMenu && expToEdit && (
        <ExperienceForm
          experience={expToEdit}
          onSubmit={handleExpSubmission}
          onChange={handleExpChange}
          onDelete={handleExpDelete}
        />
      )}
      {openMenu &&
        !expToEdit &&
        experiences.map((experience) => (
          <div
            className="font-bold capitalize py-2 relative flex justify-between cursor-pointer"
            onClick={() => setExpToEdit(experience)}
            key={experience.id}
          >
            {experience.company?.name}
            <PencilIcon className="size-4" />
          </div>
        ))}

      {openMenu && !expToEdit && (
        <div className="flex justify-center">
          <button
            className="mt-2 flex justify-center items-center border rounded-full py-2 px-4 cursor-pointer hover:opacity-80 active:scale-95"
            onClick={() => {
              const id = uuidv4();
              setExperiences([...experiences, { id }]);
              setExpToEdit({ id });
            }}
          >
            {" "}
            <PlusIcon className="size-5 mr-2" /> expcation
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperienceC2;
