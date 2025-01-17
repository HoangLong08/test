import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ExpireSvg = () => (
  <svg enableBackground="new 0 0 48 48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="17" fill="#00acc1" r="14" />
    <circle cx="17" cy="17" fill="#eee" r="11" />
    <path d="m16 8h2v9h-2z" />
    <path d="m18.2 16h2.4v6.8h-2.4z" transform="matrix(-.707 .707 -.707 -.707 46.834 19.399)" />
    <circle cx="17" cy="17" r="2" />
    <circle cx="17" cy="17" fill="#00acc1" r="1" />
    <path
      d="m11.9 42 14.4-24.1c.8-1.3 2.7-1.3 3.4 0l14.4 24.1c.8 1.3-.2 3-1.7 3h-28.8c-1.5 0-2.5-1.7-1.7-3z"
      fill="#ffc107"
    />
    <path
      d="m26.4 39.9c0-.2 0-.4.1-.6s.2-.3.3-.5.3-.2.5-.3.4-.1.6-.1.5 0 .7.1.4.2.5.3.2.3.3.5.1.4.1.6 0 .4-.1.6-.2.3-.3.5-.3.2-.5.3-.4.1-.7.1-.5 0-.6-.1-.4-.2-.5-.3-.2-.3-.3-.5-.1-.4-.1-.6zm2.8-3.1h-2.3l-.4-9.8h3z"
      fill="#263238"
    />
  </svg>
);

const ExpireIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ExpireSvg} {...props} />
);

export default ExpireIcon;
