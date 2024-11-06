import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ArrowRightSvg = () => (
  <svg fill="none" height="19" viewBox="0 0 11 19" width="11" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.488892 1.45837L1.59375 0.353516L10.7399 9.49969L1.59375 18.6459L0.488893 17.541L8.5296 9.49969L0.488892 1.45837Z"
      fill="#C7CCD2"
    />
  </svg>
);

const ArrowRightIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowRightSvg} {...props} />
);

export default ArrowRightIcon;
