import React from 'react';
import HomeContext from '../pages/Home/context';

const FavoritesSection = () => {
  return (
    <HomeContext.Consumer>
      {context => (
        <div
          className={
            'absolute top-20 right-0 w-96 h-full bg-gray-500 z-10 shadow-lg '
          }
        >
          <ul>
            {context.favorites.map(favoriteMission => (
              <li className={'m-5'}>
                <div className={'flex flex-wrap content-center'}>
                  <div>
                    <img
                      src={favoriteMission.links.patch.small}
                      alt={favoriteMission.name}
                      className="overflow-hidden h-12"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mt-2 ml-2 text-lg uppercase">
                      {favoriteMission.name}
                    </h3>
                  </div>
                  <div>
                    <a
                      href={'#'}
                      onClick={() => context.toggleFavorite(favoriteMission)}
                    >
                      <svg
                        className={
                          'w-10 mt-3 ml-4 bg-red fill-current text-white'
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </HomeContext.Consumer>
  );
};

export default FavoritesSection;
