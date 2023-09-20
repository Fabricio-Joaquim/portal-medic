import { expect, it, jest, describe } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useUserData } from '../useUserData';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe('useUserData', () => {
    beforeEach(() => {
        useDispatch.mockClear();
        useSelector.mockClear();
    });

    it('should return user data state and changeUserDataAction function', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useUserData());
        expect(result.current.token).toBe(mockSelector);
    });

    it('should call dispatch with changeUserData action', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useUserData());
        result.current.setTokenAction("token");

        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("verify dispatch with changeUserData action and 'token' payload", () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useUserData());
        result.current.setTokenAction("token");

        expect(mockDispatch).toHaveBeenCalledWith({ payload: "token", type: 'userData/setToken' });
    });

});
