'use client';

import CollapseAntd, { CollapseProps } from 'antd/es/collapse';
import React from 'react';

interface Props extends CollapseProps {}

const Collapse = ({ children, ...props }: Props) => (
  <CollapseAntd {...props}>{children}</CollapseAntd>
);

export default Collapse;
