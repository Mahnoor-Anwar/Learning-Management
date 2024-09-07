import React from 'react';


const Class2 = () => {

  const feeData = [
    { category: 'Tuition Fee', amount: '2800' },
    { category: 'Lab Fee', amount: '300' },
    { category: 'Library Fee', amount: '500' },
    { category: 'Activity Fee', amount: '350' },
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

export default Class2;
