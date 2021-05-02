import React from 'react';
import useContainer from './useContainer';
import 'tailwindcss/tailwind.css';
import CardInfo from '../../_shared/CardInfo';
import Loading from '../../_shared/Loading';
import AccordionList from '../../_shared/AccordionList';

const Home = () => {
  const { data } = useContainer();

  return (
    <>
      {data ? (
        <div className="container mx-auto">
          <div
            style={{
              backgroundImage: `url(https://www.spacex.com/static/images/crew-2/docking/Homepage_Dragon_Docking_Desktop.webp)`,
            }}
            className="md:mt-4 h-96 bg-cover bg-center pt-24 pl-12 text-white mb-16"
          >
            <div className="w-80">
              <h1 className="font-bold">SpaceX - Launches Info! =)</h1>
              <p>
                Here you'll find the latest news about all SpaceX missions.
                Check it out below!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div>
              {data.latest && (
                <CardInfo title={'Latest Mission'} missionData={data.latest} />
              )}
            </div>
            <div>
              {data.next && (
                <CardInfo title={'Next Mission'} missionData={data.next} />
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-4">
            <div>
              <AccordionList title={'Past Missions'} missionsData={data.past} />
            </div>
            <div>
              <AccordionList
                title={'Upcoming Missions'}
                missionsData={data.upcoming}
              />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
