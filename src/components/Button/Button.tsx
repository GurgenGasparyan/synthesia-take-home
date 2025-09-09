import { type FC } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

type ButtonProps = {
  onClick?: () => void;
  label: string;
  type?: "button" | "link" | "submit";
  to?: string;
  disabled?: boolean;
}

 const Button: FC<ButtonProps> = ({ onClick, label, to, type = "button", disabled }) => {
  if (type === "link") {
    return <Link to={to || ""} className="button" style={{pointerEvents: disabled ? "none" : "auto"}}>{label}</Link>
  }
  return <button className="button" onClick={onClick}>
    {label}
  </button>
};

export default Button;
