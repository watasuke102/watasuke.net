// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';

export class ErrorBoundary extends React.Component<{children: React.ReactNode}, {error: string}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = {error: ''};
  }
  componentDidCatch(err, info) {
    console.log('err', err, info);
    this.setState({error: info.componentStack.split('\n').slice(0, 6)});
  }
  componentDidUpdate(_: object, prev_state: {error: string}): void {
    if (prev_state.error !== '') {
      this.setState({error: ''});
    }
  }
  render() {
    return this.state.error === '' ? (
      this.props.children
    ) : (
      <p style={{whiteSpace: 'break-spaces'}}>
        [ERROR]
        <br />
        {this.state.error}
      </p>
    );
  }
}
