import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleChange(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 p-1 rounded-lg">
        {options.map((option) => {
            const isActive = option.value === currentFilter
          return (
            <button
              className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300
                ${ isActive
                ? "!bg-primary-900 text-white"   /// ! means important
                : "bg-secondary-0 text-secondary-800"}
                `}
              onClick={() => handleChange(option.value)}
              key={option.value}
              disabled={isActive}  /// to disable click again
            >
              {" "}
              {option.label}{" "}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
