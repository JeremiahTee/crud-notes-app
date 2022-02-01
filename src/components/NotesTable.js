import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetNotes } from '../services/notes';

export const NotesTable = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  const dispatch = useDispatch();

  // Retrieve notes when app loads
  useEffect(() => {
    GetNotes(dispatch);
  }, []);

  return (
    <table className='table table-dark'>
      <tbody>
        {notes.map((n) => (
          <tr key={n.id}>
            <td style={{ textAlign: 'left' }}>{n.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
