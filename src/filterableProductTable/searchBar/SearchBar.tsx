import { FC } from 'react';

type PropsSearchBar = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
  onInStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: FC<PropsSearchBar> = ({ filterText, inStockOnly,  onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form>
      <input type="text"
             value={filterText} 
             placeholder="Search..." 
             onChange={(e) => onFilterTextChange(e.target.value)}/>
      <label>
        <input type="checkbox" 
               checked={inStockOnly}
               onChange={(e) => onInStockOnlyChange(e.target.checked)}/> 
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;