import React, { useState } from 'react';
import MissionInfo from './MissionInfo';

const AccordionList = ({ title, missionsData }) => {
  const [missionOpened, setMissionOpened] = useState(null);

  const handleAccordion = chosenMission => {
    setMissionOpened(chosenMission === missionOpened ? null : chosenMission);
  };

  return (
    <>
      <h1 className="p-4 font-bold">{title}</h1>

      <section className="shadow">
        {Object.values(missionsData).map(eachMission => (
          <article
            className="border-b"
            key={eachMission.id}
            onClick={() => handleAccordion(eachMission.id)}
          >
            <div className="border-l-2 border-transparent ">
              <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none rounded-full">
                <h2 className="">{eachMission.name}</h2>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                  <p className="ml-1 transform rotate-90 text-center">
                    {missionOpened === eachMission.id ? '<' : '>'}
                  </p>
                </div>
              </header>
              {missionOpened === eachMission.id && (
                <div>
                  <MissionInfo missionData={eachMission} />
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
export default AccordionList;
