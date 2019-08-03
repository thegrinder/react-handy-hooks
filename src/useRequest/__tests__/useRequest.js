import { renderHook, act } from '@testing-library/react-hooks';
import useRequest from '../useRequest';

const initialRequestState = {
  loading: false,
  initialLoad: true,
  succeeded: false,
  error: null,
  data: {},
};

describe('useRequest', () => {
  it('should return the correct array', () => {
    const { result } = renderHook(() => useRequest());
    expect(result.current).toMatchSnapshot();
  });

  it('should handle loading action', () => {
    const { result } = renderHook(() => useRequest());
    act(() => {
      result.current[1].loading();
    });
    expect(result.current[0]).toEqual({
      ...initialRequestState,
      error: null,
      loading: true,
      succeeded: false,
    });
  });

  it('should handle succeeded action', () => {
    const { result } = renderHook(() => useRequest());
    const data = {};
    act(() => {
      result.current[1].succeeded(data);
    });
    expect(result.current[0]).toEqual({
      ...initialRequestState,
      data,
      loading: false,
      succeeded: true,
      initialLoad: false,
    });
  });

  it('should handle failed action', () => {
    const { result } = renderHook(() => useRequest());
    const error = 'error';
    act(() => {
      result.current[1].failed(error);
    });
    expect(result.current[0]).toEqual({
      ...initialRequestState,
      error,
      loading: false,
      initialLoad: false,
    });
  });

  it('should handle fulfilled action', () => {
    const { result } = renderHook(() => useRequest());
    act(() => {
      result.current[1].fulfilled();
    });
    expect(result.current[0]).toEqual({
      ...initialRequestState,
      loading: false,
      initialLoad: false,
    });
  });
});
