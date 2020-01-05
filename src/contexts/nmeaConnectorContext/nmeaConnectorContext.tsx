import React, { createContext, useEffect, useCallback } from 'react';
import {
    INmeaConnectorContext, INmeaConnectorState, ActionTypes, NmeaConnectorProps
} from './nmeaConnectorTypes';
import { NmeaConnectorActions } from './nmeaConnectorActions';

const NmeaConnectorContext = createContext<INmeaConnectorContext | undefined>(undefined);

const nmeaReducer = (state: INmeaConnectorState, action: NmeaConnectorActions): INmeaConnectorState => {
    switch (action.type) {
        case ActionTypes.SET_CONNECTED: {
            return { ...state, connected: action.payload };
        }
        case ActionTypes.SET_DATA: {
            return { ...state, data: action.payload };
        }
        case ActionTypes.SET_URL: {
            return { ...state, url: action.payload };
        }
        default: {
            throw new Error(`Unhandled action type: ${action}`);
        }
    }
};

const initialState: INmeaConnectorState = {
    connected: false,
    data: {},
    url: 'ws://192.168.1.11:80'
};

const NmeaConnectorProvider = ({ children }: NmeaConnectorProps) => {
    const [state, dispatch] = React.useReducer(nmeaReducer, initialState);
    const connectWebsocket = useCallback(() => {
        const ws = new WebSocket(state.url);

        ws.onopen = () => {
            dispatch(NmeaConnectorActions.setConnected(true));
        };

        ws.onmessage = (e) => {
            dispatch(NmeaConnectorActions.setData(e.data));
        };

        ws.onerror = (error) => {
            console.warn(error);
            dispatch(NmeaConnectorActions.setConnected(false));
            ws.close();
        };

        ws.onclose = (error) => {
            // refresh connection after 10s
            // setTimeout(() => connectWebsocket(), 10000);
        };

        return (() => {
            ws.close();
        });
    }, [state.url]);

    useEffect(() => {
        connectWebsocket();
    }, [connectWebsocket]);

    return (
        <NmeaConnectorContext.Provider value={{ state, dispatch }}>
            {children}
        </NmeaConnectorContext.Provider>
    );
};

const useNmeaConnector = (): INmeaConnectorContext => {
    const context = React.useContext(NmeaConnectorContext);
    if (context === undefined) {
        throw new Error('useNmea must be used within a NmeaProvider');
    }
    return context;
};


export { NmeaConnectorProvider, useNmeaConnector };
