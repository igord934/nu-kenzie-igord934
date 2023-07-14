import NoList from "../NoList";
import Card from "../Card";

function ListTransactions({ filter, list, setList }) {
  const listFilter =
    filter === "Todos" ? list : list.filter(({ type }) => type == filter);

  function callback(transaction, index) {
    console.log(transaction);

    return (
      <Card
        key={index}
        transaction={transaction}
        list={list}
        setList={setList}
      />
    );
  }
  return (
    <section>
      {listFilter.length > 0 ? (
        listFilter.map((transaction, index) => {
          return (
            <Card
              key={index}
              transaction={transaction}
              list={list}
              setList={setList}
            />
          );
        })
      ) : (
        <NoList />
      )}
    </section>
  );
}

export default ListTransactions;
