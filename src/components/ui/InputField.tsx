import { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
}

export const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  className,
}: InputFieldProps) => {
  return (
    <div className={`${className}`}>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};
