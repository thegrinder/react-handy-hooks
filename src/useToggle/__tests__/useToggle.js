import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from '../useToggle';

describe('useToggle', () => {
  it('should return the correct array', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current).toMatchSnapshot();
  });

  it('should initialize with a given argument', () => {
    const initial = true;
    const { result } = renderHook(() => useToggle(initial));
    expect(result.current[0]).toEqual(initial);
  });

  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toEqual(false);
  });

  describe('actions', () => {
    it('should handle toggling', () => {
      const { result } = renderHook(() => useToggle());
      expect(result.current[0]).toEqual(false);
      act(() => {
        result.current[1].toggle();
      });
      expect(result.current[0]).toEqual(true);
      act(() => {
        result.current[1].toggle();
      });
      expect(result.current[0]).toEqual(false);
    });

    it('should handle toggling on', () => {
      const { result } = renderHook(() => useToggle());
      expect(result.current[0]).toEqual(false);
      act(() => {
        result.current[1].toggleOn();
      });
      expect(result.current[0]).toEqual(true);
    });

    it('should handle toggling off', () => {
      const { result } = renderHook(() => useToggle(true));
      expect(result.current[0]).toEqual(true);
      act(() => {
        result.current[1].toggleOff();
      });
      expect(result.current[0]).toEqual(false);
    });
  });
});
