import { SentenceIdentifiers, SentencesDescriptions } from '../types';

export type ThreeDFixType = 'unknown' | 'none' | '2D' | '3D';
const ThreeDFixTypes: ThreeDFixType[] = ['unknown', 'none', '2D', '3D'];

export interface GSAPacket extends BasePacket {
    sentenceId: SentenceIdentifiers.GSA;
    sentenceName: string;
    talkerId?: string;
    selectionMode: 'automatic' | 'manual';
    fixMode: ThreeDFixType;
    satellites: string[];
    PDOP: number;
    HDOP: number;
    VDOP: number;
}


export const decodeGSA = (fields: Array<string | number>): GSAPacket => {
    const sats: string[] = [];

    for (let i = 2; i < 14; i++) {
        if (fields[i]) {
            sats.push(`${+fields[i]} `);
        }
    }

    return {
        sentenceId: SentenceIdentifiers.GSA,
        sentenceName: SentencesDescriptions.GSA,
        selectionMode: fields[0] === 'A' ? 'automatic' : 'manual',
        fixMode: ThreeDFixTypes[fields[1]],
        satellites: sats,
        PDOP: fields[14] as number,
        HDOP: fields[15] as number,
        VDOP: fields[16] as number
    };
};
