import { FC } from 'react';

type PropsProductCategoryRow = {
  category: string;
}

const ProductCategoryRow: FC<PropsProductCategoryRow> = ({ category }) => {
  return (
    <tr>
    <th colSpan={2}>
      {category}
    </th>
  </tr>
  );
}

export default ProductCategoryRow;