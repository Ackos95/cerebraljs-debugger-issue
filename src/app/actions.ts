import { Context } from 'fluent';
import { set } from 'lodash';


const initialize = ({ state }: Context): void => {
  state.title = 'test';
};

const initializeBroken = ({ state, props }: Context<{
  key: string
}>): void => {
  console.log(state, props, state[props.key]);
  set(state, props.key, true);
  console.log(state);
};

const initializeBroken2 = ({ state, props }: Context<{
  key: string,
  obj: {
    test: boolean,
    value: { test1: boolean },
  },
}>): void => {
  console.log(state, props, state[props.key]);
  set(state, props.key, props.obj);
  console.log(state);
};

const isKeyInDict = ({ state, props }: Context<{
  key: string,
}>): boolean =>
  !!state.secondError.get(props.key);

const consoleLogTrue = (): void => {
  console.log('true');
};

const consoleLogFalse = (): void => {
  console.log('false');
};


export {
  initialize,
  initializeBroken,
  initializeBroken2,
  isKeyInDict,
  consoleLogTrue,
  consoleLogFalse,
};
