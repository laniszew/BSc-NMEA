export const hexWithPrefixToBytes = (hex: string) => {
    hex.slice(2);
    const bytes = [];
    for (let c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
}
