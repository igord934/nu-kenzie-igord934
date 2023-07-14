import "./style.css";

function FooterTrasaction({ list }) {
  const total = list.reduce((acumulador, transaction) => {
    return acumulador + transaction.innerValue;
  }, 0);
  return (
    <div className="footerT">
      <div className="footerD">
        <h2>Valor total:</h2>
        <span>O valor se refere ao saldo</span>
      </div>
      <span className="money">${total}</span>
    </div>
  );
}

export default FooterTrasaction;
