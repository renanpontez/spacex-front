import { getWithAxios } from '../config';

export const getMainSpaceXData = () => {
  return getWithAxios('/');
};
