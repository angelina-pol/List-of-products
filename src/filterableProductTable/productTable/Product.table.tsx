import { FC, ReactNode } from 'react';
import ProductRow from './ProductRow/ProductRow';
import ProductCategoryRow from './productCategoryRow/ProductCategoryRow';
import Products from '../filterableProductTable.models';

type PropsProductTable = {
  products: Products[];
  filterText: string;
  inStockOnly: boolean;
}

const ProductTable: FC<PropsProductTable> = ({ products, filterText, inStockOnly }) => {
  const rows: ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;