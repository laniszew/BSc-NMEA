import { SentenceIdentifiers } from "../../parser/types";
import { Packet } from "../../parser/parser";
import { PositionPacket } from "./positionTypes";

const posArr = [SentenceIdentifiers.GSA, SentenceIdentifiers.GLL, SentenceIdentifiers.GGA]
export const isPositionPacket = (x: Packet): x is PositionPacket => posArr.includes(x.sentenceId);
