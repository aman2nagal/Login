import { useEffect } from "react";

export const useOnClickOutside = (ref, handleClick) => {

    useEffect(() => {
      const listener = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handleClick(event);
        }
      };
  
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
  
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handleClick]);
};

export const multiSelectFilter = (attribute) => (rows, columnIds, filterValue) => {
    // Filters only if filters are selected
    return filterValue.length === 0 ? rows : rows.filter((row) => {
      //console.log(row.original[attribute]);
      return filterValue.some(element => {
        return element.toLowerCase() === row.original[attribute].toLowerCase();
      })
    })
}