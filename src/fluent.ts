import {
  ConnectFactory,
  IContext,
  IBranchContext,
  SequenceFactory,
  SequenceWithPropsFactory
} from '@cerebral/fluent';

// modules
import * as app from './app/types';
import * as appTest from './app/modules/test/types';


type TState = app.TAppState & {
  test: appTest.TAppTestState;
};

type TSignals = app.TAppSignals & {
  test: appTest.TAppTestSignals;
};


interface Context<Props = {}> extends IContext<Props> {
  state: TState;
  signals: TSignals;
}

interface BranchContext<Props = {}, Paths = {}> extends IBranchContext<Paths, Props> {
  state: TState;
  signals: TSignals;
}

const connect = ConnectFactory<TState, TSignals>();

const Sequence = SequenceFactory<Context>();

const SequenceWithProps = SequenceWithPropsFactory<Context>();

export {
  TState,
  TSignals,
  Context,
  BranchContext,
  connect,
  Sequence,
  SequenceWithProps,
};
