import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src/components/forms/input';

const forms = storiesOf('Components', module);

interface Event {
  target: Target;
}

interface Target {
  value: any;
}

forms.add('Input', () => <Input type="text" />);
