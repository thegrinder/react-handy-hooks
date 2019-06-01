import { renderHook, act } from 'react-hooks-testing-library';
import useAccordion from '../useAccordion';

describe('useAccordion', () => {
  let hook;

  beforeEach(() => {
    hook = renderHook(() => useAccordion()).result;
  });

  it('should return the correct object', () => {
    ['getHeaderProps', 'getSectionProps', 'isActiveSection'].forEach((property) => {
      expect(hook.current).toHaveProperty(property);
    });
    expect(hook.current).toMatchSnapshot();
  });

  it('should return linked header and section attributes', () => {
    expect(hook.current.getHeaderProps('id', 0)['aria-controls'])
      .toEqual(hook.current.getSectionProps('id', 0).id);
    expect(hook.current.getHeaderProps('id', 0).id)
      .toEqual(hook.current.getSectionProps('id', 0)['aria-labelledby']);
  });

  it('should correctly open and close sections', () => {
    expect(hook.current.getSectionProps('id', 0)['aria-hidden']).toEqual(true);
    expect(hook.current.getSectionProps('id', 1)['aria-hidden']).toEqual(true);

    act(() => {
      hook.current.getHeaderProps('id', 0).onClick();
    });
    expect(hook.current.getSectionProps('id', 0)['aria-hidden']).toEqual(false);
    expect(hook.current.getSectionProps('id', 1)['aria-hidden']).toEqual(true);

    act(() => {
      hook.current.getHeaderProps('id', 1).onClick();
    });
    expect(hook.current.getSectionProps('id', 0)['aria-hidden']).toEqual(false);
    expect(hook.current.getSectionProps('id', 1)['aria-hidden']).toEqual(false);
  });

  it('should return correct props from getHeaderProps', () => {
    expect(hook.current.getHeaderProps('id', 0)).toMatchSnapshot();
  });

  it('should return correct props from getSectionProps', () => {
    expect(hook.current.getSectionProps('id', 0)).toMatchSnapshot();
  });

  it('should return correct attributes if the header/section is active', () => {
    expect(hook.current.getHeaderProps('id', 0)['aria-disabled']).toEqual(false);
    expect(hook.current.getHeaderProps('id', 0)['aria-expanded']).toEqual(false);
    expect(hook.current.getSectionProps('id', 0)['aria-hidden']).toEqual(true);
  });

  it('should return correct attributes if the header/section is not active', () => {
    act(() => {
      hook.current.getHeaderProps('id', 0).onClick();
    });
    expect(hook.current.getHeaderProps('id', 0)['aria-disabled']).toEqual(true);
    expect(hook.current.getHeaderProps('id', 0)['aria-expanded']).toEqual(true);
    expect(hook.current.getSectionProps('id', 0)['aria-hidden']).toEqual(false);
  });

  it('should properly handle arrow up and key press', () => {
    const focusOne = jest.fn();
    const focusTwo = jest.fn();
    const preventDefault = jest.fn();
    act(() => {
      hook.current.getHeaderProps('one', 0).ref({ focus: focusOne });
    });
    act(() => {
      hook.current.getHeaderProps('two', 1).ref({ focus: focusTwo });
    });
    act(() => {
      hook.current.getHeaderProps('one', 0).onFocus();
    });

    act(() => {
      hook.current.getHeaderProps('one', 0).onKeyDown({ key: 'ArrowDown', preventDefault });
    });
    expect(focusTwo).toHaveBeenCalled();

    act(() => {
      hook.current.getHeaderProps('two', 1).onKeyDown({ key: 'ArrowUp', preventDefault });
    });
    expect(focusOne).toHaveBeenCalled();
  });

  it('should properly apply style to section', () => {
    const clientHeight = 50;
    const height = `${clientHeight}px`;

    act(() => {
      hook.current.getSectionProps('one', 0).ref({ clientHeight });
    });
    act(() => {
      hook.current.getSectionProps('two', 1).ref({ clientHeight });
    });
    expect(hook.current.getSectionProps('one', 0).style.height).toEqual('0px');
    expect(hook.current.getSectionProps('two', 1).style.height).toEqual('0px');

    act(() => {
      hook.current.getHeaderProps('one', 0).onClick();
    });
    expect(hook.current.getSectionProps('one', 0).style.height).toEqual(height);
    expect(hook.current.getSectionProps('two', 1).style.height).toEqual('0px');

    act(() => {
      hook.current.getHeaderProps('two', 1).onClick();
    });
    expect(hook.current.getSectionProps('one', 0).style.height).toEqual(height);
    expect(hook.current.getSectionProps('two', 1).style.height).toEqual(height);

    act(() => {
      hook.current.getHeaderProps('two', 1).onClick();
    });
    expect(hook.current.getSectionProps('one', 0).style.height).toEqual(height);
    expect(hook.current.getSectionProps('two', 1).style.height).toEqual('0px');
  });
});
