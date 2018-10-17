import { IActionResponse } from '../action-response';

export const SET_FREQUENCY = '[FREQUENCY] Set';

export type SetFrequencyActionType = (frequency) => IActionResponse<string>;

export const SetFrequencyAction: SetFrequencyActionType = (frequency) => {
  return {
    type: SET_FREQUENCY,
    payload: frequency,
  };
};
