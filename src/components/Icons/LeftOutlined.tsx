import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const LeftOutlinedSvg = () => (
  <svg fill="none" height="24" viewBox="0 0 14 24" width="14" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.1213 22.0001L11.7071 23.4143L1.70963e-05 11.7072L11.7071 9.16764e-05L13.1213 1.41431L2.82923 11.7072L13.1213 22.0001Z"
      fill="#61677A"
    />
  </svg>
);

const LeftOutlinedIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LeftOutlinedSvg} {...props} />
);

export default LeftOutlinedIcon;
