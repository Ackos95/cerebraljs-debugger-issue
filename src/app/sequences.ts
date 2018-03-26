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

const secondErrorSequence = SequenceWithProps<{
  key: string
}>(s => s
  .when(actions.isKeyInDict)
  .paths({
    true: s1 => s1
      .action(actions.consoleLogTrue),
    false: s1 => s1
      .action(actions.consoleLogFalse),
  })
);


export {
  initialize,
  initializeBroken,
  secondErrorSequence,
};

