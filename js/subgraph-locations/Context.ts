import { BaseContext } from '@apollo/server';

import { LocationsAPI } from './datasources/LocationsApi';

export interface Context extends BaseContext {
  dataSources: {
    locationsAPI: LocationsAPI;
  };
}
