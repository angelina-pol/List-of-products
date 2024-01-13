import { FC } from 'react';
import Products from '../../filterableProductTable.models';

type PropsProductRow = {
  product: Products;
}

const ProductRow: FC<PropsProductRow> = ({ product }) => {
    const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;