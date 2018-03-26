import { Sequence, SequenceWithProps } from 'fluent';
import * as actions from './actions';


const initialize = Sequence(s => s
  .action(actions.initialize)
);

const initializeBroken = SequenceWithProps<{
  key: string
}>(s => s
  .action(actions.initializeBroken)
);


export {
  initialize,
  initializeBroken,
};
