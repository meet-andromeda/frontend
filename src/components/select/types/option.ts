interface Option {
  value: string | boolean;
  label: string;
  component?: JSX.Element;
  selectedComponent?: JSX.Element;
}

export default Option;
