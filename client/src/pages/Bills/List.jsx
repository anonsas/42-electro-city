import { useContext } from 'react';
import BillContext from '../../contexts/BillContext';
import Line from './Line';

function List() {
  const { billList } = useContext(BillContext);

  return (
    <div>
      <h3>List of bills:</h3>
      {billList?.map((bill) => (
        <Line key={bill.id} bill={bill} />
      ))}
    </div>
  );
}

export default List;
