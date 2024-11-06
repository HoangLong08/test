import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ArrowDownSvg = () => (
  <svg fill="none" height="11" viewBox="0 0 19 11" width="19" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.5414 0.489258L18.6462 1.59411L9.50006 10.7403L0.353883 1.59411L1.45874 0.489259L9.50006 8.52997L17.5414 0.489258Z"
      fill="#C7CCD2"
    />
  </svg>
);

const ArrowDownIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowDownSvg} {...props} />
);

export default ArrowDownIcon;
