import { MouseEventHandler } from "react";

interface IButtonProps {
  name?: string;
  children?: any;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ name, onClick, children }: IButtonProps) {
  const classes = [
    "lg:text-sm text-xs",
    "lg:self-end",
    "text-white font-medium text-sm",
    "bg-blue-700 hover:bg-blue-800",
    "px-5 py-3",
    "rounded-lg",
    "focus:ring-4 focus:ring-blue-300",
  ];

  return (
    <button className={classes.join(" ")} name={name} onClick={onClick}>
      {children}
    </button>
  );
}
