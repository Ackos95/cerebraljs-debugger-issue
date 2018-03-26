import { Module } from '@cerebral/fluent';
import { TAppState, TAppSignals } from './types';

import * as sequences from './sequences';


const state: TAppState = {
  title: '',
  test: {
    shouldChangeValue: false,
  }
};

const signals: TAppSignals = {
  ...sequences,
};

const AppModule = Module({
  state,
  signals,
});


export {
  AppModule,
};
