import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import ShowItems from "./ShowItems";
import { useState } from "react";

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
    <div>
      <SearchItem updateSearchParams={updateFilter} />
      <AddItem addToItems={addItem} />
      <ShowItems items={data["items"]} />
    </div>
  );
}

export default App;
