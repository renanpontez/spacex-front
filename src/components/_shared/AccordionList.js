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
                  <svg
                    aria-hidden="true"
                    className=""
                    data-reactid="266"
                    fill="none"
                    height="24"
                    stroke="#606F7B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewbox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
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
