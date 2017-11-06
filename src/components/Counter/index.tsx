import * as React from "react";

export interface CounterProps {
  value: number;
  data: any;
  // onFetchTodos: any;
  onIncrementClick: () => void;
  onIncrementClickAsync: () => void;
  onDecrementClick: () => void;
}

export default class Counter extends React.Component<CounterProps, {}> {
  public render() {
    return (
      <div>
        <div>todoItems: {JSON.stringify(this.props.data.todoItems)}</div>

        <div className="value">{this.props.value}</div>
        <button className="increment" onClick={this.props.onIncrementClick}>
          INCREMENT
        </button>
        <button className="decrement" onClick={this.props.onDecrementClick}>
          DECREMENT
        </button>
        <button
          className="increment"
          onClick={this.props.onIncrementClickAsync}
        >
          INCREMENT AFTER 1 SECOND
        </button>
      </div>
    );
  }
}
