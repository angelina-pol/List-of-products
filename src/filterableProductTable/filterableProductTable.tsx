import { FC, useState } from 'react'
import SearchBar from "./searchBar/SearchBar";
import ProductTable from "./productTable/Product.table";
import Products from './filterableProductTable.models';

type PropsFilterableProductTable = {
  products: Products[];
}

const FilterableProductTable: FC<PropsFilterableProductTable> = ({ products }) => {
  const [filterText, setFilterText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <div>
      <SearchBar filterText={filterText} 
                 inStockOnly={inStockOnly}
                 onFilterTextChange={setFilterText}
                 onInStockOnlyChange={setInStockOnly} />

      <ProductTable products={products} 
                    filterText={filterText} 
                    inStockOnly={inStockOnly}/>
    </div>
  );
};

export default FilterableProductTable;
