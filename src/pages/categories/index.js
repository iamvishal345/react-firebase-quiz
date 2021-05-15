import React, { useState } from "react";
import "./style.scss";
import InputField from "components/inputField";
import { CATEGORIES } from "constants/categories";
import { Link } from "react-router-dom";
const Categories = () => {
  const [searchStr, setSearchStr] = useState("");
  return (
    <div className="category-container">
      <InputField
        value={searchStr}
        setValue={setSearchStr}
        label="search"
        id="search"
        name="search"
        type="search"
      />
      <div className="categories">
        {CATEGORIES.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        )
          .filter((cat) =>
            cat.name.toLowerCase().includes(searchStr.toLowerCase())
          )
          .map((cat) => (
            <Link to={`game/${cat.value}`} className="category" key={cat.value}>
              {cat?.icon}
              <strong>{cat.name}</strong>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categories;
