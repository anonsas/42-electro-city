import { useContext } from 'react';
import SupplierContext from '../../contexts/SupplierContext';
import Line from './Line';

function List() {
  const { suppliers } = useContext(SupplierContext);

  return (
    <div>
      <h3>List of suppliers:</h3>
      {suppliers?.map((supplier) => (
        <Line key={supplier.id} supplier={supplier} />
      ))}
    </div>
  );
}

export default List;
