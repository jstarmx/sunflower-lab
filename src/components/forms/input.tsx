import * as React from 'react';

export interface InputProps {
  type: string;
}

export const Input = (props: InputProps) => {
  const [value, setValue] = React.useState('');

  return (
    <input
      css={{
        all: 'unset',
        border: '1px solid #ccc',
        padding: '8px',
        borderRadius: '4px',
      }}
      type={props.type}
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
};
