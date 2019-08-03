import { useRef, useState, useCallback } from 'react';
import { mod, isArrowDown, isArrowUp } from '../utils';

const useAccordion = () => {
  const headersRefs = useRef([]).current;

  const getHeaderRef = useCallback(
    index => node => {
      if (node === null) {
        headersRefs.splice(index, 1);
      } else {
        headersRefs[index] = node;
      }
    },
    [headersRefs]
  );

  const sectionsRefs = useRef([]).current;

  const getSectionRef = useCallback(
    index => node => {
      if (node === null) {
        sectionsRefs.splice(index, 1);
      } else {
        sectionsRefs[index] = node;
      }
    },
    [sectionsRefs]
  );

  const [activeSections, updateActiveSections] = useState([]);

  const isActiveSection = useCallback(index => activeSections.includes(index), [
    activeSections,
  ]);

  const getSectionStyle = useCallback(
    index => {
      const sectionRef = sectionsRefs[index];
      const baseStyle = {
        overflow: 'hidden',
        transition: 'height 200ms linear',
      };
      if (!sectionRef || !isActiveSection(index)) {
        return { ...baseStyle, height: '0px' };
      }
      return { ...baseStyle, height: `${sectionRef.clientHeight}px` };
    },
    [isActiveSection, sectionsRefs]
  );

  const toggleAccordionSection = index =>
    updateActiveSections(prevSections =>
      prevSections.includes(index)
        ? prevSections.filter(i => i !== index)
        : prevSections.concat(index)
    );

  const [cursorPosition, updateCursorPosition] = useState(-1);

  const getOnClick = useCallback(
    index => () => {
      updateCursorPosition(index);
      toggleAccordionSection(index);
    },
    []
  );

  const focusOnHeader = useCallback(
    nextCursorPosition => {
      const headerRef = headersRefs[nextCursorPosition];
      if (headerRef) {
        headerRef.focus();
      }
    },
    [headersRefs]
  );

  const getOnFocus = index => () => updateCursorPosition(index);

  const getLinkingId = id => `${id}-tab`;

  const onKeyDown = useCallback(
    e => {
      const { length } = headersRefs;
      if (isArrowUp(e)) {
        e.preventDefault();
        const nextCursorPosition = mod(cursorPosition - 1, length);
        updateCursorPosition(nextCursorPosition);
        focusOnHeader(nextCursorPosition);
      } else if (isArrowDown(e)) {
        e.preventDefault();
        const nextCursorPosition = mod(cursorPosition + 1, length);
        updateCursorPosition(nextCursorPosition);
        focusOnHeader(nextCursorPosition);
      }
    },
    [cursorPosition, focusOnHeader, headersRefs]
  );

  const getHeaderProps = useCallback(
    (id, index) => ({
      'aria-controls': getLinkingId(id),
      'aria-disabled': isActiveSection(index),
      'aria-expanded': isActiveSection(index),
      id,
      key: id,
      onClick: getOnClick(index),
      onFocus: getOnFocus(index),
      onKeyDown,
      ref: getHeaderRef(index),
    }),
    [getHeaderRef, getOnClick, isActiveSection, onKeyDown]
  );

  const getSectionProps = useCallback(
    (id, index) => ({
      'aria-hidden': !isActiveSection(index),
      'aria-labelledby': id,
      id: getLinkingId(id),
      key: getLinkingId(id),
      ref: getSectionRef(index),
      role: 'region',
      style: getSectionStyle(index),
    }),
    [getSectionRef, getSectionStyle, isActiveSection]
  );

  return {
    getHeaderProps,
    getSectionProps,
    isActiveSection,
  };
};

export default useAccordion;
