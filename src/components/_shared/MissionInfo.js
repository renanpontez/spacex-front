import React, { useState } from 'react';
import ReactGA from 'react-ga';
import HomeContext from '../pages/Home/context';
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);

const MissionInfo = ({ missionData, isRecent }) => {
  const handleReadMoreClick = () => {
    if (isRecent) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);
      ReactGA.pageview(window.location.pathname);

      ReactGA.event({
        category: 'Links',
        action: 'Read More Mission',
        label: 'Clicked Read More',
        value: 1,
      });
    }
  };

  return (
    <HomeContext.Consumer>
      {context => (
        <div className="p-6 grid grid-cols-3 gap-4">
          <div>
            <img
              src={missionData.links.patch.small}
              alt={missionData.name}
              className="overflow-hidden h-36"
            />
          </div>
          <div className="col-span-2">
            <h3 className="font-medium text-gray-600 text-lg mb-2 uppercase">
              {missionData.name}
            </h3>
            <div className={'mb-3 italic'}>
              Mission date:{' '}
              {new Date(missionData.date_utc).toLocaleString('en-US')}
            </div>

            <p className="text-justify">
              {missionData.details ||
                'SpaceX did not informed any details about this mission.'}
            </p>
            <div className="mt-5 flex">
              <div>
                <a
                  onClick={handleReadMoreClick}
                  target={'_blank'}
                  href={missionData.links.reddit.campaign}
                  className="hover:bg-gray-700 py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100"
                >
                  Read More
                </a>
              </div>
              <div>
                <a
                  className={`inline-block ${
                    context.favorites.find(t => t.id === missionData.id)
                      ? 'text-blue-600'
                      : 'text-gray-300'
                  }`}
                  onClick={() => context.toggleFavorite(missionData)}
                >
                  <svg
                    className={`cursor-pointer w-10 h-6 ml-2 fill-current`}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <polygon points="12,3 6,21 21,9 3,9 18,21" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </HomeContext.Consumer>
  );
};

export default MissionInfo;
