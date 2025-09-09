import React, { useState } from 'react';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
  label: string;
  defaultValue: boolean;
  id?: string;
  name?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, defaultValue, id = 'toggle', name }) => {
const [checked, setChecked] = useState(defaultValue);

  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch-label">{label}</label>
      <div className="toggle-switch-wrapper">
        <input 
          type="checkbox"
          defaultChecked={checked}
          className="toggle-switch-input"
          id={id}
          name={name}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label 
          htmlFor={id}
          className={`toggle-switch-slider ${checked ? 'checked' : ''}`}
        >
          <span className={`toggle-switch-knob ${checked ? 'checked' : ''}`}></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
