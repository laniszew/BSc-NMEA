export const hexWithPrefixToBytes = (hex: string) => {
    hex.slice(2);
    const bytes = [];
    for (let c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
}

export const ParseCommonDegrees = (token: string): Number => {
    const { floor } = Math;
    const temp = parseFloat(token);
    const degree = floor(floor(temp) / 100);
    const minutes = floor(temp) - degree * 100;
    const seconds = (temp - floor(temp)) * 60;
    return degree + minutes / 60 + seconds / 3600;
};

export const computeNmeaChecksum = (sentenceWithoutChecksum: string): number => {
    // init to first character value after the $
    let checksum = sentenceWithoutChecksum.charCodeAt(1);

    for (let i = 2; i < sentenceWithoutChecksum.length; i += 1) {
        checksum = checksum ^ sentenceWithoutChecksum.charCodeAt(i);
    }
    checksum = checksum & 0xff;
    return checksum;
}

export const validateNmeaChecksum = (nmeaSentence: string): boolean => {
    const [sentenceWithoutChecksum, checksumString] = nmeaSentence.split("*");
    const correctChecksum = computeNmeaChecksum(sentenceWithoutChecksum);
    const actualChecksum = parseInt(checksumString, 16);
    return correctChecksum === actualChecksum;
}


export const parseFloatSafe = (str: string): number => str === "" ? 0.0 : parseFloat(str);

export const parseIntSafe = (str: string, radix: number=10): number => str === "" ? 0 : parseInt(str);
