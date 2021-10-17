import React, { SyntheticEvent, useCallback } from 'react';
import { map } from 'lodash/fp';
import styled from 'styled-components';

interface Tab<T> {
  id: T;
  name: string;
}

interface Props<T> {
  tabs: Tab<T>[];
  activeTab: T;
  onChange: (tab: T) => void;
}

const TabNavButton = styled.button<{ active: boolean }>`
  color: ${({ active }) => (active ? '#40BDDC' : '#fff')};
  font-size: 33px;
  font-weight: bold;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  position: relative;
  &:not(:last-child) {
    margin-right: 100px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;

    background: #17161a;
    display: ${({ active }) => (active ? 'block' : 'none')};
  }
`;

const TabNav = <T extends number>({ tabs, onChange, activeTab }: Props<T>) => {

  const handleChange = useCallback(
    (e: SyntheticEvent<HTMLButtonElement>) => {
      const { tab } = e.currentTarget.dataset;
    if (!tab) return;
    onChange(+tab as T);
    },
    [onChange],
  )
  const renderButton = useCallback(
    ({ name, id }: Tab<T>) => {
      return (
        <TabNavButton
          active={activeTab === id}
          key={id}
          data-tab={id}
          onClick={handleChange}
        >
          {name}
        </TabNavButton>
      );
    },
    [activeTab,handleChange]
  );

  return <div>{map(renderButton, tabs)}</div>;
};

export default TabNav;
