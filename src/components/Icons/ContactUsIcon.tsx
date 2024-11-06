import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const MyContactUsSvg = () => (
  <svg fill="none" height="25" viewBox="0 0 32 25" width="32" xmlns="http://www.w3.org/2000/svg">
    <rect height="22.5" rx="2" stroke="#222222" strokeWidth="1.7" width="30" x="1" y="1" />
    <path
      d="M1 6.625L15.1056 13.6778C15.6686 13.9593 16.3314 13.9593 16.8944 13.6778L31 6.625"
      stroke="#222222"
      strokeWidth="1.7"
    />
  </svg>
);

const MyContactUsIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={MyContactUsSvg} {...props} />
);

export default MyContactUsIcon;
