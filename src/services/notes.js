import { ActionCreators } from '../redux/notesReducer';

export const GetNotes = async (dispatch) => {
  try {
    // api call
    const response = [
      { value: 'Study for GSoft', id: 1 },
      { value: 'Get that bag', id: 2 },
      { value: 'Skip a bracket', id: 3 },
      { value: 'Then enjoy dee bucket!', id: 4 },
    ];

    dispatch(ActionCreators.setNotes(response));
  } catch (error) {
    console.log(error);
  }
};

export const DeleteNote = async (dispatch, note) => {
  try {
    dispatch(ActionCreators.deleteNote(note));
  } catch (error) {
    console.log(error);
  }
};

export const NewNote = async (dispatch, note) => {
  // api call
  const response = { value: note, id: 7 };

  try {
    dispatch(ActionCreators.newNote(response));
  } catch (error) {
    console.log(error);
  }
};

export const EditNote = async (dispatch, note) => {
  // api call
  const response = { value: note, id: 7 };
  try {
    dispatch(ActionCreators.editNote(response));
  } catch (error) {
    console.log(error);
  }
};
