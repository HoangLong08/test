import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const MyDetailsSvg = () => (
  <svg fill="none" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1332_13747)">
      <path
        d="M12.5 12.5C15.6066 12.5 18.125 9.9816 18.125 6.875C18.125 3.7684 15.6066 1.25 12.5 1.25C9.3934 1.25 6.875 3.7684 6.875 6.875C6.875 9.9816 9.3934 12.5 12.5 12.5Z"
        stroke="#000001"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.75 31.25H1.25V27.5C1.2699 25.5945 1.77244 23.7251 2.71068 22.0665C3.64892 20.4078 4.99225 19.0141 6.61519 18.0153C8.23812 17.0166 10.0877 16.4455 11.9912 16.3554C13.8947 16.2653 15.79 16.6591 17.5 17.5"
        stroke="#000001"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M33.7499 21.2499L21.9749 33.0249L16.6499 33.7499L17.3999 28.4249L29.1499 16.6499L33.7499 21.2499Z"
        stroke="#000001"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1332_13747">
        <rect fill="white" height="35" width="35" />
      </clipPath>
    </defs>
  </svg>
);

const MyDetailsIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={MyDetailsSvg} {...props} />
);

export default MyDetailsIcon;
