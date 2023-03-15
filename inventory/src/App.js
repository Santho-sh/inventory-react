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
    item.id = items.length + 1;
    items.push(item);
    setData({ items: items });
  };

  const updateFilter = (searchParams) => {
    setFilters(searchParams);
  };

  const filterData = (data) => {
    let filterdData = []

    if (!filters.name){
      return data
    }

    for(const item of data){
      if(filters.name !== "" && filters.name !== item.name) {
        continue
      };
      if(filters.price !== 0 && filters.price < item.price) {
        continue
      };
      if(filters.type !== "" && filters.type !== item.type) {
        continue
      };
      if(filters.brand !== "" && filters.brand !== item.brand) {
        continue
      };

      filterdData.push(item);

    };

    return filterdData
  };

  return (
    <div className="container">
      <ShowItems items={filterData(data["items"])} />
      <SearchItem updateSearchParams={updateFilter} />
      <AddItem addToItems={addItem} />
    </div>
  );
}

export default App;
