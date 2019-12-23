import { SentenceIdentifiers, SentencesDescriptions } from "../types";

export type FixType = "none" | "fix" | "delta" | "pps" | "rtk" | "frtk" | "estimated" | "manual" | "simulation";
const FixTypes: FixType[] = [ "none", "fix", "delta", "pps", "rtk", "frtk", "estimated", "manual", "simulation" ];


export interface GGAPacket {
    sentenceId: SentenceIdentifiers.GGA;
    sentenceName?: string;
    talkerId?: string;
    time: string;
    latitude: string;
    longitude: string;
    fixType: FixType;
    satellitesInView: number;
    horizontalDilution: number;
    altitudeMeters: number;
    geoidalSeperation: number;
    differentialAge?: number;
    differentialRefStn?: string;
}

export const decodeGGA = (fields: Array<string | number>): GGAPacket => {
    return {
        sentenceId: SentenceIdentifiers.GGA,
        sentenceName: SentencesDescriptions.GGA,
        time: fields[0] as string,
        latitude: `${fields[1]} ${fields[2]}`,
        longitude: `${fields[3]} ${fields[4]}`,
        fixType: FixTypes[fields[5]],
        satellitesInView: fields[6] as number,
        horizontalDilution: fields[7] as number,
        altitudeMeters: fields[8] as number,
        geoidalSeperation: fields[10] as number,
        differentialAge: fields[12] as number,
        differentialRefStn: fields[13] as string
    };
}