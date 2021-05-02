import React, { useState } from 'react';
import { getMainSpaceXData } from '../../../api/spaceX';

const useContainer = () => {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    const getSpaceXData = async () => {
      const response = await getMainSpaceXData();
      typeof response !== undefined && setData(response);
    };

    getSpaceXData();
  }, []);

  return {
    data,
  };
};

export default useContainer;
