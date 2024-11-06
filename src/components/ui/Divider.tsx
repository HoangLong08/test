'use client';

import { Divider as DividerAntd, DividerProps } from 'antd';
import React from 'react';

interface Props extends DividerProps {}

const Divider = ({ children, ...props }: Props) => <DividerAntd {...props}>{children}</DividerAntd>;

export default Divider;
