import moment from 'moment';
import { Object } from '../utils/types';
import {
    hexWithPrefixToBytes, validateNmeaChecksum, ParseCommonDegrees, parseIntSafe, parseFloatSafe
} from '../utils/helpers';
import { GGAPacket, decodeGGA } from './codecs/GGA';
import { TalkerIdentifiers, SentenceIdentifiers, SentencesFormats } from './types';
import { GLLPacket, decodeGLL } from './codecs/GLL';
import { GSAPacket, decodeGSA } from './codecs/GSA';
import { MWVPacket, decodeMWV } from './codecs/MWV';
import { MWDPacket, decodeMWD } from './codecs/MWD';
import { RMCPacket, decodeRMC } from './codecs/RMC';
import { VHWPacket, decodeVHW } from './codecs/VHW';
import { DBTPacket, decodeDBT } from './codecs/DBT';
import { MTWPacket, decodeMTW } from './codecs/MTW';

const parsers: Object<(x: string) => any> = {
    x: (x) => parseIntSafe(x),
    xx: (x) => parseIntSafe(x),
    xxx: (x) => parseIntSafe(x),
    xxxx: (x) => parseIntSafe(x),
    xxxxx: (x) => parseIntSafe(x),
    xxxxxx: (x) => parseIntSafe(x),
    hh: (x) => parseIntSafe(x, 16),
    hhhh: (x) => parseIntSafe(x, 16),
    hhhhhh: (x) => parseIntSafe(x, 16),
    hhhhhhhh: (x) => parseIntSafe(x, 16),
    'h--h': (x) => hexWithPrefixToBytes(x),
    'x.x': (x) => parseFloatSafe(x),
    'c--c': (x) => x,
    'llll.ll': (x) => ParseCommonDegrees(x),
    'yyyyy.yy': (x) => ParseCommonDegrees(x),
    hhmmss: (x) => moment(x, 'HHmmss').format('HH:mm:ss'),
    'hhmmss.ss': (x) => moment(x, 'HHmmss').format('HH:mm:ss'),
    ddmmyy: (x) => moment(x, 'DD-MM-YY').format('DD/MM/YYYY'),
    'dd/mm/yy': (x) => moment(x, 'DD/MM/YY').format('DD/MM/YYYY'),
    'dddmm.mmm': (x) => ParseCommonDegrees(x)
};


export type Packet = GGAPacket | GLLPacket | GSAPacket | MWVPacket | MWDPacket | RMCPacket | VHWPacket | DBTPacket | MTWPacket

const decoders = {
    [SentenceIdentifiers.GGA]: decodeGGA,
    [SentenceIdentifiers.GLL]: decodeGLL,
    [SentenceIdentifiers.GSA]: decodeGSA,
    [SentenceIdentifiers.MWV]: decodeMWV,
    [SentenceIdentifiers.MWD]: decodeMWD,
    [SentenceIdentifiers.RMC]: decodeRMC,
    [SentenceIdentifiers.VHW]: decodeVHW,
    [SentenceIdentifiers.DBT]: decodeDBT,
    [SentenceIdentifiers.MTW]: decodeMTW
};

export const parseNmeaSentence = (sentence: string): Packet => {
    if (!validateNmeaChecksum(sentence)) {
        throw Error(`Invalid sentence: "${sentence}".`);
    }
    const fields = sentence.split('*')[0].split(',');

    if (fields[0].charAt(1) === 'P') {
        throw Error('Proprietary sentences not suppoeted');
    }

    const talkerId = TalkerIdentifiers[fields[0].substr(1, 2)];
    const sentenceId = SentenceIdentifiers[fields[0].substr(3)];

    const formatter = SentencesFormats[sentenceId];
    const sentenceProperties = formatter.split(',').map((format, index) => {
        if (parsers[format]) {
            return parsers[format](fields[index + 1]);
        }

        return fields[index + 1];
    });
    const packet = decoders[sentenceId](sentenceProperties);

    packet.talkerId = talkerId;

    return packet;
};
