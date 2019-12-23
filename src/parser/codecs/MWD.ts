import { SentenceIdentifiers, SentencesDescriptions } from "../types";

export interface MWDPacket {
    sentenceId: SentenceIdentifiers.MWD;
    sentenceName: string;
    talkerId?: string;
    windDirTrue: number;
    referenceTrue: "true" | "unknown";
    windDirMagnetic: number;
    referenceMagnetic: "magnetic" | "unknown";
    windSpeedKnots: number;
    unitsKnots: "knots" | "unknown";
    windSpeedMetersPerSecond: number;
    unitsMeterPerSecond: "metersPerSec" | "unknown";
}

export const decodeMWD = (fields: Array<string | number>): MWDPacket => {
    return {
        sentenceId: SentenceIdentifiers.MWD,
        sentenceName: SentencesDescriptions.MWD,
        windDirTrue: fields[0] as number,
        referenceTrue: fields[1] === "T" ? "true" : "unknown",
        windDirMagnetic: fields[2] as number,
        referenceMagnetic: fields[3] === "M" ? "magnetic" : "unknown",
        windSpeedKnots: fields[4] as number,
        unitsKnots: fields[5] === "N" ? "knots" : "unknown",
        windSpeedMetersPerSecond: fields[6] as number,
        unitsMeterPerSecond: fields[7] === "M" ? "metersPerSec" : "unknown"
    };
}
