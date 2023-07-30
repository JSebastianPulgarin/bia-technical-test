import type { ButtonProps as AntButtonProps } from 'antd';
import { Button as AntButton } from 'antd';

export interface ButtonProps extends AntButtonProps {}

export const Button = AntButton;
