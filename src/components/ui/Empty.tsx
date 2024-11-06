'use client';

import EmptyAntd, { EmptyProps } from 'antd/es/empty';
import React from 'react';

interface Props extends EmptyProps {}

const Empty = ({ children, ...props }: Props) => <EmptyAntd {...props}>{children}</EmptyAntd>;

export default Empty;
