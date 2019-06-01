import { renderHook } from 'react-hooks-testing-library';
import useRequest from '../useRequest';

describe('useRequest', () => {
  it('should return the correct object', () => {
    const { result } = renderHook(() => useRequest());
    ['state', 'actions'].forEach((property) => {
      expect(result.current).toHaveProperty(property);
    });
    expect(result.current).toMatchSnapshot();
  });
});
