import { Module } from '@cerebral/fluent';
import { TAppState, TAppSignals } from './types';

import * as sequences from './sequences';
import { AppTestModule } from './modules/test';


const state: TAppState = {
  title: '',
  plain: {
    shouldChangeValue: false,
  }
};

const signals: TAppSignals = {
  ...sequences,
};

const AppModule = Module({
  state,
  signals,
  modules: {
    test: AppTestModule,
  }
});


export {
  AppModule,
};
