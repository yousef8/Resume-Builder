import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import PersonalInfoData from "../types/PersonalInfoData";
import IEducation from "../types/Education";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

interface PreviewProps {
  info: PersonalInfoData;
  educations: IEducation[];
}

const ResumePreview: React.FC<PreviewProps> = ({ info, educations }) => {
  return (
    <div className="font-serif shadow-md bg-white pb-10">
      <div className="px-10 bg-[#F3F2EF] py-10">
        <div>
          <h1 className="font-bold text-3xl inline-block capitalize mr-4 leading-relaxed">
            {info.name}
          </h1>
          <h2 className="inline-block text-lg text-gray-500 leading-relaxed">
            {info.jobTitle}
          </h2>
        </div>
        <div className="flex justify-items-center justify-start">
          <div className="mr-10">
            {info.email && (
              <EnvelopeIcon className="size-4 inline-block mr-2" />
            )}
            {info.email}
          </div>

          <div className="mr-10">
            {info.phoneNumber && (
              <PhoneIcon className="size-4 inline-block mr-2" />
            )}
            {info.phoneNumber}
          </div>

          <div>
            {info.address && (
              <MapPinIcon className="size-4 inline-block mr-2" />
            )}
            {info.address}
          </div>
        </div>
      </div>

      <div className="px-10 mt-4">
        <div className="bg-[#F3F2EF] py-1 flex justify-center items-center rounded-md">
          <AcademicCapIcon className="size-5 mr-2" />
          Education
        </div>
        {educations.map((edu) => (
          <div
            className="flex justify-between justify-items-start mt-4"
            key={edu.id}
          >
            <div>
              <h1>{edu.school}</h1>
              <h2>{edu.degree}</h2>
            </div>
            <div>
              {edu.startDate?.getFullYear()}{" "}
              {edu.startDate?.toLocaleString("default", { month: "short" })} -{" "}
              {edu.endDate?.getFullYear()}{" "}
              {edu.endDate?.toLocaleString("default", { month: "short" })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;
