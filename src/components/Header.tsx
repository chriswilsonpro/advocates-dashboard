interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps) {
  const classes = [
    'text-4xl',
    'font-semibold',
    'mb-6'
  ];

  return <h1 className={classes.join(" ")}>{title}</h1>;
}
