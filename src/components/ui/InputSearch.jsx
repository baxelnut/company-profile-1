import { useState, useRef } from "react";
// Style
import "./InputSearch.css";
// Components
import Icon from "./Icon";
// Data
import { SVG_PATHS } from "../../data/utilsData";

export default function InputSearch({
  value,
  onChange,
  placeholder = "Search...",
  rounded = false,
  radius = 6, // default 6px
  fullWidth = false,
  width = null, // optional width like "300px", "100%", etc.
}) {
  const [searchValue, setSearchValue] = useState(value || "");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchValue(val);
    onChange?.(val);
  };

  const clearSearch = () => {
    setSearchValue("");
    onChange?.("");
    inputRef.current?.focus();
  };

  const wrapperClass = ["search-input-wrapper", fullWidth ? "full" : ""].join(
    " "
  );

  const inlineStyles = {
    borderRadius: rounded ? "360px" : `${radius}px`,
    width: fullWidth ? "100%" : width || "50%",
  };

  return (
    <div className={wrapperClass} style={inlineStyles}>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        className="search-input"
      />
      <button
        type="button"
        className="search-icon-btn"
        onClick={searchValue ? clearSearch : undefined}
        aria-label={searchValue ? "Clear search" : "Search"}
      >
        <Icon
          path={searchValue ? SVG_PATHS.xLarge : SVG_PATHS.search}
          size={16}
          className={`search-icon ${searchValue ? "fade-x" : "fade-search"}`}
        />
      </button>
    </div>
  );
}
