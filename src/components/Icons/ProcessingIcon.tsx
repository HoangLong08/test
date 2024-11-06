import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ProcessingSvg = () => (
  <svg fill="none" height="26" viewBox="0 0 22 26" width="22" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 7.0533C21 2.21306 19.8941 1 15.4471 1H6.55294C2.10588 1 1 2.21306 1 7.0533V20.5771C1 23.7719 2.71765 24.5286 4.8 22.2466L4.81176 22.2346C5.77647 21.1897 7.24706 21.2737 8.08235 22.4147L9.27059 24.0362C10.2235 25.3213 11.7647 25.3213 12.7176 24.0362L13.9059 22.4147C14.7529 21.2617 16.2235 21.1777 17.1882 22.2346C19.2824 24.5166 20.9882 23.7599 20.9882 20.5651V11.8095"
      stroke="#474747"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.50586 11.8096H15.9764"
      stroke="#474747"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.50586 7.00537H15.9764"
      stroke="#474747"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.40599 11.8095H6.41656"
      stroke="#474747"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.40599 7.00531H6.41656"
      stroke="#474747"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProcessingIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ProcessingSvg} {...props} />
);

export default ProcessingIcon;
