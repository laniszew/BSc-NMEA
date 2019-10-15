import { ActionsUnion } from '../../utils/types';
import { ActionTypes } from './nmeaTypes';
import { createAction } from '../../utils/makeAction';

export const NmeaActions = {
    setConnected: (flag: boolean) => createAction(ActionTypes.SET_CONNECTED, flag),
    setData: (data: any) => createAction(ActionTypes.SET_DATA, data)
};

export type NmeaActions = ActionsUnion<typeof NmeaActions>;
