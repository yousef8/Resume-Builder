import PersonalInfoData from "../types/PersonalInfoData";

interface PreviewProps {
  info: PersonalInfoData;
}

const ResumePreview: React.FC<PreviewProps> = ({ info }) => {
  return (
    <div className="border border-solid border-blue-300">Resume Preview</div>
  );
};

export default ResumePreview;
