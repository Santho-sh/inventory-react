import "./SearchItem.css";
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
    <div className="add-item">
      <h2>Search Item</h2>
      <input
        type="text"
        className="add-name-input"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="number"
        className="add-price-input"
        placeholder="Max Price"
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <input
        type="text"
        className="add-type-input"
        placeholder="Type"
        onChange={(e) => setType(e.target.value)}
      ></input>
      <input
        type="text"
        className="add-brand-input"
        placeholder="Brand"
        onChange={(e) => setBrand(e.target.value)}
      ></input>
      <button className="add-button" onClick={searchItem}>
        Search
      </button>
    </div>
  );
}

export default SearchItem;
