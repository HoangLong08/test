import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const UserSvg = () => (
  <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1014_1089)">
      <path
        d="M14 14C15.3845 14 16.7378 13.5895 17.889 12.8203C19.0401 12.0511 19.9373 10.9579 20.4672 9.67879C20.997 8.3997 21.1356 6.99224 20.8655 5.63437C20.5954 4.2765 19.9287 3.02922 18.9497 2.05026C17.9708 1.07129 16.7235 0.404603 15.3656 0.134506C14.0078 -0.13559 12.6003 0.003033 11.3212 0.532846C10.0421 1.06266 8.94888 1.95987 8.17971 3.11101C7.41054 4.26216 7 5.61553 7 7C7.00185 8.85595 7.73995 10.6354 9.0523 11.9477C10.3647 13.2601 12.1441 13.9982 14 14ZM14 2.33334C14.923 2.33334 15.8252 2.60703 16.5927 3.11981C17.3601 3.63259 17.9582 4.36143 18.3114 5.21415C18.6646 6.06687 18.7571 7.00518 18.577 7.91043C18.3969 8.81567 17.9525 9.64719 17.2998 10.2998C16.6472 10.9525 15.8157 11.3969 14.9104 11.577C14.0052 11.7571 13.0669 11.6647 12.2141 11.3114C11.3614 10.9582 10.6326 10.3601 10.1198 9.59266C9.60703 8.82524 9.33333 7.92298 9.33333 7C9.33333 5.76233 9.825 4.57534 10.7002 3.70017C11.5753 2.825 12.7623 2.33334 14 2.33334Z"
        fill="#61677A"
      />
      <path
        d="M14 16.3333C11.2162 16.3363 8.54725 17.4436 6.57879 19.412C4.61033 21.3805 3.50309 24.0494 3.5 26.8333C3.5 27.1427 3.62292 27.4394 3.84171 27.6582C4.0605 27.877 4.35725 27.9999 4.66667 27.9999C4.97609 27.9999 5.27283 27.877 5.49162 27.6582C5.71042 27.4394 5.83333 27.1427 5.83333 26.8333C5.83333 24.6673 6.69375 22.5901 8.22529 21.0585C9.75684 19.527 11.8341 18.6666 14 18.6666C16.1659 18.6666 18.2432 19.527 19.7747 21.0585C21.3063 22.5901 22.1667 24.6673 22.1667 26.8333C22.1667 27.1427 22.2896 27.4394 22.5084 27.6582C22.7272 27.877 23.0239 27.9999 23.3333 27.9999C23.6428 27.9999 23.9395 27.877 24.1583 27.6582C24.3771 27.4394 24.5 27.1427 24.5 26.8333C24.4969 24.0494 23.3897 21.3805 21.4212 19.412C19.4527 17.4436 16.7838 16.3363 14 16.3333Z"
        fill="#61677A"
      />
    </g>
    <defs>
      <clipPath id="clip0_1014_1089">
        <rect fill="white" height="28" width="28" />
      </clipPath>
    </defs>
  </svg>
);

const UserIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UserSvg} {...props} />
);

export default UserIcon;
