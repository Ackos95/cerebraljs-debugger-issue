import { Module } from '@cerebral/fluent';
import { TAppTestState, TAppTestSignals } from './types';


const state: TAppTestState = {
  shouldChangeValue: false,
};

const signals: TAppTestSignals = {
};

const AppTestModule = Module({
  state,
  signals,
});


export {
  AppTestModule,
};
