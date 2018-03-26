import * as React from 'react';
import { connect } from 'fluent';

// assets
import './assets/styles/index.css';
const logo = require('./assets/images/logo.svg');


const Home = connect()
  .with(({ state, signals }) => ({
    title: state.title,
    plainChangedValue: state.plain.shouldChangeValue,
    submoduleChangedValue: state.test.shouldChangeValue,
    initialize: () => signals.initialize(),
    initializePlainBroken: () => signals.initializeBroken({ key: 'plain.shouldChangeValue' }),
    initializeSubmoduleBroken: () => signals.initializeBroken({ key: 'test.shouldChangeValue' }),
    secondErrorSequence: () => signals.secondErrorSequence({ key: 'any' }),
  })).toClass((props) =>
    class HomePure extends React.PureComponent<typeof props> {
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">{this.props.title}</h1>
            </header>
            <p className="App-intro">
              To get started click
              <button onClick={this.props.initialize}>here</button>
            </p>
            <p className="App-intro">
              And to break an app (plain object in state) click
              <button onClick={this.props.initializePlainBroken}>here</button>
              and this should change "{this.props.plainChangedValue ? 'true' : 'false'}"
            </p>
            <p className="App-intro">
              And to break an app (submodules) click
              <button onClick={this.props.initializeSubmoduleBroken}>here</button>
              and this should change "{this.props.submoduleChangedValue ? 'true' : 'false'}"
            </p>
            <p className="App-intro">
              Second error example, simple action checking if key in dictionary, to break click
              <button onClick={this.props.secondErrorSequence}>here</button>
            </p>
          </div>
        );
      }
    }
  );


export {
  Home,
};
