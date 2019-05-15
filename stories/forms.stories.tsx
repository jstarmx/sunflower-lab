import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { Input } from '../src/components/forms/input';
import theme from '../src/themes/default-theme';

const forms = storiesOf('Components', module);

forms.add('Input', () => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        body {
          font-family: menco, sans-serif;
        }
      `}
    />
    <Input type="text" />
  </ThemeProvider>
));
