import React from 'react';


const Class4 = () => {

  const feeData = [
    { category: 'Tuition Fee', amount: '3200' },
    { category: 'Lab Fee', amount: '500' },
    { category: 'Library Fee', amount: '500' },
    { category: 'Activity Fee', amount: '450' },
    { category: 'Miscellaneous Fee', amount: '250' },
  ];

  return (
    <div className="fee-structure-container">
      <table className="fee-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Class4;
