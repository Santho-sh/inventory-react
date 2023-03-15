import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import ShowItems from "./ShowItems";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState({ items: [] });
  const [filters, setFilters] = useState({});

  const addItem = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(items);
  };

  const updateFilter = (searchParams) => {
    setFilters(searchParams);
    console.log(filters);
  };

  return (
    <div className="container">
      <ShowItems items={data["items"]} />
      <SearchItem updateSearchParams={updateFilter} />
      <AddItem addToItems={addItem} />
    </div>
  );
}

export default App;
