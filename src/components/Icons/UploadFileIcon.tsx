import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const UploadFileSvg = () => (
  <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.46031 3.52515L8.81386 3.17159L8.46031 2.81804L8.10676 3.17159L8.46031 3.52515ZM7.96031 9.87022C7.96031 10.1464 8.18417 10.3702 8.46031 10.3702C8.73645 10.3702 8.96031 10.1464 8.96031 9.87022H7.96031ZM12.3389 6.69664L8.81386 3.17159L8.10676 3.8787L11.6318 7.40374L12.3389 6.69664ZM8.10676 3.17159L4.58171 6.69664L5.28882 7.40374L8.81386 3.8787L8.10676 3.17159ZM7.96031 3.52515L7.96031 9.87022H8.96031V3.52515H7.96031Z"
      fill="white"
    />
    <path
      d="M3.52539 11.28L3.52539 11.985C3.52539 12.7638 4.15668 13.3951 4.93541 13.3951L11.9855 13.3951C12.7642 13.3951 13.3955 12.7638 13.3955 11.985V11.28"
      stroke="white"
    />
  </svg>
);

const UploadFileIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UploadFileSvg} {...props} />
);

export default UploadFileIcon;
