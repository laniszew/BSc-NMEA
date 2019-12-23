import { SentenceIdentifiers } from "../../parser/types";
import { Packet } from "../../parser/parser";
import { UnitPacket } from "./unitTypes";

const posArr = [SentenceIdentifiers.MWD, SentenceIdentifiers.MWV, SentenceIdentifiers.RMC]
export const isUnitPacket = (x: Packet): x is UnitPacket => posArr.includes(x.sentenceId);
