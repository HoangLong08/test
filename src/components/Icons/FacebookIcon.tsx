import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const FacebookSvg = () => (
  <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_441_2132)">
      <path
        d="M16 0C7.17764 0 0 7.17764 0 16C0 24.8217 7.17764 32 16 32C24.8217 32 32 24.8217 32 16C32 7.17764 24.823 0 16 0ZM19.9791 16.5633H17.376V25.8413H13.5187C13.5187 25.8413 13.5187 20.7718 13.5187 16.5633H11.6852V13.2841H13.5187V11.1631C13.5187 9.64408 14.2406 7.27044 17.4114 7.27044L20.2697 7.2814V10.4645C20.2697 10.4645 18.5328 10.4645 18.1951 10.4645C17.8574 10.4645 17.3773 10.6334 17.3773 11.3578V13.2848H20.3161L19.9791 16.5633Z"
        fill="#979CAB"
      />
    </g>
    <defs>
      <clipPath id="clip0_441_2132">
        <rect fill="white" height="32" width="32" />
      </clipPath>
    </defs>
  </svg>
);

const FacebookIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={FacebookSvg} {...props} />
);

export default FacebookIcon;
