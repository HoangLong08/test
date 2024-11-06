'use client';

import FlexAntd from 'antd/es/flex';
import { FlexProps } from 'antd/lib';
import React from 'react';

interface Props extends FlexProps {}

const Flex = ({ children, ...props }: Props) => <FlexAntd {...props}>{children}</FlexAntd>;

export default Flex;
