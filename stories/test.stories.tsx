import * as React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Components', module);

stories.add('Headings', () => <h1>Heading 1</h1>, {
  info: { inline: true },
});
