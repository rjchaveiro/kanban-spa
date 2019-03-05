// @flow

import * as React from 'react';

type Props = {};

export default class Sidebar extends React.Component<Props> {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
          <li>Test 4</li>
          <li>Test 5</li>
          <li>Test 6</li>
        </ul>
      </div>
    );
  }
}
