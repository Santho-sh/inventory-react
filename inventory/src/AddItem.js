import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const saveItem = () => {
    props.addToItems({
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
      <h2>Add Item</h2>
      <input
        type="text"
        className="add-name-input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="number"
        className="add-price-input"
        placeholder="Max Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <input
        type="text"
        className="add-type-input"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      ></input>
      <input
        type="text"
        className="add-brand-input"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      ></input>
      <button className="add-button" onClick={saveItem}>
        Save
      </button>
    </div>
  );
}

export default AddItem;
