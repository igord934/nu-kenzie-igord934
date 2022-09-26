import { useState } from "react";
import ListTransactions from "../ListTransaction";
import "./style.css";

function ContainerTransaction({ list, setList }) {
  const [filter, setFilter] = useState("Todos");
  const [buttonAllClass, setButtonAllClass] = useState("buttonDefaut Active");
  const [buttonInClass, setButtonInClass] = useState("buttonDefaut");
  const [buttonOutClass, setButtonOutClass] = useState("buttonDefaut");

  function listIn() {
    setFilter("Entrada");
    setButtonInClass("buttonDefaut Active");
    setButtonAllClass("buttonDefaut");
    setButtonOutClass("buttonDefaut");
  }

  function listOut() {
    setFilter("Saida");
    setButtonOutClass("buttonDefaut Active");
    setButtonAllClass("buttonDefaut");
    setButtonInClass("buttonDefaut");
  }
  function listAll() {
    setFilter("Todos");
    setButtonAllClass("buttonDefaut Active");
    setButtonOutClass("buttonDefaut");
    setButtonInClass("buttonDefaut");
  }

  return (
    <div>
      <header className="headerTransaction">
        <span className="title3">Resumo financeiro</span>
        <nav className="navBar">
          <button onClick={listAll} className={buttonAllClass}>
            Todos
          </button>
          <button onClick={listIn} className={buttonInClass}>
            Entradas
          </button>
          <button onClick={listOut} className={buttonOutClass}>
            Saidas
          </button>
        </nav>
      </header>
      <ListTransactions filter={filter} list={list} setList={setList} />
    </div>
  );
}

export default ContainerTransaction;
