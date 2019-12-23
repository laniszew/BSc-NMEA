import { ActionsUnion } from '../../utils/types';
import { ActionTypes, PositionPacket } from './positionTypes';
import { createAction } from '../../utils/makeAction';

type FrameData = {
    frameType: string;
    frameData: PositionPacket
}

export const PositionActions = {
    setFrameData: (frame: FrameData) => createAction(ActionTypes.SET_FRAME_DATA, frame)
};

export type PositionActions = ActionsUnion<typeof PositionActions>;
