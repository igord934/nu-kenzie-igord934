import { useState } from "react";
import Card from "../Card";
import NoList from "../NoList";
import "./style.css";

function ContainerTransaction({ list, setList }) {
  const [listFilter, setListFilter] = useState(list);
  const [buttonAllClass, setButtonAllClass] = useState("buttonDefaut Active");
  const [buttonInClass, setButtonInClass] = useState("buttonDefaut");
  const [buttonOutClass, setButtonOutClass] = useState("buttonDefaut");
  function listIn() {
    setListFilter(list.filter(({ type }) => type === "Entrada"));
    setButtonInClass("buttonDefaut Active");
    setButtonAllClass("buttonDefaut");
    setButtonOutClass("buttonDefaut");
  }
  function listOut() {
    setListFilter(list.filter(({ type }) => type === "Saida"));
    setButtonOutClass("buttonDefaut Active");
    setButtonAllClass("buttonDefaut");
    setButtonInClass("buttonDefaut");
  }
  function listAll() {
    setListFilter([]);
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
      <section>
        {listFilter.length > 0 ? (
          listFilter.map((transaction, index) => (
            <Card
              key={index}
              transaction={transaction}
              list={list}
              setList={setList}
            />
          ))
        ) : list.length > 0 ? (
          list.map((transaction, index) => (
            <Card
              key={index}
              transaction={transaction}
              list={list}
              setList={setList}
            />
          ))
        ) : (
          <NoList />
        )}
      </section>
    </div>
  );
}

export default ContainerTransaction;
