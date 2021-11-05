import React, { Component } from "react";
import { Form, Input } from "./Form";
import Number from "./Number";

interface StateInterface {
  counter: number;
  value: string;
}

class App extends Component<{}, StateInterface> {
  state = {
    counter: 0,
    value: "",
  };

  addCounter = (): void => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };

  onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log("value", event.currentTarget.value);
  };

  render() {
    const { counter, value } = this.state;

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Input value={value} onChange={this.onChange}></Input>
        </Form>
        <Number count={counter} />
        <button onClick={this.addCounter}>Add</button>
      </div>
    );
  }
}

export default App;
