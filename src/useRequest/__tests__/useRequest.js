import { renderHook, act } from 'react-hooks-testing-library';
import useRequest from '../useRequest';

const initialRequestState = {
  loading: false,
  initialLoad: true,
  succeeded: false,
  error: null,
  data: {},
};

describe('useRequest', () => {
  it('should return the correct object', () => {
    const { result } = renderHook(() => useRequest());
    ['state', 'actions'].forEach(property => {
      expect(result.current).toHaveProperty(property);
    });
    expect(result.current).toMatchSnapshot();
  });

  it('should handle loading action', () => {
    const { result } = renderHook(() => useRequest());
    act(() => {
      result.current.actions.loading();
    });
    expect(result.current.state).toEqual({
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
      result.current.actions.succeeded(data);
    });
    expect(result.current.state).toEqual({
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
      result.current.actions.failed(error);
    });
    expect(result.current.state).toEqual({
      ...initialRequestState,
      error,
      loading: false,
      initialLoad: false,
    });
  });

  it('should handle fulfilled action', () => {
    const { result } = renderHook(() => useRequest());
    act(() => {
      result.current.actions.fulfilled();
    });
    expect(result.current.state).toEqual({
      ...initialRequestState,
      loading: false,
      initialLoad: false,
    });
  });
});
