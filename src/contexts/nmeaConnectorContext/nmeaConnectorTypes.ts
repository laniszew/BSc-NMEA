import { Dispatch } from 'react';
import { NmeaConnectorActions } from './nmeaConnectorActions';

export interface INmeaConnectorState {
    connected: boolean,
    data: any,
    url: string
}

export interface INmeaConnectorContext {
    state: INmeaConnectorState,
    dispatch: Dispatch<NmeaConnectorActions>
}

export type NmeaConnectorProps = {
    children: React.ReactNode,
}

export enum ActionTypes {
    SET_CONNECTED = 'SET_CONNECTED',
    SET_DATA = 'SET_DATA',
    SET_URL = 'SET_URL'
}
