import * as React from 'react';

import { Container } from '@cerebral/fluent';
import { controller } from '../../controller';

import { Home } from './components/Home';

const App = (): JSX.Element => (
  <Container controller={controller}>
    <Home />
  </Container>
);

export { App };
