import { renderHook, cleanup } from 'react-hooks-testing-library';
import useAccordion from '../useAccordion';

describe('useAccordion', () => {
  afterEach(cleanup);

  it('should return the correct object', () => {
    const { result } = renderHook(() => useAccordion());
    ['getHeaderProps', 'getSectionProps', 'isActiveSection'].forEach((property) => {
      expect(result.current).toHaveProperty(property);
    });
    expect(result.current).toMatchSnapshot();
  });
});
