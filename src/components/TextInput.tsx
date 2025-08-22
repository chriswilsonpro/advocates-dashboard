import { ChangeEventHandler } from "react";

interface ITextInputProps {
  id?: string;
  type: "text" | "email" | "password" | "number";
  label?: string;
  name: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function TextInput({
  id,
  type,
  label,
  name,
  value,
  placeholder,
  defaultValue,
  onChange,
}: ITextInputProps) {
  const labelClasses = [
    "block",
    "mb-2 pl-1",
    "text-sm text-gray-700",
    "font-bold",
  ];

  const inputClasses = [
    "block",
    "border border-gray-300",
    "rounded-lg",
    "text-gray-900 text-sm",
    "focus:ring-blue-500 focus:border-blue-500",
    "w-full",
    "p-2.5",
  ];

  return (
    <div className="flex-grow">
      <label htmlFor={id} className={labelClasses.join(" ")}>
        {label}
      </label>
      <input
        className={inputClasses.join(" ")}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}
