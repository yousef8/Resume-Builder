import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import PersonalInfoData from "../types/PersonalInfoData";

interface PreviewProps {
  info: PersonalInfoData;
}

const ResumePreview: React.FC<PreviewProps> = ({ info }) => {
  return (
    <div className="font-serif shadow-md">
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

      <div className="border border-solid border-blue-300 bg-white px-10">
        Resume Preview
      </div>
    </div>
  );
};

export default ResumePreview;
