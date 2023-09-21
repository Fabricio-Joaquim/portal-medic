//@ts-nocheck
import { expect, it, jest, describe } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useLoading } from '../useLoading';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe('useLoading', () => {
    beforeEach(() => {
        useDispatch.mockClear();
        useSelector.mockClear();
    });

    it('should return loading state and setLoadingAction function', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useLoading());
        console.log(result.current)
        expect(result.current.loading).toBe(mockSelector);
    });

    it('should call dispatch with setLoading action', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useLoading());
        result.current.setLoadingAction(true);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
    })

    it('should call dispatch with setLoading action and true', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useLoading());
        result.current.setLoadingAction(true);
        console.log(mockDispatch.mock.calls[0][0])
        expect(mockDispatch).toHaveBeenCalledWith({ payload: true, type: 'loading/setLoading' });
    });
});
