import React, { useState } from "react";
import Experience from "../../types/Experience";
import { v4 as uuidv4 } from "uuid";
import { TrashIcon } from "@heroicons/react/24/outline";

interface ExperienceFormProps {
  experience: Experience;
  onSubmit: (experience: Experience) => void;
  onChange: (edu: Experience) => void;
  onDelete: (edu: Experience) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({
  experience = {
    id: uuidv4(),
    company: { name: "" },
    title: "",
    startDate: undefined,
    endDate: undefined,
  },
  onSubmit,
  onChange,
  onDelete,
}) => {
  // TODO: Wrap input elements in a component
  const [companyName, setCompanyName] = useState(experience.company?.name);
  const [title, setTitle] = useState(experience.title);
  const [startDate, setStartDate] = useState(experience.startDate);
  const [endDate, setEndDate] = useState(experience.endDate);

  return (
    <form
      onSubmit={() =>
        onSubmit({
          id: experience.id,
          company: { name: companyName },
          title,
          startDate,
          endDate,
        })
      }
    >
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-lg font-bold">
          Company Name
        </label>
        <input
          id="companyName"
          type="text"
          placeholder="Employer company name"
          value={companyName}
          onChange={(e) => {
            setCompanyName(e.target.value);
            onChange({
              id: experience.id,
              company: { name: e.target.value },
              title,
              startDate,
              endDate,
            });
          }}
          className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400 w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block text-lg font-bold">
          Job Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Degree"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            onChange({
              id: experience.id,
              company: { name: companyName },
              title: e.target.value,
              startDate,
              endDate,
            });
          }}
          className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400 w-full"
        />
      </div>

      <div className="box-border flex justify-around">
        <div className="mb-4 grow">
          <label htmlFor="startDate" className="block text-lg font-bold">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            value={startDate?.toISOString().substring(0, 10)}
            onChange={(e) => {
              setStartDate(new Date(e.target.value));
              onChange({
                id: experience.id,
                company: { name: companyName },
                title,
                startDate: new Date(e.target.value),
                endDate,
              });
            }}
            className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400 w-full"
          />
        </div>

        <div className="mb-4 grow ml-4">
          <label htmlFor="endDate" className="block text-lg font-bold">
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            value={endDate?.toISOString().substring(0, 10)}
            onChange={(e) => {
              setEndDate(new Date(e.target.value));
              onChange({
                id: experience.id,
                company: { name: companyName },
                title,
                endDate: new Date(e.target.value),
                startDate,
              });
            }}
            className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400 w-full"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div
          className="flex cursor-pointer"
          onClick={() => onDelete(experience)}
        >
          <TrashIcon className="size-6  mr-2" /> Delete
        </div>
        <button
          type="submit"
          className="grad-bg py-2.5 px-5 rounded-full text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
