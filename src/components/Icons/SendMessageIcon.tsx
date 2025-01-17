import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const SendMessageIcon = () => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5779 11.3436L4.74353 2.47487C4.61015 2.40118 4.45749 2.36987 4.30588 2.38511C4.15426 2.40034 4.01089 2.46139 3.89483 2.56014C3.77878 2.65889 3.69556 2.79064 3.65625 2.93786C3.61694 3.08508 3.6234 3.24079 3.67478 3.38424L6.65603 11.7467C6.72171 11.9091 6.72171 12.0906 6.65603 12.253L3.67478 20.6155C3.6234 20.7589 3.61694 20.9146 3.65625 21.0619C3.69556 21.2091 3.77878 21.3408 3.89483 21.4396C4.01089 21.5383 4.15426 21.5994 4.30588 21.6146C4.45749 21.6299 4.61015 21.5986 4.74353 21.5249L20.5779 12.6561C20.6951 12.5913 20.7928 12.4962 20.8609 12.3808C20.9289 12.2654 20.9648 12.1338 20.9648 11.9999C20.9648 11.8659 20.9289 11.7344 20.8609 11.619C20.7928 11.5036 20.6951 11.4085 20.5779 11.3436V11.3436Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M6.75 12H12.75"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const MySendMessageIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={SendMessageIcon} {...props} />
  );
  

export default MySendMessageIcon;
