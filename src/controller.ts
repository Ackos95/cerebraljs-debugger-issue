import { Controller } from '@cerebral/fluent';
import * as app from './app';

import Devtools from 'cerebral/devtools';


const controller = Controller(app.AppModule, {
  devtools: process.env.NODE_ENV === 'development' ?
    Devtools({
      // in standalone cerebral debugger you should
      // enter 'emvnext' for a name and 8585 for a port
      // make sure nothing else is running on the port
      // Some environments might require 127.0.0.1 or computer IP address
      host: 'localhost:8588',
      reconnect: false,
      // warnStateProps: false,
    }) : undefined,
});


export { controller };
