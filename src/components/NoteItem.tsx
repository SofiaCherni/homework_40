import { Note } from '../store'; 
import styles from './NoteItem.module.css';

interface NoteItemProps {
  note: Note;
  onDelete: (id: number) => void;
}

const NoteItem = ({ note, onDelete }: NoteItemProps) => {
  return (
    <>
      <div className={styles.box}>Ваша запись: {note.content}!</div>
      <button className={styles.myButton} onClick={() => onDelete(note.id)}>Удалить</button>
    </>
  );
};

export default NoteItem;
