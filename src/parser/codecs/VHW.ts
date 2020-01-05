import { SentenceIdentifiers, SentencesDescriptions } from '../types';


export interface VHWPacket {
    sentenceId: SentenceIdentifiers.VHW;
    sentenceName?: string;
    talkerId?: string;
    degreesTrue: number;
    degreesMagnetic: number;
    speedKnots: number;
    speedKmph: number;
}


export const decodeVHW = (fields: Array<string | number>): VHWPacket => {
    return {
        sentenceId: SentenceIdentifiers.VHW,
        sentenceName: SentencesDescriptions.VHW,
        degreesTrue: fields[0] as number,
        degreesMagnetic: fields[2] as number,
        speedKnots: fields[4] as number,
        speedKmph: fields[6] as number
    };
}