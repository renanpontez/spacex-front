export const ROUTE_HOME = '/';

export const buildURL = (routePath, { paramName, paramValue }) =>
  routePath.replace(`:${paramName}`, paramValue);
