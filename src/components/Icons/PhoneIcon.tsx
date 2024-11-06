import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const PhoneIcon = () => (
  <svg fill="none" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.793 5.46875C23.6482 5.96664 25.3398 6.94374 26.698 8.30199C28.0563 9.66023 29.0334 11.3518 29.5312 13.207"
      stroke="#4B4B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M20.6582 9.69336C21.774 9.98969 22.7916 10.5757 23.6079 11.3921C24.4243 12.2084 25.0103 13.226 25.3066 14.3418"
      stroke="#4B4B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M12.6465 17.0625C13.772 19.3868 15.6514 21.2613 17.9785 22.3809C18.1502 22.4622 18.34 22.4973 18.5294 22.483C18.7188 22.4686 18.9012 22.4051 19.0586 22.2988L22.4766 20.0156C22.6276 19.9132 22.8021 19.8507 22.9838 19.834C23.1655 19.8173 23.3484 19.8468 23.5156 19.9199L29.9141 22.668C30.1327 22.759 30.3154 22.9194 30.434 23.1244C30.5526 23.3295 30.6005 23.5678 30.5703 23.8028C30.3675 25.3856 29.5949 26.8403 28.3971 27.8947C27.1993 28.9491 25.6583 29.5309 24.0625 29.5313C19.1311 29.5313 14.4017 27.5723 10.9147 24.0853C7.42773 20.5983 5.46875 15.8689 5.46875 10.9375C5.46911 9.34173 6.05092 7.80075 7.10531 6.60292C8.1597 5.4051 9.61442 4.6325 11.1973 4.4297C11.4322 4.39952 11.6705 4.44741 11.8756 4.56599C12.0806 4.68457 12.241 4.86727 12.332 5.08595L15.0801 11.4981C15.1515 11.6626 15.1814 11.8422 15.1671 12.021C15.1528 12.1998 15.0948 12.3724 14.998 12.5235L12.7148 15.9961C12.6132 16.1532 12.5535 16.3337 12.5416 16.5204C12.5296 16.7071 12.5657 16.8938 12.6465 17.0625V17.0625Z"
      stroke="#4B4B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const MyPhoneIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PhoneIcon} {...props} />
);

export default MyPhoneIcon;
