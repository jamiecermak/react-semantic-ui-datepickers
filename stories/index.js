import React from 'react';
import { storiesOf } from '@storybook/react';
import Simple from '../src/inputs/simple';

storiesOf('Examples', module)
  .add('Simple', () => <Simple onDateChange={console.log} />)
  .add('Simple with outside days', () => (
    <Simple showOutsideDays onDateChange={console.log} />
  ))
  .add('Simple with custom format prop', () => (
    <Simple format="DD/MM/YYYY" onDateChange={console.log} />
  ));
