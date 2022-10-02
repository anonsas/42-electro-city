import { useContext, useState, useEffect } from 'react';
import BillContext from '../../contexts/BillContext';
import Line from './Line';

function List() {
  const { billList, setBillList, supplierList } = useContext(BillContext);

  const [supplier, setSupplier] = useState('0');

  console.log(billList);

  useEffect(() => {
    if (supplier === '0') {
      setBillList((prevState) => prevState?.map((bill) => ({ ...bill, show: true })));
    } else {
      setBillList((prevState) =>
        prevState?.map((bill) =>
          bill.supID === parseInt(supplier)
            ? { ...bill, show: true }
            : { ...bill, show: false }
        )
      );
    }
  }, [supplier, setBillList]);

  return (
    <div>
      <h3>List of bills:</h3>
      {/* SUPPLIER */}
      <div>
        <label htmlFor="supplier">Suppliers filter:</label>

        <select
          name="supplier"
          id="supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        >
          <option value={0}>Show All</option>
          {supplierList?.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
        </select>
      </div>
      <ul>{billList?.map((bill) => bill.show && <Line key={bill.id} bill={bill} />)}</ul>
    </div>
  );
}

export default List;
