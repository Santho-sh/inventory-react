import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const saveItem = () => {
    if(name !== "" && price !== 0) {

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
    
    } else {
      return alert("Please Enter Name And Price")
    }

  };

  return (
    <div className="container mt-3">
      <h3>Add Item</h3>
      <div className="container">
        <div className="col mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col mt-2">
          <input
            type="number"
            className="form-control"
            placeholder="Max Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div className="col mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></input>
        </div>
        <div className="col mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="container mt-3">
        <button className="btn btn-outline-primary btn" onClick={saveItem}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddItem;
