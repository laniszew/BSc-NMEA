import React, { createContext, useEffect, useCallback } from 'react';
import { IPositionContext, IPositionState, ActionTypes } from './positionTypes';
import { PositionActions } from './positionActions';


const PositionContext = createContext<IPositionContext | undefined>(undefined);

const nmeaReducer = (state: IPositionState, action: PositionActions): IPositionState => {
    switch (action.type) {
        case ActionTypes.SET_FRAME_DATA: {
            return { ...state, [action.payload.frameType]: action.payload.frameData};
        }
        default: {
            throw new Error(`Unhandled action type: ${action}`);
        }
    }
};

const initialState: IPositionState = {
    GGA: null,
    GLL: null,
    GSA: null
};

const PositionProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(nmeaReducer, initialState);
    return (
        <PositionContext.Provider value={{ state, dispatch }}>
            {children}
        </PositionContext.Provider>
    );
};

const usePosition = (): IPositionContext => {
    const context = React.useContext(PositionContext);
    if (context === undefined) {
        throw new Error('usePosition must be used within a NmeaProvider');
    }
    return context;
};


export { PositionProvider, usePosition };
