import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const FacebookColorSvg = () => (
  <svg fill="none" height="26" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1190_1527)">
      <path
        d="M25.6567 12.6006C25.6567 5.69707 20.0603 0.100586 13.1567 0.100586C6.25322 0.100586 0.656738 5.69697 0.656738 12.6006C0.656738 18.8397 5.22783 24.011 11.2036 24.9487V16.2139H8.02979V12.6006H11.2036V9.84668C11.2036 6.71387 13.0698 4.9834 15.925 4.9834C17.2927 4.9834 18.7231 5.22754 18.7231 5.22754V8.30371H17.147C15.594 8.30371 15.1099 9.26729 15.1099 10.2559V12.6006H18.5767L18.0225 16.2139H15.1099V24.9487C21.0856 24.011 25.6567 18.8397 25.6567 12.6006Z"
        fill="#1877F2"
      />
      <path
        d="M18.0225 16.2139L18.5767 12.6006H15.1099V10.2559C15.1099 9.26719 15.5941 8.30371 17.147 8.30371H18.7231V5.22754C18.7231 5.22754 17.2927 4.9834 15.925 4.9834C13.0698 4.9834 11.2036 6.71387 11.2036 9.84668V12.6006H8.02979V16.2139H11.2036V24.9487C11.8497 25.05 12.5027 25.1008 13.1567 25.1006C13.8107 25.1008 14.4638 25.05 15.1099 24.9487V16.2139H18.0225Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1190_1527">
        <rect fill="white" height="25" transform="translate(0.656738 0.100586)" width="25" />
      </clipPath>
    </defs>
  </svg>
);

const FacebookColorIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={FacebookColorSvg} {...props} />
);

export default FacebookColorIcon;
