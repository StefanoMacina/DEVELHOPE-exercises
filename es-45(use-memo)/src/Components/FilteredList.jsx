import React from "react";
import { useMemo } from "react";

function FilteredList({ list }) {
  const filtered = useMemo(() => list.filter((el) => el.age > 18), [list]);

  return (
    <div>
      {filtered.map((el) => (
        <h1 key={el.id}>
          {el.name} {el.age}
        </h1>
      ))}
    </div>
  );
}

export default FilteredList;
