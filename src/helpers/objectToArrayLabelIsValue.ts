
export const objectToArrayLabelIsValue = (object: any) => {

    if (typeof object !== 'object') {
        return object;
    }

    const array = [];
    for (const key in object) {
        if (object[key])
            array.push(key);
    }
    return array;
}