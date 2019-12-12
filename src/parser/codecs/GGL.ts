import { SentenceIdentifiers, SentencesDescriptions } from "../types";

export interface GLLPacket {
    sentenceId: string;
    sentenceName: string;
    talkerId?: string;
    latitude: string;
    longitude: string;
    time: string;
    status: "valid" | "invalid";
    faaMode?: string;
}


export const decodeGLL = (fields: Array<string | number>): GLLPacket => {
    return {
        sentenceId: SentenceIdentifiers.GGA,
        sentenceName: SentencesDescriptions.GGA,
        latitude: `${fields[0]} ${fields[1]}`,
        longitude: `${fields[2]} ${fields[3]}`,
        time: fields[4] as string,
        status: fields[5] === "A" ? "valid" : "invalid",
        faaMode: fields[6] as string
    };
}