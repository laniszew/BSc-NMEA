import { SentenceIdentifiers } from '../../parser/types';
import { Packet } from '../../parser/parser';
import { UnitPacket } from './unitTypes';

const posArr = [SentenceIdentifiers.MWD, SentenceIdentifiers.MWV, SentenceIdentifiers.RMC, SentenceIdentifiers.VHW, SentenceIdentifiers.DBT, SentenceIdentifiers.MTW];
export const isUnitPacket = (x: Packet): x is UnitPacket => posArr.includes(x.sentenceId);
