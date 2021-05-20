import React, { useState } from "react";
import "./style.scss";
import InputField from "components/core/inputField";
import { CATEGORIES } from "constants/categories";
import { useHistory } from "react-router-dom";
const Categories = () => {
  const [searchStr, setSearchStr] = useState("");
  const history = useHistory();
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
            <div className="category" key={cat.value}>
              {cat?.icon}
              <strong>{cat.name}</strong>
              <div className="overlay">
                <button
                  onClick={() => history.push(`game/${cat.value}/easy`)}
                  className="btn btn-round easy"
                >
                  Easy
                </button>
                <button
                  onClick={() => history.push(`game/${cat.value}/medium`)}
                  className="btn btn-round medium"
                >
                  Medium
                </button>
                <button
                  onClick={() => history.push(`game/${cat.value}/hard`)}
                  className="btn btn-round hard"
                >
                  Hard
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
