import React, { useState } from "react";
import IEducation from "../../types/Education";
import { v4 as uuidv4 } from "uuid";
import { TrashIcon } from "@heroicons/react/24/outline";

interface EducationFormProps {
  education: IEducation;
  onSubmit: (education: IEducation) => void;
  onChange: (edu: IEducation) => void;
  onDelete: (edu: IEducation) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({
  education = {
    id: uuidv4(),
    school: "",
    degree: "",
    startDate: undefined,
    endDate: undefined,
  },
  onSubmit,
  onChange,
  onDelete,
}) => {
  // TODO: Wrap input elements in a component
  const [school, setSchool] = useState(education.school);
  const [degree, setDegree] = useState(education.degree);
  const [startDate, setStartDate] = useState(education.startDate);
  const [endDate, setEndDate] = useState(education.endDate);

  return (
    <form
      onSubmit={() =>
        onSubmit({ id: education.id, school, degree, startDate, endDate })
      }
    >
      <div className="mb-4">
        <label htmlFor="school" className="block text-lg font-bold">
          School
        </label>
        <input
          id="school"
          type="text"
          placeholder="School / University"
          value={school}
          onChange={(e) => {
            setSchool(e.target.value);
            onChange({
              id: education.id,
              school: e.target.value,
              degree,
              startDate,
              endDate,
            });
          }}
          className="bg-amber-50 rounded-lg p-2.5 border border-solid placeholder:italic placeholder:text-slate-400 w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="degree" className="block text-lg font-bold">
          Degree
        </label>
        <input
          id="degree"
          type="text"
          placeholder="Degree"
          value={degree}
          onChange={(e) => {
            setDegree(e.target.value);
            onChange({
              id: education.id,
              school,
              degree: e.target.value,
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
                id: education.id,
                school,
                degree,
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
                id: education.id,
                school,
                degree,
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
          onClick={() => onDelete(education)}
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

export default EducationForm;
