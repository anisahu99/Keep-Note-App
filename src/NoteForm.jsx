import { useState } from "react";
export default function NoteForm({ addNote }) {
  const [isExpanding, setIsExpanding] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function expandForm() {
    setIsExpanding(true);
  }

  function handleNote(e) {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addNote({ title, content });
      setTitle("");
      setContent("");
      setIsExpanding(false);
    }
  }
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleContent(e) {
    setContent(e.target.value);
  }
  return (
    <>
      <div className="note-form">
        <form onSubmit={handleNote}>
          {isExpanding && (
            <textarea
              placeholder="Title"
              rows="2"
              cols="50"
              onChange={handleTitle}
              value={title}
            />
          )}
          <textarea
            placeholder="Take a Note..."
            rows={isExpanding ? 4 : 2}
            cols="50"
            onClick={expandForm}
            onChange={handleContent}
            value={content}
          />
          <br />
          {isExpanding && <button type="submit">Add</button>}
        </form>
      </div>
    </>
  );
}
