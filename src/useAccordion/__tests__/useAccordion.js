import { renderHook, cleanup } from 'react-hooks-testing-library';
import useAccordion from '../useAccordion';

describe('useAccordion', () => {
  let hook;

  beforeEach(() => {
    hook = renderHook(() => useAccordion()).result;
  });

  afterEach(cleanup);

  it('should return the correct object', () => {
    ['getHeaderProps', 'getSectionProps', 'isActiveSection'].forEach((property) => {
      expect(hook.current).toHaveProperty(property);
    });
    expect(hook.current).toMatchSnapshot();
  });

  describe('getHeaderProps', () => {
    it('should return correct props', () => {
      expect(hook.current.getHeaderProps('id', 0)).toMatchSnapshot();
    });
  });

  describe('getSectionProps', () => {
    it('should return correct props', () => {
      expect(hook.current.getSectionProps('id', 0)).toMatchSnapshot();
    });
  });
});
