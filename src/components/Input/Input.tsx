import React from 'react';
import './Input.css';

interface InputProps {
  label: string;
  defaultValue?: number | string;
  type: string;
  placeholder: string;
  name?: string;
  min?: number;
  max?: number;
  required?: boolean;
  value?: number | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, defaultValue, type, placeholder, name, min, max, required, value, onChange }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input 
        type={type} 
        defaultValue={defaultValue}
        className="input"
        placeholder={placeholder} 
        value={value}
        name={name}
        min={min}
        max={max}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
