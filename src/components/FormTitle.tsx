interface IFormTitleProps {
  title: string;
}

export function FormTitle({ title }: IFormTitleProps) {
  const classes = [
    'block',
    'w-fill',
    'text-xl text-gray-700',
    'font-semibold',
    'mb-3'
  ];

  return <h2 className={classes.join(" ")}>{title}</h2>;
}
