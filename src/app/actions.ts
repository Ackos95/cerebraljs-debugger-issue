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


export {
  initialize,
  initializeBroken,
};
