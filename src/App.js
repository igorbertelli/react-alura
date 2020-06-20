import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Header from "./Header";
import Tabela from "./Tabela";
import Form from "./Formulario";
import PopUp from "./PopUp";
import ApiService from "./ApiService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autores: [],
    };
  }

  removeAutor = (index) => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });
    PopUp.exibeMensagem("error", "Autor removido com sucesso");
  };

  escutadorDeSubmit = (autor) => {
    this.setState({ autores: [...this.state.autores, autor] });
    PopUp.exibeMensagem("success", "Autor adicionado com sucesso");
  };

  componentDidMount() {
    // ApiService.ListaAutores().then((res) =>this.setState({autores => res.data}));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do Código</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
