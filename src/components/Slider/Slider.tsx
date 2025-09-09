import React, { useState } from 'react';
import './Slider.css';

interface BlurSliderProps {
  label: string;
  defaultValue: number;
  min: number;
  max: number;
  name?: string;
}

const BlurSlider: React.FC<BlurSliderProps> = ({ label, defaultValue, min, max, name }) => {
  const safeDefaultValue = defaultValue > max ? max : defaultValue < min ? min : defaultValue;
  const [value, setValue] = useState(safeDefaultValue);

  return (
    <div className="slider-container">
      <div className="slider-header">
        <label className="slider-label">{label}</label>
        <span className="slider-value">{value}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="slider"
        name={name}
      />
    </div>
  );
};

export default BlurSlider;
