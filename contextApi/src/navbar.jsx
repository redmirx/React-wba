import React, { useContext } from 'react';
import { StudentsContext } from './context';

const Navbar = () => {
  const [students] = useContext(StudentsContext);
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
      <div>Students List: {students.length}</div>
      <div>Home</div>
      <div>About</div>
      <div>Contact</div>
    </div>
  );
};

export default Navbar;
