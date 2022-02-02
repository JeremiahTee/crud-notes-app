import { ActionCreators } from '../redux/notesReducer';

const uri = 'https://localhost:7233/notes';

export const GetNotes = async (dispatch) => {
  fetch(uri)
    .then((response) => response.json())
    .then((data) => dispatch(ActionCreators.setNotes(data)))
    .catch((error) => console.error('Unable to get notes.', error));
};

export const DeleteNote = async (dispatch, note) => {
  fetch(`${uri}/${note.id}`, {
    method: 'DELETE',
  })
    .then(dispatch(ActionCreators.deleteNote(note)))
    .catch((error) => console.error('Unable to delete note.', error));
};

export const NewNote = async (dispatch, note) => {
  console.log(`Note from NewNote ${note}`);
  console.log(`NewNote stringified ${JSON.stringify(note)}`);
  fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(ActionCreators.newNote(data));
    })
    .catch((error) => console.error('Unable to add note.', error));
};

export const EditNote = async (dispatch, note) => {
  console.log(`Note from EditNote ${note}`);
  console.log(`EditNote stringified ${JSON.stringify(note)}`);
  fetch(uri, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })
    .then(dispatch(ActionCreators.editNote(note)))
    .catch((error) => console.error('Unable to add note.', error));
};
