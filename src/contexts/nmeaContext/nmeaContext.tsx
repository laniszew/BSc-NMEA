import React, { createContext, useEffect, useCallback } from 'react';
import {
 INmeaContext, INmeaState, ActionTypes, NmeaProps
} from './nmeaTypes';
import { NmeaActions } from './nmeaActions';

const NmeaContext = createContext<INmeaContext | undefined>(undefined);

const nmeaReducer = (state: INmeaState, action: NmeaActions): INmeaState => {
    switch (action.type) {
        case ActionTypes.SET_CONNECTED: {
            return { ...state, connected: action.payload };
        }
        case ActionTypes.SET_DATA: {
            return { ...state, data: action.payload };
        }
        default: {
            throw new Error(`Unhandled action type: ${action}`);
        }
    }
};

const initialState: INmeaState = {
    connected: false,
    data: {}
};

const NmeaProvider = ({ children, url }: NmeaProps) => {
    const [state, dispatch] = React.useReducer(nmeaReducer, initialState);
    const connectWebsocket = useCallback(() => {
        const ws = new WebSocket(url || 'ws://192.168.1.10:86');

        ws.onopen = () => {
            dispatch(NmeaActions.setConnected(true));
        };

        ws.onmessage = (e) => {
            dispatch(NmeaActions.setData(e.data));
        };

        ws.onerror = (error) => {
            console.warn('Socket encountered an error, closing socket');
            dispatch(NmeaActions.setConnected(false));
            ws.close();
        };

        ws.onclose = (error) => {
            console.warn('refreshing');
            console.warn(error);
            // refresh connection after 5s
            setTimeout(() => connectWebsocket(), 5000);
        };
    }, [url]);

    useEffect(() => {
        connectWebsocket();
    }, [connectWebsocket]);

    return (
        <NmeaContext.Provider value={{ state, dispatch }}>
            {children}
        </NmeaContext.Provider>
    );
};

const useNmea = (): INmeaContext => {
    const context = React.useContext(NmeaContext);
    if (context === undefined) {
        throw new Error('useNmea must be used within a NmeaProvider');
    }
    return context;
};


export { NmeaProvider, useNmea };
