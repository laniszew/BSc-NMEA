import { SentenceIdentifiers, SentencesDescriptions } from "../types";

// watch reference, there is a need to display both relative and true wind based on reference

// "$WIMWD,216.4,T,216.4,M,35.0,N,18.0,M*55"

export interface MWDPacket {
    sentenceId: string;
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

// +     * $WIMWD,<1>,<2>,<3>,<4>,<5>,<6>,<7>,<8>*hh
// +     *
// +     * NMEA 0183 standard Wind Direction and Speed, with respect to north.
// +     *
// +     * <1> Wind direction, 0.0 to 359.9 degrees True, to the nearest 0.1 degree
// +     * <2> T = True
// +     * <3> Wind direction, 0.0 to 359.9 degrees Magnetic, to the nearest 0.1 
// degree
// +     * <4> M = Magnetic
// +     * <5> Wind speed, knots, to the nearest 0.1 knot.
// +     * <6> N = Knots
// +     * <7> Wind speed, meters/second, to the nearest 0.1 m/s.
// +     * <8> M = Meters/second
export const decodeMWD = (fields: Array<string | number>): MWDPacket => {
    console.log(fields)
    return {
        sentenceId: SentenceIdentifiers.MWD,
        sentenceName: SentencesDescriptions.MWD,
        // windAngle: fields[0] as number,
        windDirTrue: fields[0] as number,
        referenceTrue: fields[1] === "T" ? "true" : "unknown",
        windDirMagnetic: fields[2] as number,
        referenceMagnetic: fields[3] === "M" ? "magnetic" : "unknown",
        windSpeedKnots: fields[4] as number,
        unitsKnots: fields[5] === "N" ? "knots" : "unknown",
        windSpeedMetersPerSecond: fields[6] as number,
        unitsMeterPerSecond: fields[7] === "M" ? "metersPerSec" : "unknown"
        // reference: fields[1] === "R" ? "relative" : "true",
        // speed: fields[2] as number,
        // units: fields[3] === "K" ? "K" : fields[3] === "M" ? "M" : "N",
        // status: fields[4] === "A" ? "valid" : "invalid"

    };
}
