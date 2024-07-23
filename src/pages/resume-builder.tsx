import PersonalInfo from "../components/PersonalInfo";

function ResumeBuilder() {
  return (
    <div className="md:flex md:flex-wrap pt-4">
      <div className="w-1/2">
        <PersonalInfo />
      </div>
      <h1 className="text-3xl font-bold underline grow">Resmue Preview</h1>
    </div>
  );
}

export default ResumeBuilder;
