// @flow

import * as React from 'react';

import Sidebar from './Sidebar';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="content-wraper">
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
}

export default App;
