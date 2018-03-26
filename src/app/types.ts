import * as sequences from './sequences';
import { Dictionary } from '@cerebral/fluent';


type TAppState = {
  title: string;
  plain: {
    shouldChangeValue: boolean;
  };
  secondError: Dictionary<string>
};

type TAppSignals = {
  [key in keyof typeof sequences]: typeof sequences[key];
};


export {
  TAppState,
  TAppSignals,
};
