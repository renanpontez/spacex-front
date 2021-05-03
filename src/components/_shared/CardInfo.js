import React from 'react';
import MissionInfo from './MissionInfo';

const CardInfo = ({ title, missionData }) => {
  return (
    <>
      <h1 className="p-4 font-bold">{title}</h1>

      <div className="lg:flex items-center container mx-auto my-auto w-full">
        <div className="relative sm:m-0 shadow-md hover:shadow-lg bg-white my-12 mx-4">
          <MissionInfo isRecent missionData={missionData} />
        </div>
      </div>
    </>
  );
};
export default CardInfo;
