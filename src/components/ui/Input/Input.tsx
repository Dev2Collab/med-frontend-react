import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Accessible Input Component
 */
export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className={`w-full text-right ${className}`}>
      {label && (
        <label htmlFor={id} className="form-label font-bold text-sm mb-1.5 block">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`form-control ${error ? '!border-red-500 focus:!border-red-500' : ''}`}
        {...props}
      />
      {error && <span className="text-red-500 text-xs mt-1 block">{error}</span>}
      {helperText && !error && <span className="text-gray-500 text-xs mt-1 block">{helperText}</span>}
    </div>
  );
}

export default Input;
