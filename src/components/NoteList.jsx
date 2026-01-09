import NoteItem from "./NoteItem";
import EmptyState from "./EmptyState";
import "./NoteList.css";

function NoteList({ notes, onDeleteNote }) {
  // Pillar 3: Empty State handling
  if (notes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="note-list-container">
      <h2>Your Notes ({notes.length})</h2>
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} onDelete={onDeleteNote} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
