import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ArrowLeftLongSvg = () => (
  <svg fill="none" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.75 15H26.25"
      stroke="#4D4D4D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M2.78481 14.7966L9.98501 9.65356C10.5145 9.27535 11.25 9.65385 11.25 10.3046V19.6954C11.25 20.3461 10.5145 20.7246 9.98501 20.3464L2.78481 15.2034C2.64522 15.1037 2.64522 14.8963 2.78481 14.7966Z"
      fill="#4D4D4D"
    />
  </svg>
);

const ArrowLeftLongIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowLeftLongSvg} {...props} />
);

export default ArrowLeftLongIcon;
