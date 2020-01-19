import { ActionsUnion } from '../../utils/types';
import { ActionTypes } from './nmeaConnectorTypes';
import { createAction } from '../../utils/makeAction';

export const NmeaConnectorActions = {
    setConnected: (flag: boolean) => createAction(ActionTypes.SET_CONNECTED, flag),
    setData: (data: any) => createAction(ActionTypes.SET_DATA, data),
    setUrl: (url: string) => createAction(ActionTypes.SET_URL, url)
};

export type NmeaConnectorActions = ActionsUnion<typeof NmeaConnectorActions>;
