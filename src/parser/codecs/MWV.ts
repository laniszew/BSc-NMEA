import { SentenceIdentifiers, SentencesDescriptions } from "../types";

// watch reference, there is a need to display both relative and true wind based on reference
export interface MWVPacket {
    sentenceId: string;
    sentenceName: string;
    talkerId?: string;
    windAngle: number;
    reference: "relative" | "true";
    speed: number;
    units: "K" | "M" | "N";
    status: "valid" | "invalid";
}


export const decodeMWV = (fields: Array<string | number>): MWVPacket => {
    return {
        sentenceId: SentenceIdentifiers.MWV,
        sentenceName: SentencesDescriptions.MWV,
        windAngle: fields[0] as number,
        reference: fields[1] === "R" ? "relative" : "true",
        speed: fields[2] as number,
        units: fields[3] === "K" ? "K" : fields[3] === "M" ? "M" : "N",
        status: fields[4] === "A" ? "valid" : "invalid"
    };
}
