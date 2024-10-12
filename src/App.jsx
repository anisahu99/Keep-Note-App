import { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import Note from "./Note";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes([newNote, ...notes]);
  }
  function deleteNote(i) {
    const updateNotes = notes.filter((_, idx) => i != idx);
    setNotes(updateNotes);
  }
  function editNote(i, title, content) {
    const updateNotes = notes.map((obj, idx) =>
      i == idx ? { title, content } : obj
    );
    setNotes(updateNotes);
  }

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if(savedNotes && savedNotes.length > 0){
      setNotes(savedNotes);
    } 
  },[]);
  useEffect(()=>{
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  },[notes]);

  return (
    <>
      <h2>Keep Note</h2>
      <NoteForm addNote={addNote} />
      <br />
      <div className="note-container">
        {notes.map((obj, i) => (
          <Note
            key={i}
            id={i}
            title={obj.title}
            content={obj.content}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))}
        <button onClick={()=>localStorage.clear()}>Clear Local Storage</button>
      </div>
    </>
  );
}

export default App;
