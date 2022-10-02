import { useContext, useState, useEffect } from 'react';
import BillContext from '../../contexts/BillContext';
import Line from './Line';

function List() {
  const { billList, setBillList, supplierList } = useContext(BillContext);

  const [supplier, setSupplier] = useState('0');
  const [sortBy, setSortBy] = useState('default');

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

  useEffect(() => {
    switch (sortBy) {
      case 'default':
        setBillList((prevState) => [...(prevState ?? [])].sort((a, b) => a.row - b.row));
        break;
      case 'total_asc':
        setBillList((prevState) =>
          [...(prevState ?? [])].sort((a, b) => a.total - b.total)
        );
        break;
      case 'total_desc':
        setBillList((prevState) =>
          [...(prevState ?? [])].sort((a, b) => b.total - a.total)
        );
        break;
      case 'surname_asc':
        setBillList((prevState) =>
          [...(prevState ?? [])].sort((a, b) => a.surname.localeCompare(b.surname))
        );
        break;
      case 'surname_desc':
        setBillList((prevState) =>
          [...(prevState ?? [])].sort((a, b) => b.surname.localeCompare(a.surname))
        );
        break;
      default:
    }
  }, [sortBy, setBillList]);

  return (
    <div>
      <h3>List of bills:</h3>
      {/* SUPPLIER FILTER */}
      <div>
        <label htmlFor="supplier">FILTER BY SUPPLIER:</label>

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

      {/* SORT BY TOTAL PRICE */}
      <div>
        <label htmlFor="total">SORT BY:</label>

        <select
          name="total"
          id="total"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="total_asc">Total Price Ascending</option>
          <option value="total_desc">Total Price Descending</option>
          <option value="surname_asc">Surname Ascending</option>
          <option value="surname_desc">Surname Descending</option>
        </select>
      </div>
      <ul>{billList?.map((bill) => bill.show && <Line key={bill.id} bill={bill} />)}</ul>
    </div>
  );
}

export default List;
