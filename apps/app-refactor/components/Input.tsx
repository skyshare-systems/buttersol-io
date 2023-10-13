import React from "react";

interface InputProps {
  id: string;
  placeholder: string;
  value: any;
  onChange: any | undefined;
  autoFocus?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const Input = ({
  id,
  placeholder,
  value,
  onChange,
  disabled,
  required = true,
  ...props
}: InputProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target as HTMLInputElement;

    onChange(el.value);
  };

  return (
    <div className="flex flex-col items-start justify-center w-full">
      <input
        id={id}
        name={id}
        type="number"
        className={`${
          disabled && "cursor-not-allowed"
        } block w-full font-[manrope] heading5 text-white-100 bg-dark-100 py-2 outline-none bg-opacity-0`}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        disabled={disabled}
        {...props}
        required={required}
      />
    </div>
  );
};

export default Input;
