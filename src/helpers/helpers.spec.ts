import { objectToArrayLabelIsValue } from "./objectToArrayLabelIsValue"
import { formatOptionsSelect } from './formatOptionsSelect';
import { formatErrors, Errors } from "./formatService"
import { expect } from '@jest/globals';
import { getToken } from "./getToken"

describe('formatOptionsSelect', () => {
    it('should return an array of objects', () => {
        const options = [{
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Jane'
        }];

        const result = formatOptionsSelect(options, 'id', 'name');

        expect(result).toEqual([{
            label: 'John',
            value: 1
        },
        {
            label: 'Jane',
            value: 2
        }]);
    });

    it('should return an empty array if options is null', () => {
        const result = formatOptionsSelect([], 'id', 'name');

        expect(result).toEqual([]);
    });

    it('should return a rejected promise with the correct message and status code when given an error response with missing data', () => {
        const errorResponse: Errors = {
            response: {
                status: 404,
                data: {
                    errors: {},
                    message: 'Not Found',
                },
            },
        };

        return formatErrors(errorResponse).catch((error) => {
            expect(error).toEqual({
                msg: 'Not Found',
                code: 404,
            });
        });
    });

    it("testing token storage empity", () => {

        const token = getToken()
        expect(token).toEqual(undefined)
    })

    it('should return an empty array when passed an empty object', () => {
        const object = {};
        const result = objectToArrayLabelIsValue(object);
        expect(result).toEqual([]);
    });

    it('should return an array of keys when passed an object with truthy values', () => {
        const object = { a: true, b: 1, c: 'hello' };
        const result = objectToArrayLabelIsValue(object);
        expect(result).toEqual(['a', 'b', 'c']);
    });
});