import { useState } from "react";
export default function Note({ id, title, content, deleteNote, editNote }) {
  const [isEditableNote, setIsEditableNote] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);
  function editNoteHandle(e) {
    if (!isEditableNote) {
      setIsEditableNote(true);
    }else{
        setIsEditableNote(false);
    }
  }
  function saveEdit() {
    setIsEditableNote(false);
    editNote(id, updatedTitle, updatedContent);
  }
  function handleTitle(e) {
    setUpdatedTitle(e.target.value);
  }
  function handleContent(e) {
    setUpdatedContent(e.target.value);
  }
  return (
    <div
      className="note"
      id={id}
    >
      {isEditableNote ? (
        <div className="note-edit">
          <textarea onChange={handleTitle} value={updatedTitle}>
            {" "}
            rows= "1" cols ="30"
          </textarea>
          <br></br>
          <textarea
            onChange={handleContent}
            value={updatedContent}
            rows="4"
            cols="50"
          ></textarea>
          <button onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <div onClick={editNoteHandle}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      )}
      <div className="note-delete">
        <button  onClick={() => deleteNote(id)}>Delete</button>
      </div>
    </div>
  );
}
// As Click on div container the title and content have editable option
