import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import PersonalInfoData from "../types/PersonalInfoData";
import ResumePreview from "../components/ResumePreview";
import EducationC2 from "../components/education/EducationC2";
import IEducation from "../types/Education";

function ResumeBuilder() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData>({});
  const [educations, setEducations] = useState<IEducation[]>([
    { school: "tanta university", degree: "Baschelor" },
    { school: "iti", degree: "Open Source Applications Development diploma" },
    { school: "MIT", degree: "Baschelor in electorincs" },
  ]);

  return (
    <div className="md:flex md:flex-wrap pt-4">
      <div className="grow mr-4">
        <PersonalInfo
          info={personalInfo}
          setInfo={setPersonalInfo}
          className="bg-white p-4 rounded-3xl shadow-md relative mb-4"
        />
        <EducationC2
          educations={educations}
          setEducations={setEducations}
          className="bg-white p-4 rounded-3xl shadow-md relative"
        />
      </div>
      <div className="grow">
        <ResumePreview info={personalInfo} />
      </div>
    </div>
  );
}

export default ResumeBuilder;
