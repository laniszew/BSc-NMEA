import { SentenceIdentifiers, SentencesDescriptions } from "../types";

// RMC - NMEA has its own version of essential gps pvt (position, velocity, time) data. It is called RMC, The Recommended Minimum, which will look similar to:

// $GPRMC,123519,A,4807.038,N,01131.000,E,022.4,084.4,230394,003.1,W*6A

// Where:
//      RMC          Recommended Minimum sentence C
//      123519       Fix taken at 12:35:19 UTC
//      A            Status A=active or V=Void.
//      4807.038,N   Latitude 48 deg 07.038' N
//      01131.000,E  Longitude 11 deg 31.000' E
//      022.4        Speed over the ground in knots
//      084.4        Track angle in degrees True
//      230394       Date - 23rd of March 1994
//      003.1,W      Magnetic Variation
//      *6A          The checksum data, always begins with *

export interface RMCPacket {
    sentenceId: SentenceIdentifiers.RMC;
    sentenceName: string;
    talkerId?: string;
    time: string;
    status: "active" | "void";
    latitude: string;
    longitude: string;
    speedKnots: number;
    trackTrue: number;
    date: string;
    variation: number;
    variationPole: "west" | "east";
    faaMode?: string;

}

// RMC - NMEA has its own version of essential gps pvt (position, velocity, time) data. It is called RMC, The Recommended Minimum, which will look similar to:

// $GPRMC,123519,A,4807.038,N,01131.000,E,022.4,084.4,230394,003.1,W*6A

// Where:
//      RMC          Recommended Minimum sentence C
//      123519       Fix taken at 12:35:19 UTC
//      A            Status A=active or V=Void.
//      4807.038,N   Latitude 48 deg 07.038' N
//      01131.000,E  Longitude 11 deg 31.000' E
//      022.4        Speed over the ground in knots
//      084.4        Track angle in degrees True
//      230394       Date - 23rd of March 1994
//      003.1,W      Magnetic Variation
//      *6A          The checksum data, always begins with *


export const decodeRMC = (fields: Array<string | number>): RMCPacket => {
    return {
        sentenceId: SentenceIdentifiers.RMC,
        sentenceName: SentencesDescriptions.RMC,
        time: fields[0] as string,
        status: fields[1] === "A" ? "active" : "void",
        latitude: `${fields[2]} ${fields[3]}`,
        longitude: `${fields[4]} ${fields[5]}`,
        speedKnots: fields[6] as number,
        trackTrue: fields[7] as number,
        date: fields[8] as string,
        variation:  fields[9] as number,
        variationPole: fields[10] === "E" ? "east" : "west",
        faaMode: fields[11] as string || "Undefined"
    };
}