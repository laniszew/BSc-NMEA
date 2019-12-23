import { ActionsUnion } from '../../utils/types';
import { ActionTypes, UnitPacket } from './unitTypes';
import { createAction } from '../../utils/makeAction';

type FrameData = {
    frameType: string;
    frameData: UnitPacket
}

export const UnitActions = {
    setFrameData: (frame: FrameData) => createAction(ActionTypes.SET_FRAME_DATA, frame)
};

export type UnitActions = ActionsUnion<typeof UnitActions>;
