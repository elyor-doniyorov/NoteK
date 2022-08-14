import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import UserInput from './components/UserInput';
import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';


function App() {

  const savedNotes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

  const [notes, setNotes] = useState(savedNotes);

  useEffect(() => {
    const json = JSON.stringify(notes);
    window.localStorage.setItem("notes", json);
  }, [notes]);

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)]
    });
  }
  return (
    <div>
      <Header />
      <UserInput onAdd={addNote} />
      <NotesList notes={notes} handleDeleteNote={deleteNotes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
