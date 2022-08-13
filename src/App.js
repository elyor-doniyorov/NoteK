import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import UserInput from './components/UserInput';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

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
      <div className='notesInGrid'>
       {notes.map((note,index) => (
        <Note 
          key={index} 
          id={index} 
          title={note.title} 
          tagline={note.tagline} 
          content={note.content} 
          onDelete={deleteNotes}
        />
        ))}
      </div>
    </div>
  );
}

export default App;
