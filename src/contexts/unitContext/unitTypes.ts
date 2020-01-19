import { Dispatch } from 'react';
import { UnitActions } from './unitActions';
import { MWDPacket } from '../../parser/codecs/MWD';
import { MWVPacket } from '../../parser/codecs/MWV';
import { RMCPacket } from '../../parser/codecs/RMC';
import { VHWPacket } from '../../parser/codecs/VHW';
import { DBTPacket } from '../../parser/codecs/DBT';
import { MTWPacket } from '../../parser/codecs/MTW';

export interface IUnitState {
    MWD: MWDPacket | null;
    MWV: MWVPacket | null;
    RMC: RMCPacket | null;
    VHW: VHWPacket | null;
    DBT: DBTPacket | null,
    MTW: MTWPacket | null;
}

export interface IUnitContext {
    state: IUnitState,
    dispatch: Dispatch<UnitActions>
}

export enum ActionTypes {
    SET_FRAME_DATA = 'SET_FRAME_DATA'
}

export type UnitPacket = MWDPacket | MWVPacket | RMCPacket | VHWPacket | DBTPacket | MTWPacket
