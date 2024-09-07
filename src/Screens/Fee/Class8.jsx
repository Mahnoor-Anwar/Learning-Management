import React from 'react';


const Class8 = () => {

  const feeData = [
    { category: 'Tuition Fee', amount: '3500' },
    { category: 'Lab Fee', amount: '550' },
    { category: 'Library Fee', amount: '500' },
    { category: 'Activity Fee', amount: '750' },
    { category: 'Miscellaneous Fee', amount: '450' },
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

export default Class8;
