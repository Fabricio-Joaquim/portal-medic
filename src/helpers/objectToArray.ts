export const objectToArray = (object: any) => {
    
    if (typeof object !== 'object') {
        return object;  
    }
 
    const array = [];
    for (const key in object) {
        array.push(object[key]);
    }
    return array;
}