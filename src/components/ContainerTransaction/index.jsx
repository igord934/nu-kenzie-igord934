import { useState } from "react";
import ListTransactions from "../ListTransaction";
import "./style.css";

function ContainerTransaction({ list, setList, filter, setFilter }) {
  function listIn() {
    setFilter("Entrada");
  }

  function listOut() {
    setFilter("Saida");
  }
  function listAll() {
    setFilter("Todos");
  }

  return (
    <div>
      <header className="headerTransaction">
        <span className="title3">Resumo financeiro</span>
        <nav className="navBar">
          <button
            onClick={listAll}
            className={
              filter == "Todos" ? "buttonDefaut Active" : "buttonDefaut"
            }
          >
            Todos
          </button>
          <button
            onClick={listIn}
            className={
              filter == "Entrada" ? "buttonDefaut Active" : "buttonDefaut"
            }
          >
            Entradas
          </button>
          <button
            onClick={listOut}
            className={
              filter == "Saida" ? "buttonDefaut Active" : "buttonDefaut"
            }
          >
            Saidas
          </button>
        </nav>
      </header>
      <ListTransactions filter={filter} list={list} setList={setList} />
    </div>
  );
}

export default ContainerTransaction;
