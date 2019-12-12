import { Dispatch } from 'react';

export interface INmeaConnectorState {
    connected: boolean,
    data: any
}

export interface INmeaConnectorContext {
    state: INmeaConnectorState,
    dispatch: Dispatch<any>
}

export type NmeaConnectorProps = {
    children: React.ReactNode,
    url?: string
}

export enum ActionTypes {
    SET_CONNECTED = 'SET_CONNECTED',
    SET_DATA = 'SET_DATA'
}
