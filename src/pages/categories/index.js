import React, { useState } from "react";
import "./style.scss";
import InputField from "components/core/inputField";
import { CATEGORIES } from "constants/categories";
import { useHistory } from "react-router-dom";
const Categories = () => {
  const [searchStr, setSearchStr] = useState("");
  const history = useHistory();
  const levelButton = (cat, level) => (
    <button
      aria-label={`${cat.name} ${level} level`}
      onClick={() => history.push(`game/${cat.value}/${level}`)}
      className={`btn btn-round ${level}`}
    >
      {level}
    </button>
  );
  return (
    <div className="category-container">
      <InputField
        value={searchStr}
        setValue={setSearchStr}
        label="search"
        id="search"
        name="search"
        type="search"
        ariaLabel="Search Quiz Catagories"
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
                {levelButton(cat, "easy")}
                {levelButton(cat, "medium")}
                {levelButton(cat, "hard")}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
