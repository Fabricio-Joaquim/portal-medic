//@ts-nocheck
import { it, jest, describe, expect } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../useAuth';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe('useAuth', () => {
    beforeEach(() => {
        useDispatch.mockClear();
        useSelector.mockClear();
    });

    it('should return auth state and changeAuthAction and cleanAuthAction functions', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useAuth());
        expect(result.current.isAuth).toBe(mockSelector);
    });

    it('should call dispatch with changeAuth action', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useAuth());
        result.current.changeAuthAction(true);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it('should call dispatch with changeAuth action and true', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useAuth());
        result.current.changeAuthAction(true);

        expect(mockDispatch).toHaveBeenCalledWith({ payload: true, type: 'userData/changeAuth' });
    });

    it('should call dispatch with cleanAuth action', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useAuth());
        result.current.cleanAuthAction();

        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it('should call dispatch with cleanAuth action and true', () => {
        const mockDispatch = jest.fn();
        const mockSelector = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockSelector);

        const { result } = renderHook(() => useAuth());
        result.current.cleanAuthAction();

        expect(mockDispatch).toHaveBeenCalledWith({ type: 'userData/cleanAuth' });
    });

});
