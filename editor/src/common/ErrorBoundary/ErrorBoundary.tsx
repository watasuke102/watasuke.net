// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React, {ErrorInfo} from 'react';

export class ErrorBoundary extends React.Component<
  {children: React.ReactNode},
  {error: string[]}
> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = {error: []};
  }
  componentDidCatch(_: Error, info: ErrorInfo) {
    this.setState({
      error: info?.componentStack?.split('\n').slice(0, 8) ?? [],
    });
  }
  componentDidUpdate(_: object, prev_state: {error: string[]}): void {
    if (prev_state.error.length !== 0) {
      this.setState({error: []});
    }
  }
  render() {
    return this.state.error.length === 0 ? (
      this.props.children
    ) : (
      <span>
        [ERROR]
        {this.state.error.map((e, i) => (
          <span key={i}>
            {e}
            <br />
          </span>
        ))}
      </span>
    );
  }
}
