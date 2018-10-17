import { combineReducers } from 'redux';

import { frequencyReducer } from './Frequency.reducer';
import { languageReducer } from './Language.reducer';

export const rootReducer = combineReducers({
  language: languageReducer,
  frequency: frequencyReducer,
});
