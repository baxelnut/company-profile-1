import { useState } from "react";
// Style
import "./Input.css";
// Components
import Icon from "./Icon";
// Data
import { SVG_PATHS } from "../../data/utilsData";

export default function Input({
  className = "",
  type = "text",
  label = "",
  placeholder = "Input field...",
  value,
  accept = "",
  onChange,
  name,
  obscurial,
  required = false,
  fullWidth = false,
  autoFocus = false,
  disabled = false,
  isTextarea = false,
  resizable = false,
  min,
  max,
  step = 1,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password" && obscurial;

  return (
    <div className={`input-wrapper ${fullWidth ? "full-width" : ""}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-container">
        {isTextarea ? (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            autoFocus={autoFocus}
            disabled={disabled}
            className={`custom-input ${resizable ? "resizable" : ""}`}
          />
        ) : type === "range" ? (
          <input
            id={name}
            name={name}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) =>
              onChange({
                target: { value: e.target.value, name: e.target.name },
              })
            }
            required={required}
            autoFocus={autoFocus}
            disabled={disabled}
            className={`custom-input range-input ${className}`}
          />
        ) : (
          <>
            <input
              id={name}
              name={name}
              type={isPassword && showPassword ? "text" : type}
              placeholder={placeholder}
              value={value}
              onChange={(e) =>
                onChange({
                  target: { value: e.target.value, name: e.target.name },
                })
              }
              required={required}
              autoFocus={autoFocus}
              disabled={disabled}
              className={`custom-input ${className}`}
              accept={accept}
            />
            {isPassword && (
              <button
                type="button"
                className="eye-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
              >
                <Icon
                  path={showPassword ? SVG_PATHS.eyeSlash : SVG_PATHS.eye}
                />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
