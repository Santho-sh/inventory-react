import { useState } from "react";

function SearchItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchItem = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });

    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container mt-3">
      <h3>Search Item</h3>
      <div className="container row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Max Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row">
        <p className="col-5"></p>
        <button
          className="btn btn-outline-primary btn-sm col-2 mt-3"
          onClick={searchItem}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchItem;
