import * as React from 'react';

export interface InputProps {
  type: string;
}

export const Input = (props: InputProps) => {
  const [value, setValue] = React.useState('');

  return (
    <input
      css={theme => ({
        all: 'unset',
        border: `1px solid ${theme.color.primary.inverse}`,
        padding: theme.spacing.units.single,
        borderRadius: theme.spacing.units.half,
        color: theme.color.primary.inverse,
      })}
      type={props.type}
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
};
