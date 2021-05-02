import React from 'react';
import ReactGA from 'react-ga';

const MissionInfo = ({ missionData, isRecent }) => {
  const handleReadMoreClick = () => {
    if (isRecent) {
      ReactGA.event({
        category: 'Mission',
        action: 'Read More Mission',
        label: 'Clicked Read More',
      });
    }
  };

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      <div>
        <img
          src={missionData.links.patch.small}
          alt=""
          className="overflow-hidden h-36"
        />
      </div>
      <div className="col-span-2">
        <h3 className="font-medium text-gray-600 text-lg mb-2 uppercase">
          {missionData.name}
        </h3>
        <div className={'mb-3 italic'}>
          Mission date: {new Date(missionData.date_utc).toLocaleString('en-US')}
        </div>

        <p className="text-justify">{missionData.details}</p>
        <div className="mt-5">
          <a
            onClick={handleReadMoreClick}
            target={'_blank'}
            href={missionData.links.reddit.campaign}
            className="hover:bg-gray-700 py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MissionInfo;
