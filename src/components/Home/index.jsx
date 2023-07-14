import { useState } from "react";
import ContainerTransaction from "../ContainerTransaction";
import FooterTrasaction from "../FooterTrasaction";
import Form from "../Form";
import "./style.css";

function Home({ logout }) {
  const [listTransaction, setListTransaction] = useState([]);
  const [filter, setFilter] = useState("Todos");
  return (
    <div>
      <header className="header">
        <div className="headerContainer">
          <h3 className="logo">
            <span className="logoL title2">Nu</span>{" "}
            <span className="logoR title2">Kenzie</span>
          </h3>
          <button className="buttonDefaut" onClick={logout}>
            Início
          </button>
        </div>
      </header>
      <div className="home">
        <section className="containerForm">
          <Form list={listTransaction} setList={setListTransaction} />
          {listTransaction.length > 0 && (
            <FooterTrasaction list={listTransaction} />
          )}
        </section>
        <aside className="containerTrasiction">
          <ContainerTransaction
            filter={filter}
            setFilter={setFilter}
            list={listTransaction}
            setList={setListTransaction}
          />
        </aside>
      </div>
    </div>
  );
}

export default Home;
