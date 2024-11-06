'use client';

import ButtonAntd, { ButtonProps } from 'antd/es/button';
import React from 'react';

interface Props extends ButtonProps {}

const Button = ({ children, ...props }: Props) => <ButtonAntd {...props}>{children}</ButtonAntd>;

export default Button;
