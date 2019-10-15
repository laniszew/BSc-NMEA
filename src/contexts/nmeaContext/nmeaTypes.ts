import { Dispatch } from 'react';

export interface INmeaState {
    connected: boolean,
    data: any
}

export interface INmeaContext {
    state: INmeaState,
    dispatch: Dispatch<any>
}

export type NmeaProps = {
    children: React.ReactNode,
    url?: string
}

export enum ActionTypes {
    SET_CONNECTED = 'SET_CONNECTED',
    SET_DATA = 'SET_DATA'
}
