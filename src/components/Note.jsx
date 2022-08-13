import React from 'react';
import './Note.css';

function Note({title, tagline, content, onDelete, id}) {
  return (
    <div className='note'>
      <h1>{title}</h1>
      <h3>{tagline}</h3>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Note;