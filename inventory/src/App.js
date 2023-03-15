import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import ShowItems from "./ShowItems";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState({ items: [] });
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((response) => response.json())
      .then((data) => {
        setData({ items: data });
      });
  }, []);

  const addItem = (item) => {

    let items = data["items"];

    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
      
  };

  const updateFilter = (searchParams) => {
    setFilters(searchParams);
  };

  const filterData = (data) => {
    let filterdData = [];

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && filters.name !== item.name) {
        continue;
      }
      if (filters.price !== 0 && filters.price < item.price) {
        continue;
      }
      if (filters.type !== "" && filters.type !== item.type) {
        continue;
      }
      if (filters.brand !== "" && filters.brand !== item.brand) {
        continue;
      }

      filterdData.push(item);
    }

    return filterdData;
  };

  const detelteItem = (item) => {

    let items = data["items"]
      fetch(`http://localhost:4000/items/${item.id}`,{
        method:"DELETE"
      }).then(response => {
        if (response.ok) {
          const index = items.indexOf(item);
          items.splice(index, 1);
          setData({items:items});
        }
      })
  }

  return (
    <div className="container">
      <ShowItems items={filterData(data["items"])} deleteItem={detelteItem} />
      <SearchItem updateSearchParams={updateFilter} />
      <AddItem addToItems={addItem} />
    </div>
  );
}

export default App;
