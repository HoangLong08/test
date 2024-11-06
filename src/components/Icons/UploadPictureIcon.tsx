import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const UploadPictureSvg = () => (
  <svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2712_5346)">
      <path
        d="M11.8743 8.79225V10.4843H13.5664V11.6123H11.8743V13.3043H10.7463V11.6123H9.0543V10.4843H10.7463V8.79225H11.8743ZM11.8788 2.02417C12.1879 2.02417 12.4383 2.27515 12.4383 2.58423V7.66424H11.3103V3.15218H2.28622V11.0477L7.92629 5.40821L9.61831 7.10023V8.69581L7.92629 7.00379L3.88067 11.0483H7.92629V12.1763H1.7177C1.56926 12.1761 1.42695 12.1171 1.32204 12.0121C1.21713 11.907 1.1582 11.7647 1.1582 11.6162V2.58423C1.15924 2.43611 1.2185 2.29434 1.32318 2.18955C1.42787 2.08475 1.56958 2.02535 1.7177 2.02417H11.8788ZM4.54225 4.2802C4.84141 4.2802 5.12833 4.39904 5.33987 4.61059C5.55142 4.82213 5.67026 5.10904 5.67026 5.40821C5.67026 5.70738 5.55142 5.99429 5.33987 6.20584C5.12833 6.41738 4.84141 6.53623 4.54225 6.53623C4.24308 6.53623 3.95616 6.41738 3.74462 6.20584C3.53308 5.99429 3.41423 5.70738 3.41423 5.40821C3.41423 5.10904 3.53308 4.82213 3.74462 4.61059C3.95616 4.39904 4.24308 4.2802 4.54225 4.2802Z"
        fill="rgba(34, 34, 34, 0.58)"
      />
    </g>
    <defs>
      <clipPath id="clip0_2712_5346">
        <rect
          fill="white"
          height="13.5362"
          transform="translate(0.0302734 0.332031)"
          width="13.5362"
        />
      </clipPath>
    </defs>
  </svg>
);

const UploadPictureIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UploadPictureSvg} {...props} />
);

export default UploadPictureIcon;
