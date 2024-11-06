import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const YoutubeSvg = () => (
  <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_441_2144)">
      <path d="M13.781 18.5811L18.2189 16.0063L13.781 13.4189V18.5811Z" fill="#979CAB" />
      <path
        d="M16 0C12.8355 0 9.74207 0.938384 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87707C0.00693251 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM24.4211 18.8316C24.4213 19.2501 24.3391 19.6645 24.1792 20.0512C24.0192 20.4379 23.7847 20.7893 23.4889 21.0853C23.1931 21.3813 22.8418 21.6161 22.4552 21.7763C22.0686 21.9365 21.6543 22.0189 21.2358 22.0189H10.7642C10.3457 22.0189 9.93137 21.9365 9.54478 21.7763C9.15819 21.6161 8.80696 21.3813 8.51115 21.0853C8.21535 20.7893 7.98076 20.4379 7.82081 20.0512C7.66086 19.6645 7.57868 19.2501 7.57895 18.8316V13.1684C7.57868 12.75 7.66086 12.3355 7.82081 11.9488C7.98076 11.5621 8.21535 11.2107 8.51115 10.9147C8.80696 10.6187 9.15819 10.3839 9.54478 10.2237C9.93137 10.0635 10.3457 9.98105 10.7642 9.98105H21.2358C21.6543 9.98105 22.0686 10.0635 22.4552 10.2237C22.8418 10.3839 23.1931 10.6187 23.4889 10.9147C23.7847 11.2107 24.0192 11.5621 24.1792 11.9488C24.3391 12.3355 24.4213 12.75 24.4211 13.1684V18.8316Z"
        fill="#979CAB"
      />
    </g>
    <defs>
      <clipPath id="clip0_441_2144">
        <rect fill="white" height="32" width="32" />
      </clipPath>
    </defs>
  </svg>
);

const YoutubeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={YoutubeSvg} {...props} />
);

export default YoutubeIcon;
