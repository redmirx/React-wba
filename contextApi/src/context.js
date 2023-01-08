import React, { createContext, useState } from 'react';

export const StudentsContext = createContext();

const StudentsList = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Abdurakhmon' },
    { id: 2, name: 'Abdulloh' },
    { id: 3, name: 'Anas' },
    { id: 4, name: 'Usmon' },
  ]);

  return (
    <StudentsContext.Provider value={[students, setStudents]}>
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsList;
