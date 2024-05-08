import User from "./User";


const Team = () => {
  return (
    <div className="flex flex-col place-content-center">
      <div className="divider divider-primary"><h1 className="text-5xl font-mono mb-5 flex justify-center">Team</h1></div>
      <div className="flex flex-row place-content-center">
        <div className="p-3">
          <User userName="Naor" image='/assets/Naor.jpg' />
        </div>
        <div className="p-3">
          <User userName="Hen" image="/assets/Hen.jpg" />
        </div>
      </div>
    </div>
  );
};
export default Team;
