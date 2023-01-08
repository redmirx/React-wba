import React from 'react';

const Navbar = ({ amount }) => {
  return (
    <div
      style={{
        backgroundColor: 'springgreen',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '22px',
        fontWeight: 'bold',
      }}
    >
      <div>Students List: {amount}</div>
      <div>Home</div>
      <div>About</div>
      <div>Contact</div>
    </div>
  );
};

export default Navbar;
