import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  // State Management (Pillar 2: Single Source of Truth)
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate initial loading (Pillar 3: Loading State)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Add Note Function
  const addNote = (note) => {
    const newNote = {
      ...note,
      id: Date.now(), // Simple unique ID
      createdAt: new Date().toISOString(),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Delete Note Function
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <img
          src="/notevault-logo.png"
          alt="Note Vault"
          className="header-logo-full"
        />
      </header>

      <main className="app-main">
        {loading ? (
          <Loader />
        ) : (
          <>
            <NoteForm onAddNote={addNote} />
            <NoteList notes={notes} onDeleteNote={deleteNote} />
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>Built with React • Clean Architecture</p>
      </footer>
    </div>
  );
}

export default App;
