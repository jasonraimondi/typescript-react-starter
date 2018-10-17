import { param, route } from 'typesafe-react-router';

export const Routes = {
   SAMPLE: route(),
   SAMPLE_SHOW: route('sample', param('id')),
};
