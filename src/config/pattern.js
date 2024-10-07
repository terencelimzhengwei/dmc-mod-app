const pattern = {
    11111: 0,
    21111: 1,
    12111: 2,
    11211: 3,
    11121: 4,
    11221: 5,
    12121: 6,
    21121: 7,
    21211: 8,
    11222: 9,
    21212: 11,
    12222: 12,
    21222: 13,
    22222: 14,
};

const patternToValue = p => pattern[p];
const valueToPattern = v => Object.keys(pattern).find(k => pattern[k] === v);

export { pattern, patternToValue, valueToPattern };
