import * as React from 'react';
import { connect } from 'fluent';

// assets
import './assets/styles/index.css';
const logo = require('./assets/images/logo.svg');


const Home = connect()
  .with(({ state, signals }) => ({
    title: state.title,
    changedValue: state.test.shouldChangeValue,
    initialize: () => signals.initialize(),
    initializeBroken: () => signals.initializeBroken({ key: 'test.shouldChangeValue' }),
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
              And to break an app click
              <button onClick={this.props.initializeBroken}>here</button>
              and this should change "{this.props.changedValue ? 'true' : 'false'}"
            </p>
          </div>
        );
      }
    }
  );


export {
  Home,
};
