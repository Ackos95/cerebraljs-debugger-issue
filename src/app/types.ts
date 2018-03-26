import * as sequences from './sequences';


type TAppState = {
  title: string;
  test: {
    shouldChangeValue: boolean;
  };
};

type TAppSignals = {
  [key in keyof typeof sequences]: typeof sequences[key];
};


export {
  TAppState,
  TAppSignals,
};
