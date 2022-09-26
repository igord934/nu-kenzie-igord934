import "./style.css";

import { FaTrash } from "react-icons/fa";

function Card({ transaction, list, setList, index }) {
  return (
    <article
      key={index}
      className={transaction.type === "Entrada" ? " cardT in" : " cardT"}
    >
      <div className="infosT">
        <h2>{transaction.name}</h2>
        <span>{transaction.type}</span>
      </div>
      <span>R$ {transaction.innerValue},00</span>
      <FaTrash
        className="trash"
        onClick={() => {
          setList(
            list.filter((innerTrasaction) => innerTrasaction !== transaction)
          );
        }}
      ></FaTrash>
    </article>
  );
}

export default Card;
