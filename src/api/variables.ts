import {Configuration} from './generated';

export const API_CONFIGURATION = {
  apiKeys: {
    Authorization: ''
  },
};

export function configurationFactory(): Configuration {
  return new Configuration(API_CONFIGURATION);
}
