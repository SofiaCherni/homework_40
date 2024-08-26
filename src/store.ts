import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// Типи для нотаток
export interface Note {
  id: number;
  content: string;
}

// Початковий стан
interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

// Slice для нотаток
const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()


export default store;