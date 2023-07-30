import type { SelectProps as AntSelectProps } from 'antd';
import { Select as AntSelect } from 'antd';

export interface InputProps extends AntSelectProps {}

export const Select = AntSelect;
