import React, { useCallback, useMemo, useState } from "react";

const FilteredList = React.memo(({ items, filterFunction }) => {
  console.log("FilteredList renders");
  const filteredItems = items.filter(filterFunction);

  return (
    <ul>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => <li key={item.id}>{item.name}</li>)
      ) : (
        <li>No items found</li>
      )}
    </ul>
  );
});

const ParentComponent = () => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const items = useMemo(
    () => [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Cherry" },
      { id: 4, name: "Date" },
      { id: 5, name: "Elderberry" },
      { id: 6, name: "Fig" },
      { id: 7, name: "Grape" },
      { id: 8, name: "Honeydew" },
      { id: 9, name: "Indian Fig" },
      { id: 10, name: "Jackfruit" },
      { id: 11, name: "Kiwi" },
      { id: 12, name: "Lemon" },
      { id: 13, name: "Mango" },
      { id: 14, name: "Nectarine" },
      { id: 15, name: "Orange" },
    ],
    []
  ); // Memoize items array

  const filterFunction = useCallback(
    (item) => item?.name.toLowerCase().includes(query.toLowerCase()),
    [query]
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      &nbsp;
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count {count}
      </button>
      <FilteredList items={items} filterFunction={filterFunction} />
    </div>
  );
};

export default ParentComponent;
