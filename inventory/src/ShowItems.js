function ShowItems({items, deleteItem}) {
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
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type !== "" ? item.type: "-"}</td>
                <td>{item.brand !== "" ? item.brand: "-"}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteItem(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowItems;
