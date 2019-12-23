import React, { createContext } from 'react';
import { IUnitContext, IUnitState, ActionTypes } from './unitTypes';
import { UnitActions } from './unitActions';

const UnitContext = createContext<IUnitContext | undefined>(undefined);

const unitReducer = (state: IUnitState, action: UnitActions): IUnitState => {
    switch (action.type) {
        case ActionTypes.SET_FRAME_DATA: {
            return { ...state, [action.payload.frameType]: action.payload.frameData};
        }
        default: {
            throw new Error(`Unhandled action type: ${action}`);
        }
    }
};

const initialState: IUnitState = {
    MWD: null,
    MWV: null,
    RMC: null
};

const UnitProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(unitReducer, initialState);
    return (
        <UnitContext.Provider value={{ state, dispatch }}>
            {children}
        </UnitContext.Provider>
    );
};

const useUnit = (): IUnitContext => {
    const context = React.useContext(UnitContext);
    if (context === undefined) {
        throw new Error('useUnit must be used within a UnitProvider');
    }
    return context;
};


export { UnitProvider, useUnit };
