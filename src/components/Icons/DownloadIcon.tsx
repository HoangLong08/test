import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const DownloadSvg = () => (
  <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.97817 10.5098L8.62461 10.8633L8.97817 11.2169L9.33172 10.8633L8.97817 10.5098ZM9.47817 4.16469C9.47817 3.88855 9.25431 3.66469 8.97817 3.66469C8.70203 3.66469 8.47817 3.88855 8.47817 4.16469L9.47817 4.16469ZM5.09957 7.33828L8.62461 10.8633L9.33172 10.1562L5.80668 6.63117L5.09957 7.33828ZM9.33172 10.8633L12.8568 7.33828L12.1497 6.63117L8.62461 10.1562L9.33172 10.8633ZM9.47817 10.5098L9.47817 4.16469L8.47817 4.16469L8.47817 10.5098L9.47817 10.5098Z"
      fill="#474747"
    />
    <path
      d="M4.04297 11.9197L4.04297 12.6247C4.04297 13.4034 4.67425 14.0347 5.45299 14.0347L12.5031 14.0347C13.2818 14.0347 13.9131 13.4034 13.9131 12.6247V11.9197"
      stroke="#474747"
    />
  </svg>
);

const DownloadIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={DownloadSvg} {...props} />
);

export default DownloadIcon;
