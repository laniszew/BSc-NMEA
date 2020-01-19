import { SentenceIdentifiers, SentencesDescriptions } from '../types';

export interface DBTPacket {
    sentenceId: SentenceIdentifiers.DBT;
    sentenceName?: string;
    talkerId?: string;
    depthFeet: number;
    depthMeters: number;
    depthFathoms: number;
}


export const decodeDBT = (fields: Array<number>): DBTPacket => ({
    sentenceId: SentenceIdentifiers.DBT,
    sentenceName: SentencesDescriptions.DBT,
    depthFeet: fields[0],
    depthMeters: fields[2],
    depthFathoms: fields[4]
});
