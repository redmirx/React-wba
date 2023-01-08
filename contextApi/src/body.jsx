import React, { useContext } from 'react';
import { StudentsContext } from './context';

const Body = () => {
  const [students, setStudents] = useContext(StudentsContext);

  const handleDelete = (id) => {
    const result = students.filter((student) => student.id !== id);
    setStudents(result);
  };

  return (
    <div>
      <h1 style={{ color: 'coral' }}>Students: {students.length}</h1>
      {students.map((student) => {
        return (
          <h1 key={student.id}>
            {student.name}{' '}
            <button onClick={() => handleDelete(student.id)}>delete </button>
          </h1>
        );
      })}
    </div>
  );
};

export default Body;
