import React from "react";

function NoteAppHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input onChange={(event) => onSearch(event)} placeholder="Find Notes..." />
      </div>
    </div>
  );
}

export default NoteAppHeader;
