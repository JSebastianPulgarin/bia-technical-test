import type {
  InputProps as AntInputProps,
  InputRef as AntInputRef,
} from 'antd';
import { Input as AntInput } from 'antd';

export interface InputProps extends AntInputProps {}
export interface InputRef extends AntInputRef {}

export const Input = AntInput;
