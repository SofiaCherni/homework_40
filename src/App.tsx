import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { addNote, removeNote } from './store';
import NoteItem from './components/NoteItem';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(state => state.notes.notes);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddNote = () => {
    if (inputRef.current && inputRef.current.value.trim()) {
      const newNote = {
        id: Date.now(),
        content: inputRef.current.value,
      };
      dispatch(addNote(newNote));
      inputRef.current.value = '';
    }
  };

  const handleDeleteNote = (id: number) => {
    dispatch(removeNote(id));
  };

  function getList() {
    if (notes.length === 0) {
      return <div className='box'>Нотаток немає</div>;
    }
    return (
      <NoteList>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} onDelete={handleDeleteNote} />
        ))}
      </NoteList>
    );
  }

  return (
    <div className='wrapper'>
      <input
        className='input'
        type="text"
        ref={inputRef}
        placeholder="Ваш запис"
      />
      <button className='myButton' onClick={handleAddNote}>Додати запис</button>
      {getList()}
    </div>
  );
}

export default App;
