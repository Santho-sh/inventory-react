function ShowItems(props) {
  return (
    <div className="container mt-3">
      <h3>All Items</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>{item.brand}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowItems;
