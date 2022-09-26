import { useState } from "react";
import "./style.css";

function Form({ list, setList }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Escolha");
  const [innerValue, setInnerValue] = useState("");
  return (
    <form
      className="formTransaction"
      onSubmit={(event) => {
        event.preventDefault();
        if (type === "Escolha") {
          alert("Ecolha o tipo de transação");
        } else {
          const innerValueFormat =
            type == "Entrada" ? Number(innerValue) : Number(-innerValue);
          setList([
            ...list,
            { name: name, type: type, innerValue: innerValueFormat },
          ]);
          setName("");
          setType("Escolha");
          setInnerValue("");
        }
      }}
    >
      <label>Descrição</label>
      <input
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Digite aqui sua descrição"
      />
      <span className="ex">Ex: Compra de roupas</span>
      <div className="containerValue">
        <div>
          <label>Valor</label>
          <div className="inputValue">
            <input
              required
              onChange={(event) => setInnerValue(event.target.value)}
              type="number"
              value={innerValue}
              placeholder={1}
            />
            <span>R$</span>
          </div>
        </div>
        <div>
          <label>Tipo de valor</label>
          <select
            value={type}
            required
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Escolha">Escolha</option>
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saida</option>
          </select>
        </div>
      </div>
      <button className="buttonPrimary">Inserir Valor</button>
    </form>
  );
}

export default Form;
