import React from "react";

export default class App extends React.Component {
  state = {
    tf: "",
    lf: []
  };

  handleChange = (e) => {
    this.setState({ tf: e.target.value });
  };

  adicionar = () => {
    this.setState({
      lf: this.state.lf.concat({
        tf: this.state.tf,
        id: Date.now()
      }),
      tf: ""
    });
  };

  remover = (id) => {
    this.setState({
      lf: this.state.lf.filter((item) => item.id !== id)
    });
  };

  enter = (e) => {
    if (this.state.tf.length > 0 && e.key === "Enter") {
      this.setState({
        lf: this.state.lf.concat({
          tf: this.state.tf,
          id: Date.now()
        }),
        tf: ""
      });
    }
  };

  render() {
    return (
      <>
        <h1>Lista Tarefa</h1>
        <input
          onChange={this.handleChange}
          onKeyPress={this.enter}
          value={this.state.tf}
        />

        <button onClick={this.adicionar}>Adicionar</button>
        {this.state.lf.map((item) => (
          <div key={item.id}>
            <ul>
              <li>
                {item.tf}, {item.id}
              </li>
            </ul>
            <button onClick={() => this.remover(item.id)}>X</button>
          </div>
        ))}
      </>
    );
  }
}
