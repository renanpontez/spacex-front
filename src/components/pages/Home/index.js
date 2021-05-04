import React, { useState } from 'react';
import useContainer from './useContainer';
import 'tailwindcss/tailwind.css';
import CardInfo from '../../_shared/CardInfo';
import Loading from '../../_shared/Loading';
import AccordionList from '../../_shared/AccordionList';
import HomeContext from './context';
import FavoritesSection from '../../_shared/FavoritesSection';

const Home = () => {
  const { data } = useContainer();
  const [favorites, setFavorites] = useState([]);
  const [isFavoriteOpened, setIsFavoriteOpened] = useState(false);

  const toggleFavorite = favoriteMission => {
    const newFavorites = favorites.find(t => t.id === favoriteMission.id)
      ? favorites.filter(t => t.id !== favoriteMission.id)
      : favorites.concat([favoriteMission]);

    setFavorites(newFavorites);
  };

  return (
    <HomeContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}
    >
      <div>
        {data ? (
          <div className={'relative'}>
            {isFavoriteOpened && <FavoritesSection />}
            <div className={'w-full h-20 bg-gray-100 shadow-md text-right'}>
              <button
                onClick={() => setIsFavoriteOpened(!isFavoriteOpened)}
                type="button"
                class="w-12 h-12 m-3 rounded-full bg-blue-500 inline-flex p-2 shadow"
              >
                <svg
                  className={`w-7 h-12 mt-1 mb-2 ml-1 text-center fill-current text-white`}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <polygon points="12,3 6,21 21,9 3,9 18,21" />
                </svg>
              </button>
            </div>
            <div className="container mx-auto">
              <div
                style={{
                  backgroundImage: `url(https://www.spacex.com/static/images/crew-2/docking/Homepage_Dragon_Docking_Desktop.webp)`,
                }}
                className="mt-4 md:mt-0 h-96 bg-cover bg-center pt-24 pl-12 text-white mb-16"
              >
                <div className="w-80">
                  <h1 className="font-bold text-shadow">
                    SpaceX - Launches Info! =)
                  </h1>
                  <p>
                    Here you'll find the latest news about all SpaceX missions.
                    Check it out below!
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div>
                  {data.latest && (
                    <CardInfo
                      title={'Latest Mission'}
                      missionData={data.latest}
                    />
                  )}
                </div>
                <div>
                  {data.next && (
                    <CardInfo title={'Next Mission'} missionData={data.next} />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div>
                  <AccordionList
                    title={'Past Missions'}
                    missionsData={data.past}
                  />
                </div>
                <div>
                  <AccordionList
                    title={'Upcoming Missions'}
                    missionsData={data.upcoming}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
