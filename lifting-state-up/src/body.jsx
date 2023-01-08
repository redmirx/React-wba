import React from 'react';

const Body = ({ students, handleDelete = Function.prototype }) => {
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
