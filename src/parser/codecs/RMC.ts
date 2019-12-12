import { SentenceIdentifiers, SentencesDescriptions } from "../types";

export interface RMCPacket {
    sentenceId: string;
    sentenceName: string;
    talkerId?: string;
    datetime: Date;
    status: "valid" | "warning";
    latitude: number;
    longitude: number;
    speedKnots: number;
    trackTrue: number;
    variation: number;
    variationPole: "" | "E" | "W";
    faaMode?: string;

}

export const decodeRMC = (fields: Array<string | number>): RMCPacket => {
    console.log(fields)
    return {

        // sentenceId: SentenceIdentifiers.RMC,
        // sentenceName: SentencesDescriptions.RMC,
        // datetime: 
        // latitude: `${fields[0]} ${fields[1]}`,
        // longitude: `${fields[2]} ${fields[3]}`,
        // // time: fields[4] as string,
        // // status: fields[5] === "A" ? "valid" : "invalid",
        // // faaMode: fields[6] as string
    };
}