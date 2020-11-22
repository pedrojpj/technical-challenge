import React, { useState } from "react";
import jikanjs from "jikanjs";

import "./App.css";
import { InputAutoSuggest, IAutoSuggestItem } from "./components";

type JikansResults = {
  mal_id: number;
  url: string;
  title: string;
  type: string;
};

function App() {
  const [items, setItems] = useState<IAutoSuggestItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const getResults = (value: string) => {
    return jikanjs
      .search("anime", value)
      .then((response: any) => response.results);
  };

  const onChangeSearch = async (value: string) => {
    setLoading(true);
    const results: JikansResults[] = await getResults(value);

    setItems(
      results.map((item: JikansResults) => ({
        name: item.title,
        value: item.mal_id,
      }))
    );

    setLoading(false);
  };

  const onSelectItem = (value: string) => {
    setValue(value);
  };

  return (
    <div className="App">
      <InputAutoSuggest
        label="Encuentra series de anime"
        placeholder="Por ejemplo: Dragon Ball"
        onChange={onChangeSearch}
        items={items}
        loading={loading}
        value={value}
        onSelectItem={onSelectItem}
        testId="input-autosearch"
      />
    </div>
  );
}

export default App;
