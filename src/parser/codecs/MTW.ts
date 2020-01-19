import { SentenceIdentifiers, SentencesDescriptions } from '../types';

export interface MTWPacket {
    sentenceId: SentenceIdentifiers.MTW;
    sentenceName?: string;
    talkerId?: string;
    waterTemperature: number;
}


export const decodeMTW = (fields: Array<number>): MTWPacket => ({
    sentenceId: SentenceIdentifiers.MTW,
    sentenceName: SentencesDescriptions.MTW,
    waterTemperature: fields[0]
});
