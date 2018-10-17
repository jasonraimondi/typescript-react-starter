import { mediaQueries } from '../src/infrastructure/styles/media-queries';

export default (loader) => {
   const variables = require('../src/style-config.json');
   return [
      require('postcss-cssnext')({
         features: {
            customProperties: { variables: variables.properties },
            customMedia: { extensions: mediaQueries(variables.screenSizes) },
         },
      }),
   ];
};
