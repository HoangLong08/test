import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ArrowRightLongSvg = () => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 12H3"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M21.7152 11.7966L16.265 7.90356C15.7355 7.52535 15 7.90385 15 8.55455V15.4454C15 16.0961 15.7355 16.4746 16.265 16.0964L21.7152 12.2034C21.8548 12.1037 21.8548 11.8963 21.7152 11.7966Z"
      fill="white"
    />
  </svg>
);

const ArrowRightLongIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowRightLongSvg} {...props} />
);

export default ArrowRightLongIcon;
