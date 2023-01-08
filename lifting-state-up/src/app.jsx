import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import Body from './body.jsx';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Abdurakhmon' },
    { id: 2, name: 'Abdulloh' },
    { id: 3, name: 'Anas' },
    { id: 4, name: 'Usmon' },
  ]);

  const handleDelete = (id) => {
    const result = students.filter((student) => student.id !== id);
    setStudents(result);
  };

  return (
    <div>
      <Navbar amount={students.length} />
      <Body students={students} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
