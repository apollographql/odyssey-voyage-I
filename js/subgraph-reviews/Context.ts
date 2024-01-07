import { BaseContext } from '@apollo/server';

import { ReviewsAPI } from './datasources';

export interface Context extends BaseContext {
  dataSources: {
    reviewsAPI: ReviewsAPI;
  };
}
