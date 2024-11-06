import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const DeleteSvg = () => (
  <svg fill="none" height="20" viewBox="0 0 19 20" width="19" xmlns="http://www.w3.org/2000/svg">
    <g id="Group 231">
      <path
        d="M6.77051 13.5L6.77051 10.375"
        id="Vector 10"
        stroke="#222222"
        strokeLinecap="round"
      />
      <path
        d="M11.9795 13.5L11.9795 10.375"
        id="Vector 11"
        stroke="#222222"
        strokeLinecap="round"
      />
      <path
        d="M0 5.17188H18.75V5.17188C17.2062 5.17188 16.4344 5.17188 15.8997 5.57526C15.7514 5.68712 15.6194 5.8191 15.5076 5.96737C15.1042 6.50208 15.1042 7.27395 15.1042 8.81771V14.7135C15.1042 16.5992 15.1042 17.542 14.5184 18.1278C13.9326 18.7135 12.9898 18.7135 11.1042 18.7135H7.64583C5.76021 18.7135 4.81741 18.7135 4.23162 18.1278C3.64583 17.542 3.64583 16.5992 3.64583 14.7135V8.81771C3.64583 7.27396 3.64583 6.50208 3.24245 5.96737C3.13058 5.8191 2.99861 5.68712 2.85033 5.57526C2.31563 5.17188 1.54375 5.17188 0 5.17188V5.17188Z"
        id="Rectangle 42"
        stroke="#222222"
        strokeLinecap="round"
      />
      <path
        d="M6.77116 2.04192C6.77116 2.04192 7.29199 1 9.37533 1C11.4587 1 11.9795 2.04167 11.9795 2.04167"
        id="Ellipse 46"
        stroke="#222222"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const DeleteIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={DeleteSvg} {...props} />
);

export default DeleteIcon;
