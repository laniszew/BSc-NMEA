import { Dispatch } from 'react';
import { GGAPacket } from '../../parser/codecs/GGA';
import { GLLPacket } from '../../parser/codecs/GLL';
import { GSAPacket } from '../../parser/codecs/GSA';
import { PositionActions } from './positionActions';

export interface IPositionState {
    GGA: GGAPacket | null;
    GLL: GLLPacket | null;
    GSA: GSAPacket | null;
}

export interface IPositionContext {
    state: IPositionState,
    dispatch: Dispatch<PositionActions>
}

export enum ActionTypes {
    SET_FRAME_DATA = 'SET_FRAME_DATA'
}

export type PositionPacket = GGAPacket | GLLPacket | GSAPacket;
