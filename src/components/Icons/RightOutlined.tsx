import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const RightOutlinedSvg = () => (
  <svg fill="none" height="24" viewBox="0 0 14 24" width="14" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 1.41421L1.41421 0L13.1213 11.7071L1.41421 23.4142L0 22L10.2921 11.7071L0 1.41421Z"
      fill="#61677A"
    />
  </svg>
);

const RightOutlinedIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={RightOutlinedSvg} {...props} />
);

export default RightOutlinedIcon;
