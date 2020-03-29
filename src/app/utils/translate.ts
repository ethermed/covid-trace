
export const IsValidNumber = (value: any): boolean => {
    return !Array.isArray(value) && !isNaN(parseInt(value, 10));
};

export function GetTranslateStr(x, y) {
    return `translate(${concatPixelSuffix(x)}, ${concatPixelSuffix(y)})`;
}

export function concatPixelSuffix(val: string | number): string {
    const isString = typeof val === 'string';
    const notValid = !isString && !IsValidNumber(val);

    if (notValid) {
        return null;
    }

    const clone = val + '';
    if (clone.toLowerCase().indexOf('px') > -1) {
        return clone;
    } else {
        return clone + 'px';
    }
}